import React, { useEffect, useState, useCallback, useContext } from "react";

import { InstructionalsContext } from "../../context/InstructionalsContext";
// import UserContext from "../context/UserContext";

import { getAllInstructionalsFromAPI } from "../../actions/instructionals";

import InstructionalHeader from "./InstructionalHeader";
import InstructionalCard from "./InstructionalCard";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Instructionals = () => {
  const classes = useStyles();

  const [state, dispatch] = useContext(InstructionalsContext);
  const [isLoaded, setIsLoaded] = useState(false);

  const asyncDispatch = useCallback(async () => {
    try {
      const getInstructionals = await getAllInstructionalsFromAPI();
      dispatch(await getInstructionals());
    } catch (err) {
      console.log("instructionals asyncDispatch", err);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isLoaded) {
      asyncDispatch();
      setIsLoaded(true);
    }
  }, [asyncDispatch, isLoaded]);

  // const { currentUser } = useContext(UserContext);

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <InstructionalHeader></InstructionalHeader>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {(state.instructionalsList &&
              state.instructionalsList.map((card) => (
                <InstructionalCard
                  key={card.id}
                  card={card}
                  dispatch={dispatch}
                  setIsLoaded={setIsLoaded}
                ></InstructionalCard>
              ))) ||
              "loading"}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  );
};

export default Instructionals;
