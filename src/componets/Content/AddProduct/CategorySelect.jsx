import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { NavLink } from "react-router-dom";

const CategorySelect = ({
  classes,
  setCategory,
  category,

  newId,
  setId,
}) => {
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
        onChange={(e) => setCategory(e.target.value)}
      >
        <MenuItem value="" disabled>
          Виберіть категорію
        </MenuItem>
        <MenuItem
          value="motorcycles"
          onClick={() => setId(newId("motorcycles"))}
        >
          <NavLink to="/addproduct/motorcycle">Мотоцикли</NavLink>
        </MenuItem>
        <MenuItem value="phones" onClick={() => newId("phones")}>
          <NavLink to="/addproduct/phones">Телефони</NavLink>
        </MenuItem>
        <MenuItem value="robots" onClick={() => newId("robots")}>
          <NavLink to="/addproduct/robots">Пилоcoси</NavLink>
        </MenuItem>
        <MenuItem value="qudrocopters" onClick={() => newId("qudrocopters")}>
          <NavLink to="/addproduct/qudrocopters">Квадрокоптери</NavLink>
        </MenuItem>
      </Select>
    </FormControl>
  );
};
export default CategorySelect;
