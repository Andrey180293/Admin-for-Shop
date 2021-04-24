import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { setUpdateData } from "../../../../store/action-creators/products";

import { connect } from "react-redux";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const Row = ({ row, setUpdateData }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.data && row.data.length}</TableCell>
        <TableCell align="left">{row.phoneNumber}</TableCell>

        <TableCell align="left">{row.email}</TableCell>

        <TableCell align="left">{row.adress}</TableCell>

        <TableCell align="left">
          <IconButton
            color="secondary"
            aria-label="delete"
            onClick={() => setUpdateData("cart", row, "DELETE", "")}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              margin={1}
              style={{
                backgroundColor: "#dcdedc",
              }}
            >
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>назва</TableCell>
                    <TableCell>категорія</TableCell>

                    <TableCell>цінa($)</TableCell>
                    <TableCell align="left">к-сть</TableCell>
                    <TableCell align="left">бренд</TableCell>
                    <TableCell align="left">ціна</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.data &&
                    row.data.map((dataItem, i) => (
                      <TableRow key={dataItem.name + i}>
                        <TableCell component="th" scope="row">
                          {dataItem.name}
                        </TableCell>
                        <TableCell>{dataItem.category}</TableCell>
                        <TableCell>{dataItem.price}</TableCell>

                        <TableCell align="left">{dataItem.amount}</TableCell>
                        <TableCell align="left">
                          {dataItem.properties.brend}
                        </TableCell>

                        <TableCell align="left">
                          {Math.round(dataItem.amount * dataItem.price * 100) /
                            100}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default connect(null, { setUpdateData })(Row);
