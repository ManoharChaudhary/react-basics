import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";
import { Header } from "./components/Header";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }
  onGreet() {
    alert("Hello!");
  }
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home
              name={"Manohar"}
              initialAge={28}
              onGreet={this.onGreet}
              changeLinkName={this.onChangeLinkName.bind(this)}
              initialChangeLinkName= {this.state.homeLink}
            />
          </div>
        </div>
      </div>
    );
  }
}
render(<App />, window.document.getElementById("app"));
