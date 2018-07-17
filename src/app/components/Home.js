import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialChangeLinkName
    };
    setTimeout(
      () =>
        this.setState({
          status: 1
        }),
      3000
    );
    console.log("constructor");
  }
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    console.log("Component did mount!");
  }
  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update", nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }
  componentWillUnmount() {
    console.log("Component will unmount!");
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }
  OnChangeLinkName() {
    this.props.changeLinkName(this.state.homeLink);
  }
  onChangeHandler(event) {
    this.setState({
      homeLink: event.target.value
    });
  }
  render() {
    return (
      <div>
        <p>
          Youar name is {this.props.name} and age is {this.state.age}
        </p>
        <p>Status is {this.state.status}</p>
        <hr />
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">
          Make me older !
        </button>
        <hr />
        <button onClick={this.props.onGreet} className="btn btn-primary">
          Greet
        </button>
        <hr />
        <input
          type="text"
          value={this.state.homeLink}
          onChange={event => this.onChangeHandler(event)}
        />
        <button
          onClick={this.OnChangeLinkName.bind(this)}
          className="btn btn-primary"
        >
          Change Link Name
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  initialChangeLinkName: React.PropTypes.string
};
