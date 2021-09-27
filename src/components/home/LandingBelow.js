import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Unroll from './Unroll'
// import ImageCard from "./ImageCard";
// import places from "../static/places";
import useWindowPosition from "../../hooks/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
const LandingBelow = () => {
  const classes = useStyles();
  const isOffScreen = useWindowPosition("header");
  return (
    <div className={classes.root} id="landing-below">
      <Unroll isOffScreen={isOffScreen} />
    </div>
  );
};

export default LandingBelow;
