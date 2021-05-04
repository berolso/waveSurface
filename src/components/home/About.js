import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Markdown from "./Markdown";

import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
}));

const About = ({ checked = true }) => {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <div>
        <Markdown />
      </div>
    </Collapse>
  );
};

export default About;
