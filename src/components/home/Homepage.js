import React from "react";

import VantaBirds from "./VantaBirds";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Landing from "./Landing";
// import post1 from "./blog-post.1.md";
// import post2 from "./blog-post.2.md";
// import post3 from "./blog-post.3.md";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(0),
  },
}));

const Homepage = () => {
  return (
    <>
        <CssBaseline />
        <VantaBirds />
        <Landing />
    </>
  );
};
export default Homepage;
