import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenSnackBar } from "../store/action-creators/products";
import { useSelector, useDispatch } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const snackBarMessage = useSelector(
    (state) => state.products.snackBarMessage
  );

  const isOpenSnackBar = useSelector((state) => state.products.isOpenSnackBar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setOpenSnackBar(false));
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={isOpenSnackBar}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {snackBarMessage && snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
