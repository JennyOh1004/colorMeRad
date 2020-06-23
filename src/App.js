import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <div>Home</div>
            <div>About</div>
          </nav>

          <Switch>
            <Route></Route>
            <Route></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
