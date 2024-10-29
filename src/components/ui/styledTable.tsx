import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#303030",
    color: "#FFFFFF",
    fontFamily: "'Sen', serif",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "'Sen', serif",
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#232323",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#303030",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
