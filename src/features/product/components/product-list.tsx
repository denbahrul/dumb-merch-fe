import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import { ProductData } from "../../../dummy/product";
import ProductCard from "./product-card";
import { useEffect } from "react";
import { getProduct } from "@/stores/product/async";

export default function ProductList() {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.product);
  const products = entities;

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  if (loading === "pending") {
    return <p>Loading</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products!.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
}
