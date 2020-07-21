import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./page/Login";
import Onboarding from "./page/Onboarding1";
import SignUp from "./page/SignUp";
import Analysis from "./page/Analysis";
import Camera from "./page/Camera";
import hero from "./assets/hero.png";

import styles from "./global.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 375px;
  height: 812px;
  background: #f2f2f2;
  margin: auto;
  position: relative;
`;

const Hero = styled.div`
  position: absolute;
  width: 213px;
  height: 252px;
  left: 48.33px;
  top: 310.71px;
`;

export default function App() {
  return (
    <Wrapper>
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

          <Hero>
            <img src={hero} alt="Hero Image" />
          </Hero>
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
    </Wrapper>
  );
}
