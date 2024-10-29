import { StyledTableCell, StyledTableRow } from "@/components/ui/styledTable";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import { getProduct } from "@/stores/product/async";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductListTable() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.product);
  const products = entities;

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  function onEdit(id: number) {
    navigate(`/admin/edit-product/${id}`);
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
            <StyledTableCell align="left">Photo</StyledTableCell>
            <StyledTableCell align="left">Product Name</StyledTableCell>
            <StyledTableCell align="left">Product Desc</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Qty</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products!.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell align="left">{product.id}</StyledTableCell>
              <StyledTableCell align="left">
                <div className="grid w-24 grid-cols-2 gap-1">
                  {product.productImage.map((image) => {
                    return (
                      <img
                        src={image.url}
                        alt="product photo"
                        className="h-full w-full rounded-sm object-cover"
                      />
                    );
                  })}
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">
                {product.productName}
              </StyledTableCell>
              <StyledTableCell align="left">
                {product.description}
              </StyledTableCell>
              <StyledTableCell align="left">{product.price}</StyledTableCell>
              <StyledTableCell align="left">{product.quantity}</StyledTableCell>
              <StyledTableCell align="left">
                <div className="flex h-10 w-full items-center justify-center gap-2">
                  <button
                    className="w-20 rounded-md bg-green py-2"
                    onClick={() => {
                      onEdit(product.id);
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
