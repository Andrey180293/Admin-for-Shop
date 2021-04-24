import { useSelector } from "react-redux";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Row from "./Row";
import CustomizedSnackbars from "../../../../commons/SnackBar";

export default function Cart() {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <>
      <CustomizedSnackbars />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Ім'я замовника</TableCell>
              <TableCell align="left">К-сть </TableCell>
              <TableCell align="left">Номер телефону</TableCell>

              <TableCell align="left">Емейл</TableCell>
              <TableCell align="left">Адреса</TableCell>
              <TableCell align="left">Del</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((row, i) => (
                <Row key={row.name + i} row={row && row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
