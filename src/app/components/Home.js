import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialChangeLinkName
    };
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
