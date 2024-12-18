import AddProductForm from "@/features/product/components/add-product-form";

export default function AddProductPage() {
  return (
    <div className="px-8 py-8 md:px-20">
      <h1 className="my-8 text-2xl font-bold">Add New Product</h1>
      <AddProductForm />
    </div>
  );
}
