import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import SideDrawer from "./SideDrawer";
import lightLogo from "../../media/wavesurface_art_white-03 copy.png";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
  logo: {
    width: "15rem",
  },
  container: { display: "flex" },
}));

const Navbar = () => {
  const classes = useStyles();

  const { currentUser, logout } = useContext(UserContext);

  const [drawerState, setdrawerState] = useState(false);

  const handleSideDrawer = () => {
    setdrawerState(true);
  };
  const handleDrawerClose = () => {
    setdrawerState(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    logout();
  };

  // for auth testing
  // const UserTable = () => {
  //   console.log(currentUser)
  //   return (
  //     <>
  //       <table style={{ marginLeft: "auto", marginRight: "auto" }}>
  //         <tbody>
  //           <tr>
  //             {currentUser &&
  //               Object.keys(currentUser).map((e, i) => <th key={i}> {e} </th>)}
  //           </tr>
  //           <tr>
  //             {currentUser &&
  //               Object.values(currentUser).map((e, i) => (
  //                 <td key={i}> {e} </td>
  //               ))}
  //           </tr>
  //         </tbody>
  //       </table>
  //     </>
  //   );
  // };

  const AdminMenu = (
    <MenuItem onClick={handleClose} component={NavLink} to="/users">
      Users
    </MenuItem>
  );

  const LoggedIn = (
    <>
      {currentUser && currentUser.isFullAccess && (
        <Tabs value={false}>
          <Tab
            label="Instructionals"
            component={NavLink}
            to="/instructionals"
          />
        </Tabs>
      )}
      <Typography variant="h6" className={classes.username}>
        {currentUser ? currentUser.username : "null"}
      </Typography>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile 🚧</MenuItem>
        <MenuItem onClick={handleClose}>My account 🚧</MenuItem>
        {currentUser && currentUser.isAdmin && AdminMenu}
        <Divider />
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </>
  );

  const LoggedOut = (
    <>
      <Button color="inherit" component={Link} to="/signup">
        Sign Up
      </Button>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleSideDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            drawerState={drawerState}
            handleClose={handleDrawerClose}
          />

          <Link to="/">
            <img className={classes.logo} src={lightLogo} alt="light Logo" />
          </Link>

          <Typography className={classes.title}></Typography>
          <Tabs value={false}>
            <Tab label="Preview" component={NavLink} to="/preview" />
          </Tabs>
          {currentUser ? LoggedIn : LoggedOut}
        </Toolbar>
      </AppBar>
      {/* <UserTable /> */}
    </div>
  );
};
export default Navbar;
