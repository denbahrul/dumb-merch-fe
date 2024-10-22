import PageTitle from "../../../components/ui/page-title";
import ProductList from "../../../features/product/components/product-list";

export default function HomePage() {
  return (
    <div className="p-8">
      <PageTitle title="Product" />
      <ProductList />
    </div>
  );
}
