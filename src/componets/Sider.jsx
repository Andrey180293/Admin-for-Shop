import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import AddIcon from "@material-ui/icons/Add";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AndroidIcon from "@material-ui/icons/Android";
import FlightIcon from "@material-ui/icons/Flight";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ classes, getProducts }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSubMenu, setopenSubMenu] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setopenSubMenu(!openSubMenu);
  };
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Програма управління сервером Online Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          {["Додати товар"].map((text, index) => (
            <NavLink to="/addproduct/" style={{ textDecorationLine: "none" }}>
              <ListItem button key={text}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </NavLink>
          ))}
        </List>

        <Divider />
        <NavLink to="/delete" style={{ textDecorationLine: "none" }}>
          <ListItem button button onClick={handleClick}>
            <ListItemIcon>
              <DeleteForeverIcon />
            </ListItemIcon>
            <ListItemText primary="Редагувати" />
            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </NavLink>
        {openSubMenu && (
          <List>
            {[
              {
                name: "Мотоцикли",
                link: "motorcycles",
                icon: <MotorcycleIcon />,
              },
              { name: "Телефони", link: "phones", icon: <PhoneAndroidIcon /> },
              {
                name: "Роботи пилососи",
                link: "robots",
                icon: <AndroidIcon />,
              },
              {
                name: "Квадрокоптери",
                link: "qudrocopters",
                icon: <FlightIcon />,
              },
            ].map((el, index) => (
              <NavLink
                to={"/delete/" + el.link}
                style={{ textDecorationLine: "none" }}
              >
                <ListItem
                  button
                  key={el.name}
                  onClick={() => {
                    getProducts(el.link);
                  }}
                >
                  <ListItemIcon>{el.icon}</ListItemIcon>
                  <ListItemText primary={el.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        )}
      </Drawer>
    </>
  );
};

export default Sidebar;
