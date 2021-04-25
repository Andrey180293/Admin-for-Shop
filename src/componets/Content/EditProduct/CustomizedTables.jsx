import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CustomizedSnackbars from "../../../commons/SnackBar";
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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({
  products,
  setUpdateData,
  updatePrice,
  updateName,
}) {
  const classes = useStyles();

  const [activPriceInputValue, setActivPriceInputValue] = useState(null);
  const [activePriceIndex, setActivPriceIndex] = useState(null);

  const [activNameValue, setActivNameValue] = useState(null);
  const [activNameIndex, setActivNameIndex] = useState(null);

  const setNewPrice = (item) => {
    updatePrice({ ...item, price: +activPriceInputValue });
    setActivPriceInputValue(null);
    setActivPriceIndex(null);
  };

  const setNewName = (item) => {
    updateName({ ...item, name: activNameValue });
    setActivNameValue(null);
    setActivNameIndex(null);
  };
  const activeTextFieldPrice = (index, price) => {
    setActivPriceInputValue(price);
    setActivPriceIndex(index);
  };
  const activeTextFieldName = (index, name) => {
    setActivNameValue(name);
    setActivNameIndex(index);
  };

  return (
    <>
      <CustomizedSnackbars />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Назва</StyledTableCell>
              <StyledTableCell align="right">Категорія</StyledTableCell>
              <StyledTableCell align="right">id</StyledTableCell>
              <StyledTableCell align="right">К-сть&nbsp;(шт)</StyledTableCell>
              <StyledTableCell align="right">Ціна&nbsp;(грн)</StyledTableCell>

              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((el, index) => (
                <StyledTableRow key={el._id}>
                  {activNameIndex === index ? (
                    <StyledTableCell align="left">
                      <TextField
                        onFocus={(e) => e.target.select()}
                        autoFocus={true}
                        align="left"
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        onChange={(e) => setActivNameValue(e.target.value)}
                        value={activNameValue}
                        onClick={() => setActivNameValue(el.name)}
                        onBlur={() =>
                          activNameValue === null ? el.name : setNewName(el)
                        }
                      />
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell
                      style={{ cursor: "pointer", color: "red" }}
                      component="th"
                      scope="row"
                      onClick={() => activeTextFieldName(index, el.name)}
                    >
                      {el.name}
                    </StyledTableCell>
                  )}

                  <StyledTableCell align="right">{el.category}</StyledTableCell>
                  <StyledTableCell align="right">{el._id}</StyledTableCell>
                  <StyledTableCell align="right">{el.amount}</StyledTableCell>

                  {activePriceIndex === index ? (
                    <StyledTableCell align="right">
                      <TextField
                        onFocus={(e) => e.target.select()}
                        autoFocus={true}
                        align="right"
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        onChange={(e) =>
                          setActivPriceInputValue(e.target.value)
                        }
                        value={activPriceInputValue}
                        onClick={() => setActivPriceInputValue(el.price)}
                        onBlur={() =>
                          activPriceInputValue === null
                            ? el.price
                            : setNewPrice(el)
                        }
                      />
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell
                      style={{ cursor: "pointer", color: "red" }}
                      align="right"
                      onClick={() => activeTextFieldPrice(index, el.price)}
                    >
                      {el.price}
                    </StyledTableCell>
                  )}
                  <StyledTableCell align="right">
                    <IconButton
                      color="primary"
                      aria-label="delete"
                      onClick={() =>
                        setUpdateData("products", el, "PATCH", el.category)
                      }
                    >
                      <CloudUploadIcon />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton
                      color="secondary"
                      aria-label="delete"
                      onClick={() =>
                        setUpdateData("products", el, "DELETE", el.category)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
