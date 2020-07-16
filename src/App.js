import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./page/Login";
import Onboarding from "./page/Onboarding";
import SignUp from "./page/SignUp";
import Analysis from "./page/Analysis";
import Camera from "./page/Camera";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/onboarding">Onboarding</Link>
            </li>
            <li>
              <Link to="/analysis">Color Analysis</Link>
            </li>
            <li>
              <Link to="/camera">Camera</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/onboarding">
            <Onboarding />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/camera">
            <Camera />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
