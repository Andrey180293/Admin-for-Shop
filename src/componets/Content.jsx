import React from "react";
import Typography from "@material-ui/core/Typography";
import Form_Container from "../containers/Form_Container";

const Content = ({ classes }) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Form_Container />
    </main>
  );
};

export default Content;
