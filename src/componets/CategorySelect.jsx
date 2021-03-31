import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const CategorySelect = ({ classes, handleCategoryChange, category }) => {
  return (
    <FormControl
      className={classes.formControl}
      style={{ marginTop: "1px", width: "100%" }}
    >
      <FormHelperText> Виберіть категорію</FormHelperText>
      <Select
        value={category}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleCategoryChange}
      >
        <MenuItem value="" disabled>
          Виберіть категорію
        </MenuItem>
        <MenuItem value="motorcycle">Мотоцикли</MenuItem>
        <MenuItem value="robots">Пилолоси</MenuItem>
        <MenuItem value="qudrocopters">Квадрокоптери</MenuItem>
      </Select>
    </FormControl>
  );
};
export default CategorySelect;
