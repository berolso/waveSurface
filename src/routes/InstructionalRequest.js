import React, { useState, useContext } from "react";
import WaveServer from "../api/waveServer";
import UserContext from "../context/UserContext";
import DropZone from "./DropZone";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: "none",
  },
}));

const InstructionalRequest = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useContext(UserContext);

  const initialState = {};

  const [formData, setFormData] = useState(initialState);
  const [dropZoneFiles, setDropZoneFiles] = useState([]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const data = { ...formData, ...currentUser };

      const result = await WaveServer.sendRequestToSlack(data, dropZoneFiles);
      // history.push(`/instructionals`);
      console.log("request success");
      // }
    } catch (err) {
      console.log("request failed");
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((cur) => ({
      ...cur,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={2} className={classes.image} />
        <Grid item xs={12} sm={10} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <ChatIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Upload request
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                {`Briefly describe the request`}
              </Typography>
              <TextField
                id="description"
                label="Request Description"
                multiline
                rows={6}
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />

              <div>
                <DropZone files={dropZoneFiles} setFiles={setDropZoneFiles} />
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit Request
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>{/* <Copyright /> */}</Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default InstructionalRequest;
