import AddCategoryForm from "@/features/category/components/add-category";

export default function AddCategoryPage() {
  return (
    <div className="px-8 py-8 md:px-20">
      <h1 className="my-8 text-2xl font-bold">Add New Category</h1>
      <AddCategoryForm />
    </div>
  );
}
