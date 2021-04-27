import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import WaveServer from "../api/waveServer";
import useLocalStorage from "../hooks/useLocalStorage";
import UserContext from "../context/UserContext";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const Copyright = () => {
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
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);

  const { setCurrentUser } = useContext(UserContext);

  const [token, setToken] = useLocalStorage(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const apiToken = await WaveServer.signup(formData);
      console.log(apiToken);
      setToken(apiToken);
    } catch (err) {
      console.error("signup failed", err);
    }

    // if (token.success) {
    //   // history.push(`/`);
    // } else {
    //   setFormErrors(res.errors);
    //   alert(`woopsy! that didn't work`, formErrors);
    // }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((cur) => ({
      ...cur,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} required>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                type="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="repeatPassword"
                label="Repeat Password"
                type="repeatPassword"
                id="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                autoComplete="current-Password"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                type="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                autoComplete="current-phoneNumber"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUpForm;
