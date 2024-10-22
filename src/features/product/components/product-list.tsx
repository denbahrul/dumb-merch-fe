import { ProductData } from "../../../dummy/product";
import ProductCard from "./product-card";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {ProductData.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
}
