import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import Button from "../../../components/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "@/stores/product/async";
import { addItemToCart } from "@/stores/cart/async";

export default function ProductDetail() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = useAppSelector((state) => state.product.currentProduct);
  const loading = useAppSelector((state) => state.product.loading);
  // const [quantity, setQuantity] = useState<number>(1);
  const quantity = 1;
  const [productImage, setProductImage] = useState(
    product?.productImage[0]?.url || "/dm-logo.svg",
  );

  useEffect(() => {
    dispatch(getProductById(+id!));
  }, [id]);

  useEffect(() => {
    if (product?.productImage[0]?.url) {
      setProductImage(product?.productImage[0]?.url);
    } else {
      setProductImage("/dm-logo.svg");
    }
  }, [product]);

  async function onClick() {
    await dispatch(
      addItemToCart({ productId: +id!, quantity, price: product?.price! }),
    );
  }

  if (loading === "pending") {
    return <p>Loading</p>;
  }

  return (
    <div className="justify-between gap-12 md:flex">
      <div className="m-auto flex w-full flex-col gap-2 md:w-[40%]">
        <img
          src={productImage}
          alt="Product Photo"
          className="m-auto h-72 w-full rounded-lg object-cover md:h-[500px]"
        />
        <div className="m-auto flex w-full gap-1 overflow-scroll rounded-lg scrollbar-hide">
          {product?.productImage.map((image) => {
            return (
              <img
                src={image?.url}
                alt="Product Photo"
                className="h-24 w-32 cursor-pointer rounded-lg object-cover"
                onClick={() => setProductImage(image?.url)}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 md:mt-0 md:w-[60%]">
        <h1 className="text-center text-3xl font-semibold text-red md:text-start md:text-4xl">
          {product?.productName}
        </h1>
        <p>Stock : {product?.quantity}</p>
        <p className="py-4 text-sm font-light md:text-base">
          {product?.description}
        </p>
        <p className="text-end text-xl font-semibold text-red md:text-2xl">
          Rp. {product?.price}
        </p>
        <Button
          otherStyle="mt-5"
          title="Add to cart"
          color="red"
          h="10"
          onClick={onClick}
        />
      </div>
    </div>
  );
}
