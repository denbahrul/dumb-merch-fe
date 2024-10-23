import EditProductForm from "../../../features/product/components/edit-product-form";

export default function EditProductPage() {
  return (
    <div className="px-8 py-8 md:px-20">
      <h1 className="my-8 text-2xl font-bold">Edit Product</h1>
      <EditProductForm />
    </div>
  );
}
