import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpForm from "../auth/SignUpForm";
import Homepage from "../home/Homepage";
import LoginForm from "../auth/LoginForm";
import About from "../home/About";
import Preview from "../home/Preview";
import Bomian from "../home/Bomian";
import Instructionals from "../instructionals/Instructionals";
import InstructionalRequest from "../instructionals/InstructionalRequest";
import AdminRoute from "./AdminRoute";
import FullAccessRoute from "./UserRoute";
import UserUpdateForm from "../users/UserUpdateForm";

import { Users } from "../users/Users";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm login />
        </Route>

        <Route exact path="/signup">
          <SignUpForm login />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/preview">
          <Preview />
        </Route>

        <Route exact path="/bomian">
          <Bomian />
        </Route>

        <FullAccessRoute exact path="/users/:username">
          <UserUpdateForm />
        </FullAccessRoute>

        <FullAccessRoute exact path="/instructionals/request">
          <InstructionalRequest />
        </FullAccessRoute>

        <FullAccessRoute exact path="/instructionals">
          <Instructionals />
        </FullAccessRoute>

        <AdminRoute exact path="/users">
          <Users />
        </AdminRoute>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};
