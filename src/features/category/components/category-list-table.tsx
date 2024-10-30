import { StyledTableCell, StyledTableRow } from "@/components/ui/styledTable";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import { deleteCategory, getCategory } from "@/stores/category/async";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryListTable() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.category);
  const categories = entities;

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  function onEdit(id: number) {
    navigate(`/admin/edit-category/${id}`);
  }

  function onDelete(id: number) {
    dispatch(deleteCategory(id));
  }

  if (loading === "pending") {
    return <p>Loading</p>;
  }

  return (
    <TableContainer className="rounded-md text-white">
      <Table
        sx={{ minWidth: 700, maxWidth: "100%", tableLayout: "auto" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">No</StyledTableCell>
            <StyledTableCell align="left">Category Name</StyledTableCell>
            <StyledTableCell align="left">Total Product</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories!.map((category) => (
            <StyledTableRow key={category.id}>
              <StyledTableCell align="left">{category.id}</StyledTableCell>
              <StyledTableCell align="left">
                {category.categoryName}
              </StyledTableCell>
              <StyledTableCell align="left">
                {category.product.length}
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className="flex h-10 w-full items-center justify-center gap-2">
                  <button
                    className="w-20 rounded-md bg-green py-2"
                    onClick={() => {
                      onEdit(category.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="w-20 rounded-md bg-red py-2"
                    onClick={() => {
                      onDelete(category.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
