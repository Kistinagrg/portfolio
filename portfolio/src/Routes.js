import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <div className="routes">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/aboutme" component={About} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
