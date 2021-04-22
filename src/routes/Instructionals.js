import { useEffect, useCallback, useContext } from "react";
import { Link as RRLink  } from "react-router-dom";

import { InstructionalsContext } from "../context/InstructionalsContext";

import { getAllInstructionalsFromAPI } from "../actions/instructionals";

import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
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

  const asyncDispatch = useCallback(async () => {
    try {
      const hi = await getAllInstructionalsFromAPI();
      dispatch(await hi());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    asyncDispatch();
  }, [asyncDispatch]);

  return (
    <>
      <div>
        {console.log("state", state)}
        {/* {users.userList &&
        users.userList.map((e, i) => <div key={i}>{e.email}</div>)} */}
      </div>

      <React.Fragment>
        <CssBaseline />

        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
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
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                {`Browse through provided tutorials or request to have one made for a specific problem`}
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
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {(state.instructionalsList &&
                state.instructionalsList.map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.name}
                        </Typography>
                        <Typography>{Object.keys(card.json)[0]}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
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
      </React.Fragment>
    </>
  );
};

export default Instructionals;
