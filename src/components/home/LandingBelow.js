import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import About from './About'
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
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="landing-below">
       <About checked={checked} />
      {/* <ImageCard place={places[0]} checked={checked} />  */}
    </div>
  );
};

export default LandingBelow;
