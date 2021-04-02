import React from "react";
import TextField from "@material-ui/core/TextField";
import CategorySelect from "./CategorySelect";
import MotorcyclesProperties from "../EditProduct/Forms_for_Product_Properties/MotorcyclesProperties";
import RobotsProperties from "../EditProduct/Forms_for_Product_Properties/RobotsProperties";
import QudrocoptersProperties from "../EditProduct/Forms_for_Product_Properties/QudrocoptersProperties";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import PhonesProperties from "../EditProduct/Forms_for_Product_Properties/PhonesProperties";

const AddForm = ({
  about,
  classes,
  category,
  setCategory,
  setAbout,
  setPrice,
  price,
  setName,
  name,
  imgValue,
  setImages,
  setProperties,
  clearFields,
  data,
  setUpdateData,
  newId,
  products,
  setId,
}) => {
  return (
    <Grid container spacing={6} item xs={12} justify="center">
      <Grid container item xs={6} spacing={2} direction="row">
        <Grid item xs={4}>
          <CategorySelect
            setCategory={setCategory}
            category={category}
            classes={classes}
            newId={newId}
            setId={setId}
            products={products}
          />
        </Grid>
        <Grid item xs={4}>
          {name && name.split("").length < 4 ? (
            <TextField
              error
              id="standard-basic-error-helper-text"
              label="Назва товару"
              value={name}
              helperText="min 4 chars."
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <TextField
              autoComplete="off"
              id="standard-basic"
              label="Назва товару"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            id="standard-basic"
            label="Ціна"
            autoComplete="off"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>

        <Grid container spacing={1} item xs={12} direction="row">
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-textarea"
              label="Додайте посилання на картинки через кому"
              placeholder="Введіть текст"
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
              placeholder="Введіть текст"
              multiline
              variant="outlined"
              rowsMax="10"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={6} direction="row">
        {category === "motorcycles" && (
          <MotorcyclesProperties setProperties={setProperties} />
        )}
        {category === "phones" && (
          <PhonesProperties setProperties={setProperties} />
        )}
        {category === "robots" && (
          <RobotsProperties setProperties={setProperties} />
        )}

        {category === "qudrocopters" && (
          <QudrocoptersProperties setProperties={setProperties} />
        )}
      </Grid>

      <Grid container spacing={6} item xs={6} direction="row">
        <Grid item xs={6}>
          {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
          <Button
            disabled={
              name && name.split("").length > 3 && price !== null && price > 0
                ? false
                : true
            }
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            onClick={() => setUpdateData(data)}
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
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AddForm;
