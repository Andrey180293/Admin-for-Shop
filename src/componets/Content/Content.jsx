import React from "react";
import Typography from "@material-ui/core/Typography";
import AddForm_Container from "../../containers/AddForm_Container";
import { Route } from "react-router-dom";
import Edit_Form_Container from "../../containers/Edit_Form_Container";
const Content = ({ classes }) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Route
        exact
        path="/"
        render={() => (
          <Typography paragraph>Виберіть зліва в меню дію</Typography>
        )}
      />
      <Route path="/addproduct/" render={() => <AddForm_Container />} />
      <Route path="/delete/:category" render={() => <Edit_Form_Container />} />
    </main>
  );
};

export default Content;
