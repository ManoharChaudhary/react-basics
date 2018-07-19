import React from "react";
import { connect } from "react-redux";
import { Main } from "../components/Main";
import { User } from "../components/User";
import { setName, setAge } from "./../actions/userActions";
class App extends React.Component {
  constructor() {
    super();
  }
  changeUserName(newName) {}
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Anna")} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
