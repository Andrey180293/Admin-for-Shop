import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  setUpdateData,
  updatePrice,
  updateName,
  deleteDataItem,
} from "../store/action-creators/products";
import CustomizedTables from "../componets/Content/EditProduct/CustomizedTables";

const Edit_Form_Container = ({
  products,
  updatePrice,
  updateName,
  deleteDataItem,
}) => {
  return (
    <>
      <CustomizedTables
        products={products && products.sort((a, b) => a.id - b.id)}
        setUpdateData={setUpdateData}
        updatePrice={updatePrice}
        updateName={updateName}
        deleteDataItem={deleteDataItem}
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
    setUpdateData,
    updatePrice,
    updateName,
    deleteDataItem,
  })
)(Edit_Form_Container);
