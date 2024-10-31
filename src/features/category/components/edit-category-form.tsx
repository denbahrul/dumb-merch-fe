import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import { useForm } from "react-hook-form";
import {
  UpdateCategoryDTO,
  updateCategorySchema,
} from "@/validation/categorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateCategory } from "@/stores/category/async";

export default function EditCategoryForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const category = useAppSelector((state) =>
    state.category.entities?.filter((category) => category.id == +id!),
  );

  console.log("xxx", category);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCategoryDTO>({
    resolver: zodResolver(updateCategorySchema),
  });

  async function onSubmit(data: UpdateCategoryDTO) {
    await dispatch(updateCategory({ data, categoryId: +id! })).unwrap();
    navigate("/admin/category");
  }
  return (
    <div>
      <form
        className="mb-10 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          {...register("categoryName")}
          placeholder="Category"
          type="text"
        />
        {errors.categoryName && (
          <p className="text-rose-600">* {errors.categoryName.message}</p>
        )}
        <Button
          type="submit"
          otherStyle="w-full mt-5"
          title="Create"
          color="green"
          h="12"
        />
      </form>
    </div>
  );
}
