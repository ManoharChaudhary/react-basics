import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";
import { Header } from "./components/Header";
class App extends React.Component {

  render() {
    var user = {
      username: "manohar123",
      company: "globant",
      hobbies: ["Reading","Music"]
    };
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name= {"Manohar"} age={28} user={user} >
            <p>This is pragraph !!</p>
            </Home>
             </div>
        </div>
      </div>
    );
  }
}
render(<App />, window.document.getElementById("app"));
