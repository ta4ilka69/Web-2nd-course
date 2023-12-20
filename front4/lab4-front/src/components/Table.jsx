import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th ": {
    border: 0,
  },
}));

export default function CustomizedTables({ dots }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>x</StyledTableCell>
            <StyledTableCell>y</StyledTableCell>
            <StyledTableCell>r</StyledTableCell>
            <StyledTableCell align="right">Result</StyledTableCell>
            <StyledTableCell align="right">Received at</StyledTableCell>
            <StyledTableCell align="right">In process, ms</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dots.map((row) => (
            <StyledTableRow key={row.receivedAt}>
              <StyledTableCell component="th" scope="row">
                {row.x}
              </StyledTableCell>
              <StyledTableCell>{row.y}</StyledTableCell>
              <StyledTableCell>{row.r}</StyledTableCell>
              <StyledTableCell align="right">{row.result.toString()}</StyledTableCell>
              <StyledTableCell align="right">{row.receivedAt}</StyledTableCell>
              <StyledTableCell align="right">
                {row.executionTime}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
