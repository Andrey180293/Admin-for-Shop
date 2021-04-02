import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { connect } from "react-redux";
import Form from "../componets/Form";
import {
  setAbout,
  setCategory,
  setName,
  setPrice,
  setImages,
  setProperties,
  setData,
  setId,
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

const Form_Container = ({
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
  setData,
  data,
  setUpdateData,
  setId,
  getProducts,
  products,
  newId,
}) => {
  const classes = useStyles();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const clearFields = () => {
    setAbout("");
    setCategory("");
    setName("");
    setPrice("");
    setImages("");
    setProperties("");
  };

  return (
    <Form
      setName={setName}
      setPrice={setPrice}
      name={name}
      price={price}
      about={about}
      classes={classes}
      handleCategoryChange={handleCategoryChange}
      category={category}
      handleAboutChange={handleAboutChange}
      setImages={setImages}
      imgValue={imgValue}
      setProperties={setProperties}
      clearFields={clearFields}
      setData={setData}
      data={data}
      newId={newId}
      products={products}
      setId={setId}
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
    setData,
    setUpdateData,
    setId,
    getProducts,
    newId,
  })
)(Form_Container);
