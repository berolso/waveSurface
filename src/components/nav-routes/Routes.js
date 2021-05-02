import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUpForm from "../SignUpForm";
import Homepage from "../Homepage";
import LoginForm from "../LoginForm";
import About from "../About";
import Instructionals from "../Instructionals";
import InstructionalRequest from "../InstructionalRequest";
import AdminRoute from "./AdminRoute";
import FullAccessRoute from "./UserRoute";

import { Users } from "../Users";

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

        <AdminRoute exact path="/users">
          <Users />
        </AdminRoute>

        <FullAccessRoute exact path="/instructionals/request">
          <InstructionalRequest />
        </FullAccessRoute>

        <FullAccessRoute exact path="/instructionals">
          <Instructionals />
        </FullAccessRoute>
      </Switch>
    </div>
  );
};
