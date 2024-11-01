import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import {
  UpdateProductDTO,
  updateProductSchema,
} from "@/validation/productSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getProductById, updateProduct } from "@/stores/product/async";
import { useEffect } from "react";
import { getCategory } from "@/stores/category/async";
import { AiOutlineDelete } from "react-icons/ai";
import { apiV1 } from "@/libs/api";
import Swal from "sweetalert2";

export default function EditProductForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = useAppSelector((state) => state.product.currentProduct);
  const categories = useAppSelector((state) => state.category.entities);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<UpdateProductDTO>({
    resolver: zodResolver(updateProductSchema),
  });

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProductById(+id!));
  }, []);

  useEffect(() => {
    if (product) {
      reset({
        productName: product.productName,
        description: product.description,
        price: +product.price,
        quantity: product.quantity,
        categoryId: product.categoryId,
      });
    }
  }, [product, reset]);

  async function onDelete(id: number) {
    try {
      const res = await apiV1.delete(`/product/image/delete/${id}`);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        background: "#1D1D1D",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1500,
      });
      dispatch(getProductById(+id!));
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.message}`,
          background: "#181818",
          color: "#fff",
        });
      }
    }
  }

  async function onSubmit(data: UpdateProductDTO) {
    await dispatch(updateProduct({ data, productId: +id! })).unwrap();
    navigate("/admin/product");
  }

  return (
    <div>
      <form
        className="mb-10 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          <label
            htmlFor="image"
            className={`mt-5 w-fit cursor-pointer rounded-lg bg-red px-6 py-2`}
          >
            Add new image
          </label>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {watch("productImage") &&
              Array.from(watch("productImage")).map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image as Blob)}
                  alt="product photo"
                  className="h-28 w-full rounded-md object-cover"
                />
              ))}
          </div>
          <p className="text-lg">Product image</p>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {product?.productImage.map((image) => {
              return (
                <div>
                  <img
                    key={image.id}
                    src={image.url}
                    alt="product photo"
                    className="h-28 w-full rounded-md object-cover"
                  />
                  <div
                    onClick={() => onDelete(image.id)}
                    className="mt-2 flex items-center justify-center gap-1"
                  >
                    <AiOutlineDelete color="#F74D4D" />
                    <p className="text-center text-sm text-red">delete</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <input
          {...register("productImage")}
          multiple
          id="image"
          type="file"
          hidden
        />
        <FormInput
          {...register("productName")}
          placeholder="product name"
          type="text"
        />
        {errors.productName && (
          <p className="text-rose-600">* {errors.productName.message}</p>
        )}
        <textarea
          {...register("description")}
          placeholder="product description"
          className="h-28 rounded-lg border-[1px] border-border-primary bg-background-teritery p-5 scrollbar-hide"
        />
        {errors.description && (
          <p className="text-rose-600">* {errors.description.message}</p>
        )}
        <FormInput
          {...register("price", { valueAsNumber: true })}
          placeholder="price"
          type="number"
        />
        {errors.price && (
          <p className="text-rose-600">* {errors.price.message}</p>
        )}
        <FormInput
          {...register("quantity", { valueAsNumber: true })}
          placeholder="stock"
          type="number"
        />
        {errors.quantity && (
          <p className="text-rose-600">* {errors.quantity.message}</p>
        )}
        <div>
          <p>Choose a category</p>
          <select
            {...register("categoryId", { valueAsNumber: true })}
            form="categoryform"
            className="mt-2 h-12 w-full rounded-lg border-[1px] border-border-primary bg-background-teritery px-4"
          >
            {categories!.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              );
            })}
          </select>
        </div>
        {errors.categoryId && (
          <p className="text-rose-600">* {errors.categoryId.message}</p>
        )}
        <Button
          type="submit"
          title="Update"
          color="green"
          otherStyle="w-full"
          h="12"
        />
      </form>
    </div>
  );
}
