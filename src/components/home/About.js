import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Markdown from "./Markdown";
import Story from './Story'

import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const About = ({ checked = true }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <div>
        {/* <Markdown className={classes.root}/> */}
        <Story />
      </div>
    </Collapse>
      </div>
  );
};

export default About;
