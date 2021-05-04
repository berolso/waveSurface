import React from "react";

import VantaBirds from "./VantaBirds";
import Landing from "./Landing";
import LandingBelow from "./LandingBelow";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

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
      <LandingBelow />
    </>
  );
};
export default Homepage;
