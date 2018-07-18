/* import React from "react";
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
render(<App />, window.document.getElementById("app")); */

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
const mathReducer = (
  state = {
    result: 1,
    lastValues: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBSTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
};
const userReducer = (
  state = {
    name: "Manohar",
    age: 31
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};
const myLogger = store => next => action => {
  console.log("Logged Action: ", action);
  next(action);
};
const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(createLogger())
);
store.subscribe(() => {
 // console.log("User updated:", store.getState());
});
store.dispatch({ type: "ADD", payload: 100 });
store.dispatch({ type: "ADD", payload: 30 });
store.dispatch({ type: "SUBSTRACT", payload: 40 });
store.dispatch({ type: "SET_NAME", payload: "SHRANYA" });
store.dispatch({ type: "SET_AGE", payload: 2 });
store.dispatch({ type: "SET_NAME", payload: "VARSHA" });
