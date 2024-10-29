import { StyledTableCell, StyledTableRow } from "@/components/ui/styledTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

function createData(
  id: number,
  productPhoto: string,
  productName: string,
  productDesc: string,
  price: string,
  qty: number,
) {
  return { id, productPhoto, productName, productDesc, price, qty };
}

const rows = [
  createData(
    1,
    "photo.jpg",
    "Monitor",
    "Lorem ipsum does amet wkwk wkwk hahah cokkk",
    "2.500.000",
    143,
  ),
  createData(
    2,
    "photo.jpg",
    "Monitor",
    "Lorem ipsum does amet wkwk wkwk hahah cokkk",
    "2.500.000",
    143,
  ),
  createData(
    3,
    "photo.jpg",
    "Monitor",
    "Lorem ipsum does amet wkwk wkwk hahah cokkk",
    "2.500.000",
    143,
  ),
  createData(
    4,
    "photo.jpg",
    "Monitor",
    "Lorem ipsum does amet wkwk wkwk hahah cokkk",
    "2.500.000",
    143,
  ),
  createData(
    5,
    "photo.jpg",
    "Monitor",
    "Lorem ipsum does amet wkwk wkwk hahah cokkk",
    "2.500.000",
    143,
  ),
];

export default function ProductListTable() {
  const navigate = useNavigate();
  function onEdit(id: number) {
    navigate(`/admin/edit-product/${id}`);
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
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.productPhoto}</StyledTableCell>
              <StyledTableCell align="left">{row.productName}</StyledTableCell>
              <StyledTableCell align="left">{row.productDesc}</StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left">{row.qty}</StyledTableCell>
              <StyledTableCell align="left">
                <div className="flex h-10 w-full items-center justify-center gap-2">
                  <button
                    className="w-20 rounded-md bg-green py-2"
                    onClick={() => {
                      onEdit(row.id);
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
