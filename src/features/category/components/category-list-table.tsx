import { StyledTableCell, StyledTableRow } from "@/components/ui/styledTable";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import { getCategory } from "@/stores/category/async";
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
            <StyledTableCell align="center">No</StyledTableCell>
            <StyledTableCell align="center">Category Name</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories!.map((category) => (
            <StyledTableRow key={category.id}>
              <StyledTableCell align="center">{category.id}</StyledTableCell>
              <StyledTableCell align="center">
                {category.categoryName}
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
                  <button className="w-20 rounded-md bg-red py-2">
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
