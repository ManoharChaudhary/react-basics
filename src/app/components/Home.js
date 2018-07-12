import React from "react";

export class Home extends React.Component {
  render() {
    //        console.log(this.props.user.username);
    return (
      <div>
        <p>
          Youar name is {this.props.name} and age is {this.props.age}
        </p>
        <p>
          YOur username is {this.props.user.username} & company is
          {this.props.user.company}
        </p>
        <h4>Hobbies</h4>
        <ul>
          {this.props.user.hobbies.map((hobby, i) => <li key={i}> {hobby}</li>)}
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object
};
