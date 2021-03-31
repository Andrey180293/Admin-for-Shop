import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
const RobotsProperties = () => {
  return (
    <Grid container spacing={2} xs={12}>
      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Бренд"
            id="outlined-size-small"
            defaultValue="Small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Країна"
            id="outlined-size-small"
            defaultValue="Small"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Колір"
            id="outlined-size-small"
            defaultValue="Small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Тривалість роботи"
            id="outlined-size-small"
            defaultValue="Small"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Вага"
            id="outlined-size-small"
            defaultValue="Small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Об'єм батареї"
            id="outlined-size-small"
            defaultValue="Small"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default RobotsProperties;
