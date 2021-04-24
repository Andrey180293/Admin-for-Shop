import React from "react";
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import {
  setUpdateData,
  updatePrice,
  updateName,
} from "../store/action-creators/products";
import CustomizedTables from "../componets/Content/EditProduct/CustomizedTables";
import Preloader from "../commons/Preloader";

const Edit_Form_Container = ({ updatePrice, updateName, setUpdateData }) => {
  const isLoading = useSelector((state) => state.products.isLoading);
  const products = useSelector((state) => state.products.products);

  if (isLoading === false) {
    return <Preloader />;
  }
  return (
    <CustomizedTables
      products={products && products.sort((a, b) => a._id - b._id)}
      setUpdateData={setUpdateData}
      updatePrice={updatePrice}
      updateName={updateName}
    />
  );
};

export default compose(
  connect(null, {
    setUpdateData,
    updatePrice,
    updateName,
  })
)(Edit_Form_Container);
