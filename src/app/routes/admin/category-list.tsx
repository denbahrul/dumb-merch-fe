import Button from "@/components/ui/button";
import CategoryListTable from "../../../features/category/components/category-list-table";

export default function CategoryListPage() {
  return (
    <div className="p-8">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="my-8 text-2xl font-bold">List Category</h1>
        <Button color="green" h="10" otherStyle="" title="add category" />
      </div>
      <CategoryListTable />
    </div>
  );
}
