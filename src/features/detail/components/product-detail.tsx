import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import Button from "../../../components/ui/button";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "@/stores/product/async";

export default function ProductDetail() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = useAppSelector((state) => state.product.currentProduct);
  const loading = useAppSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(getProductById(+id!));
  }, [id]);

  if (loading === "pending") {
    return <p>Loading</p>;
  }

  return (
    <div className="justify-between gap-12 md:flex">
      <div className="m-auto flex w-full flex-col gap-2 md:w-[40%]">
        <img
          src={
            product?.productImage.length !== 0
              ? product?.productImage[0].url
              : "/dm-logo.svg"
          }
          alt="Product Photo"
          className="m-auto h-72 w-full rounded-lg object-cover md:h-[500px]"
        />
        <div className="m-auto flex w-full gap-1 overflow-scroll rounded-lg scrollbar-hide">
          {product?.productImage.map((image) => {
            return (
              <img
                src={image.url}
                alt="Product Photo"
                className="h-24 w-32 rounded-lg object-cover"
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
        <Button otherStyle="mt-5" title="Buy" color="red" h="10" />
      </div>
    </div>
  );
}
