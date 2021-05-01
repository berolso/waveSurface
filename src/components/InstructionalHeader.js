import React from "react";

import { Link as RRLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const InstructionalHeader = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Instructionals
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {`Browse through provided instructionals or request to have one made for a specific situation`}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                to="/instructionals/request"
                component={RRLink}
              >
                Request Instructional
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                View sections
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default InstructionalHeader;
