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
import {
  setUpdateData,
  getProducts,
  newId,
} from "../store/action-creators/products";

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
  about,
  setAbout,
  setCategory,
  category,
  name,
  price,
  setName,
  setPrice,
  setImages,
  imgValue,
  setProperties,
  data,
  setUpdateData,
  products,
  newId,
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
      name={name}
      price={price}
      about={about}
      classes={classes}
      setCategory={setCategory}
      category={category}
      setAbout={setAbout}
      setImages={setImages}
      imgValue={imgValue}
      setProperties={setProperties}
      clearFields={clearFields}
      setUpdateData={setUpdateData}
      data={data}
      newId={newId}
      products={products}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
    about: state.data.about,
    category: state.data.category,
    name: state.data.name,
    price: state.data.price,
    imgValue: state.data.imgValue,
    products: state.products.products,
  };
};

export default compose(
  connect(mapStateToProps, {
    setAbout,
    setCategory,
    setName,
    setPrice,
    setImages,
    setProperties,
    setUpdateData,
    getProducts,
    newId,
  })
)(AddForm_Container);
