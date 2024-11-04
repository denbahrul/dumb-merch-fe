import Button from "@/components/ui/button";
import ProductListTable from "../../../features/product/components/product-list-table";
import { useNavigate } from "react-router-dom";

export default function ProductListPage() {
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="my-8 text-2xl font-bold">Product List</h1>
        <Button
          color="green"
          h="10"
          otherStyle=""
          title="add product"
          onClick={() => {
            navigate("/admin/add-product");
          }}
        />
      </div>
      <ProductListTable />
    </div>
  );
}
