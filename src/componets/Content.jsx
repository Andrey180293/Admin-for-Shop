import React from "react";
import Typography from "@material-ui/core/Typography";
import Form_Container from "../containers/Form_Container";
import { Route } from "react-router-dom";
import Product_Container from "../containers/Product_Container";
const Content = ({ classes }) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Route
        exact
        path="/"
        render={() => (
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
        )}
      />
      <Route path="/addproduct/" render={() => <Form_Container />} />
      <Route path="/delete/:category" render={() => <Product_Container />} />
    </main>
  );
};

export default Content;
