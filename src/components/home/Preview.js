import React from "react";

import PreviewCard from "./PreviewCard";
import { previews, previewMain } from "./previews";
import PreviewHeader from "./PreviewHeader";

import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Preview = () => {

  return (
    <>
      <CssBaseline />
      <div>
        <Paper >
          <PreviewHeader post={previewMain} />
        </Paper>
        <main>
          <Grid container spacing={2}>
            {previews.map((card) => (
              <PreviewCard
                key={card.title}
                preview={card}
              />
            ))}
          </Grid>
        </main>
      </div>
    </>
  );
};

export default Preview;
