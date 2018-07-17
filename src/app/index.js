import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./components/Home";
import { User } from "./components/User";
import { Root } from "./components/Root";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Root>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/user/:id" component={User} />
        </Root>
      </Router>
    );
  }
}
render(<App />, window.document.getElementById("app"));
