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
} from "../store/action-creators/data";
import { setUpdateData, updatePrice } from "../store/action-creators/products";
import CustomizedTables from "../componets/Products Table/CustomizedTables";
import { NavLink } from "react-router-dom";

const Product_Container = ({ products, updatePrice }) => {
  return (
    <>
      <CustomizedTables
        products={products}
        setUpdateData={setUpdateData}
        updatePrice={updatePrice}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
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
    updatePrice,
  })
)(Product_Container);
/*


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
    />

*/
