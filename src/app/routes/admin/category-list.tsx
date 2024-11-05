import Button from "@/components/ui/button";
import CategoryListTable from "../../../features/category/components/category-list-table";
import { useNavigate } from "react-router-dom";

export default function CategoryListPage() {
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="my-6 text-2xl font-bold">Category List</h1>
        <Button
          color="green"
          h="10"
          otherStyle=""
          title="add category"
          onClick={() => {
            navigate("/admin/add-category");
          }}
        />
      </div>
      <CategoryListTable />
    </div>
  );
}
