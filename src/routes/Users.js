import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "./UsersTable";
import { getAllUsersFromAPI } from "../actions/users";

import UserContext from "../context/UserContext";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      // width: theme.spacing(10),
      // height: theme.spacing(16),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export const Users = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { users } = useSelector((store) => store);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getUsers = async () => {
      await dispatch(getAllUsersFromAPI());
    };
    if (currentUser) {
      getUsers();
    }
  }, [dispatch, currentUser]);

  return (
    <div className={classes.root}>
      
      <Grid item xs={12}>
        <Paper elevation={3} className={classes.paper}>
          <UsersTable users={users} />
        </Paper>
      </Grid>
    </div>
  );
};