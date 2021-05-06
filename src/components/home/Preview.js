import React, { useState } from "react";

import PreviewCard from "./PreviewCard";
import {previews, previewMain} from "./previews";
import PreviewHeader from "./PreviewHeader";
import instructionals from "../../media/instructionals.png";
 

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
  },
  paper: {
    // margin: "5%",
    // backgroundImage: {instructionals},
    // height: "70%",
  },
  container: {
    // margin: "5%",
  },
  card: {
    // margin: "5%",
  },
}));

const Preview = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          
          <PreviewHeader post={previewMain} />
        </Paper>
        <main>
          <Grid className={classes.container} container spacing={2}>
            {previews.map((card) => (
              <PreviewCard
                className={classes.card}
                key={card.title}
                preview={card}
              />
            ))}
          </Grid>

        </main>
      </Container>
    </>
  );
};

export default Preview;
