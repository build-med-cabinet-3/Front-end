import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";

import PrivateRoute from "../utils/PrivateRoute";

import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "../components/dashboard/Dashboard";

export default function WelcomePage() {
  return (
    <div className="wrapper">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/signup" render={props => <Signup {...props} />} />
        <PrivateRoute
          exact
          path="/dashboard"
          render={props => <Dashboard {...props} />}
        />
      </Switch>
    </div>
  );
}
