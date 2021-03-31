import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getProducts } from "../store/action-creators/products";
import Sidebar from "../componets/Sider";

const SideBar_Container = ({ getProducts, classes }) => {
  return <Sidebar getProducts={getProducts} classes={classes} />;
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default compose(connect(mapStateToProps, { getProducts }))(
  SideBar_Container
);
