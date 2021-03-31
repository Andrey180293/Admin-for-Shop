import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  ["azaza", 356, 16.0, 49, 3.9],
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({
  products,
  setUpdateData,
  updatePrice,
}) {
  const classes = useStyles();
  const [activInputValue, setActivInputValue] = useState(null);
  const [activeInputIndex, setActivInput] = useState(null);

  const setNewPrice = (item) => {
    updatePrice({ ...item, price: +activInputValue });
    setActivInputValue(null);
    setActivInput(null);
  };

  const activeTextField = (index, price) => {
    setActivInputValue(price);
    setActivInput(index);
  };

  console.log(activInputValue);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Назва</StyledTableCell>
            <StyledTableCell align="right">Категорія</StyledTableCell>
            <StyledTableCell align="right">id</StyledTableCell>
            <StyledTableCell align="right">Кількість&nbsp;(шт)</StyledTableCell>
            <StyledTableCell align="right">Ціна&nbsp;(грн)</StyledTableCell>

            <StyledTableCell align="right">Add</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((el, index) => (
              <StyledTableRow key={el.id}>
                <StyledTableCell component="th" scope="row">
                  {el.name}
                </StyledTableCell>
                <StyledTableCell align="right">{el.category}</StyledTableCell>
                <StyledTableCell align="right">{el.id}</StyledTableCell>
                <StyledTableCell align="right">{el.amount}</StyledTableCell>

                {activeInputIndex === index ? (
                  <StyledTableCell align="right">
                    <TextField
                      autoFocus="true"
                      align="right"
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      onChange={(e) => setActivInputValue(e.target.value)}
                      value={activInputValue}
                      onClick={() => setActivInputValue(el.price)}
                      // defaultValue={el.price}
                      onBlur={() =>
                        activInputValue === null ? el.price : setNewPrice(el)
                      }
                    />
                  </StyledTableCell>
                ) : (
                  <StyledTableCell
                    align="right"
                    onClick={() => activeTextField(index, el.price)}
                  >
                    {el.price}
                  </StyledTableCell>
                )}
                <StyledTableCell align="right">
                  <Button
                    align="right"
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    onClick={() => {
                      setUpdateData(el);
                    }}
                  >
                    Link
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
