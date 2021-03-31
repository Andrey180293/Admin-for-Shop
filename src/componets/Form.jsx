import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CategorySelect from "./CategorySelect";
import MotorcyclesProperties from "./Forms_for_Product_Properties/MotorcyclesProperties";
import RobotsProperties from "./Forms_for_Product_Properties/RobotsProperties";
import QudrocoptersProperties from "./Forms_for_Product_Properties/QudrocoptersProperties";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

const Form = ({
  about,
  classes,
  category,
  handleCategoryChange,
  handleAboutChange,
  setPrice,
  price,
  setName,
  name,
  imgValue,
  setImages,
  setProperties,
  clearFields,
  data,
  setData,
}) => {
  return (
    <Grid container spacing={6} xs={12} justify="center">
      <Grid container item xs={6} spacing={2} direction="row">
        <Grid item xs={4}>
          <CategorySelect
            handleCategoryChange={handleCategoryChange}
            category={category}
            classes={classes}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="Введіть ім'я товару"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="Ціна"
            autoComplete="off"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </Grid>

        <Grid container spacing={1} item xs={12} direction="row">
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-textarea"
              label="Додайте посилання на картинки через кому"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              rowsMax="10"
              value={imgValue}
              onChange={(e) => setImages(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-textarea"
              label="Про товар"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              rowsMax="10"
              value={about}
              onChange={handleAboutChange}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} direction="row">
        {category === "motorcycle" && (
          <MotorcyclesProperties setProperties={setProperties} />
        )}
        {category === "robots" && <RobotsProperties />}
        {category === "qudrocopters" && <QudrocoptersProperties />}
      </Grid>

      <Grid container spacing={6} item xs={6} direction="row">
        <Grid item xs={6}>
          {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            onClick={() => setData(data)}
          >
            Send
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={(e) => clearFields(e)}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Form;
