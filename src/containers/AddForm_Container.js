import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { connect } from "react-redux";
import AddForm from "../componets/Content/AddProduct/AddForm";
import {
  setAbout,
  setCategory,
  setName,
  setPrice,
  setImages,
  setProperties,
} from "../store/action-creators/data";
import { setUpdateData } from "../store/action-creators/products";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const AddForm_Container = ({
  setAbout,
  setCategory,
  setName,
  setPrice,
  setImages,
  setProperties,
  setUpdateData,
}) => {
  const classes = useStyles();

  const clearFields = () => {
    setAbout("");
    setCategory("");
    setName("");
    setPrice("");
    setImages("");
    setProperties("");
  };

  return (
    <AddForm
      setName={setName}
      setPrice={setPrice}
      classes={classes}
      setCategory={setCategory}
      setAbout={setAbout}
      setImages={setImages}
      setProperties={setProperties}
      clearFields={clearFields}
      setUpdateData={setUpdateData}
    />
  );
};

export default compose(
  connect(null, {
    setAbout,
    setCategory,
    setName,
    setPrice,
    setImages,
    setProperties,
    setUpdateData,
  })
)(AddForm_Container);
