import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import About from "./About";
import Instructionals from "./Instructionals";
import InstructionalRequest from "./InstructionalRequest";

import { Users } from "./Users";

export const routes = () => {
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

        <Route exact path="/users">
          <Users />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/instructionals/request">
          <InstructionalRequest />
        </Route>

        <Route exact path="/instructionals">
          <Instructionals />
        </Route>
      </Switch>
    </div>
  );
};
