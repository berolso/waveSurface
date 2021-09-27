import React, { useEffect, useState } from "react";
import logo from "../../media/logo_black.svg";

import { Link as Scroll } from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex",
    padding: 50,
    height: "100vh",
  },
  colorText: {
    color: theme.palette.primary,
  },
  container: {
    textAlign: "right",
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: '1rem',
    },
  },
  goDown: {
    color: theme.palette.primary.main,
    fontSize: "4rem",
  },
  logo: {
    width: "30rem",
    [theme.breakpoints.down("xs")]: {
      width: '15rem',
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      <div className={classes.root} id="header">
        <Slide
          direction="left"
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          // collapsedHeight={50}
        >
          <div className={classes.container}>
            <h1 className={classes.title}>
              Welcome to <br />
              <img alt="home logo" className={classes.logo} src={logo}></img>
            </h1>
            <Scroll to="landing-below" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default Landing;
