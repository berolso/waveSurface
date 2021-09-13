import React from "react";
import VantaBirds from "./VantaBirds";
import Landing from "./Landing";
import LandingBelow from "./LandingBelow";
import CssBaseline from "@material-ui/core/CssBaseline";
import './Homepage.css'

const Homepage = () => {
  return (
    <div id='home-page'>
      <CssBaseline />
      <VantaBirds />
      <Landing />
      <LandingBelow />
    </div>
  );
};
export default Homepage;
