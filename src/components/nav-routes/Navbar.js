import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import SideDrawer from "./SideDrawer";
import lightLogo from "../../media/wavesurface_art_white-03 copy.png";

import { makeStyles } from "@material-ui/core/styles";

//
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
//

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
  sideDrawerButton: {
    marginRight: theme.spacing(1),
  },
  logo: {
    width: "15rem",
    [theme.breakpoints.down("sm")]: {
      width: "8rem",
    },
  },
  container: { display: "flex" },
  username: { paddingTop: "12px" },
  rightSide: {
    marginLeft: "auto",
    marginRight: 0,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { currentUser, logout } = useContext(UserContext);
  const [drawerState, setdrawerState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleSideDrawer = () => {
    setdrawerState(true);
  };
  const handleDrawerClose = () => {
    setdrawerState(false);
  };

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const AdminMenu = (
    <MenuItem onClick={handleClose} component={NavLink} to="/users">
      Users
    </MenuItem>
  );

  const DesktopLoggedIn = (
    <>
      <Tabs value={false}>
        <Tab label="Preview" component={NavLink} to="/preview" />
        {currentUser && currentUser.isFullAccess && (
          <Tab
            label="Instructionals"
            component={NavLink}
            to="/instructionals"
          />
        )}
      </Tabs>
      <Typography className={classes.username}>
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
        <MenuItem
          onClick={handleClose}
          component={NavLink}
          to={`/users/${currentUser && currentUser.username}`}
        >
          My Account
        </MenuItem>
        {currentUser && currentUser.isAdmin && AdminMenu}
        <Divider />
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </>
  );

  const DesktopLoggedOut = (
    <>
      <Tabs value={false}>
        <Tab label="Preview" component={NavLink} to="/preview" />
      </Tabs>
      <Button color="inherit" component={Link} to="/signup">
        SignUp
      </Button>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
    </>
  );

  const MobileLoggedIn = (
    <>
      <div className={classes.username}>
        {currentUser ? currentUser.username : "null"}
      </div>
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
        <MenuItem
          onClick={handleClose}
          component={NavLink}
          to={`/users/${currentUser && currentUser.username}`}
        >
          My Account
        </MenuItem>
        {currentUser && currentUser.isAdmin && AdminMenu}
        <Divider />
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </>
  );

  const MobileLoggedOut = (
    <Button color="inherit" component={Link} to="/login">
      Login
    </Button>
  );

  const MobileMenuLoggedIn = (
    <>
      {currentUser && currentUser.isFullAccess && (
        <>
          <MenuItem
            onClick={handleMobileMenuClose}
            component={Link}
            to="/instructionals"
          >
            Instructionals
          </MenuItem>
        </>
      )}
    </>
  );

  const MobileMenuLoggedOut = (
    <MenuItem onClick={handleMobileMenuClose} component={NavLink} to="/signup">
      Sign up
    </MenuItem>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {currentUser ? MobileMenuLoggedIn : MobileMenuLoggedOut}
      <MenuItem onClick={handleMobileMenuClose} component={Link} to="/preview">
        Preview
      </MenuItem>
    </Menu>
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
            className={classes.sideDrawerButton}
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

          <div className={classes.rightSide}>
            {/* desktop */}
            <div className={classes.sectionDesktop}>
              {currentUser ? DesktopLoggedIn : DesktopLoggedOut}
            </div>

            {/* mobile */}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
              {currentUser ? MobileLoggedIn : MobileLoggedOut}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};
export default Navbar;
