import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="routes">
          <Switch>
            <Route exact path="/" component={ Welcome } />
            <Route exact path="/aboutme" component={ About } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
