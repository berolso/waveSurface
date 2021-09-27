import React, { useState, useContext } from "react";

import WaveServer from "../../api/waveServer";
import UserContext from "../../context/UserContext";
import AlertSnackbar from "../auth/AlertSnackbar";

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
      <Link color="inherit" href="/">
        waveSurface
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

const UserUpdateForm = () => {
  const classes = useStyles();
  const { currentUser } = useContext(UserContext);

  const initialState = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
    newPassword: "",
    phoneNumber: currentUser.phoneNumber,
  };

  const [formData, setFormData] = useState(initialState);
  const [alert, setAlert] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // verify current password
    try {
      let result = await WaveServer.login(formData);
      console.log("resutl", result);
    } catch (err) {
      return setAlert({
        reset: () => setAlert(""),
        message: `Current password is incorrect`,
        severity: "error",
      });
    }
    // update new form data
    try {
      formData.password = formData.newPassword;
      delete formData.newPassword;
      await WaveServer.update(formData.username, formData);
      setAlert({
        reset: () => setAlert(""),
        message: `Info Updated`,
        severity: "success",
      });
      formData.newPassword = "";
    } catch (err) {
      console.error("Update failed", err);
      return setAlert({
        reset: () => setAlert(""),
        message: `hmm.. ${err[0]}`,
        severity: "error",
      });
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Account Information
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
                label="Current Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                autoComplete="new-Password"
              />
            </Grid>
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
                autoComplete="phoneNumber"
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
            Update
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      {alert && <AlertSnackbar {...alert} />}
    </Container>
  );
};

export default UserUpdateForm;
