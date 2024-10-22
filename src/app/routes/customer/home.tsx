import ProductList from "../../../features/product/components/product-list";

export default function HomePage() {
  return (
    <div className="p-8">
      <p className="text-red mb-4 text-2xl font-semibold md:text-4xl">
        Product
      </p>
      <ProductList />
    </div>
  );
}
