import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUpForm from "../auth/SignUpForm";
import Homepage from "../home/Homepage";
import LoginForm from "../auth/LoginForm";
import About from "../home/About";
import Preview from "../home/Preview";
import Instructionals from "../instructionals/Instructionals";
import InstructionalRequest from "../instructionals/InstructionalRequest";
import AdminRoute from "./AdminRoute";
import FullAccessRoute from "./UserRoute";

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
