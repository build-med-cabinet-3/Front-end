import React, { useReducer } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
// import styled from "styled-components";

import { combinedReducer, initialState } from "../reducers/combinedReducer";
import PrivateRoute from "../utils/PrivateRoute";

// import { SignupContext } from "../contexts/SignupContext";
// import { LoginContext } from "../contexts/LoginContext";
// import { RecommendContext } from "../contexts/RecommendContext";
// import { ReviewContext } from "../contexts/ReviewContext";

import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "../components/dashboard/Dashboard";

export default function WelcomePage() {
  const [state, dispatch] = useReducer(combinedReducer, initialState);

  return (
    <div className="wrapper">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route
          path="/login"
          render={props => <Login {...props} dispatch={dispatch} />}
        />
        <Route
          path="/signup"
          render={props => <Signup {...props} dispatch={dispatch} />}
        />
        <PrivateRoute
          exact
          path="/dashboard"
          render={props => <Dashboard {...props} dispatch={dispatch} />}
        />
      </Switch>
    </div>
  );
}
