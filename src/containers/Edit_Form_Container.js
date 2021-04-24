import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  setUpdateData,
  updatePrice,
  updateName,
  setOpenSnackBar,
} from "../store/action-creators/products";
import CustomizedTables from "../componets/Content/EditProduct/CustomizedTables";
import Preloader from "../commons/Preloader";

const Edit_Form_Container = ({
  products,
  updatePrice,
  updateName,
  deleteDataItem,
  setUpdateData,
  isOpenSnackBar,
  snackBarMessage,
  setOpenSnackBar,
  isLoading,
}) => {
  if (isLoading === false) {
    return <Preloader />;
  }
  return (
    <CustomizedTables
      products={products && products.sort((a, b) => a._id - b._id)}
      setUpdateData={setUpdateData}
      updatePrice={updatePrice}
      updateName={updateName}
      deleteDataItem={deleteDataItem}
      isOpenSnackBar={isOpenSnackBar}
      snackBarMessage={snackBarMessage}
      setOpenSnackBar={setOpenSnackBar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    snackBarMessage: state.products.snackBarMessage,
    isOpenSnackBar: state.products.isOpenSnackBar,
    isLoading: state.products.isLoading,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUpdateData,
    updatePrice,
    updateName,
    setOpenSnackBar,
  })
)(Edit_Form_Container);
