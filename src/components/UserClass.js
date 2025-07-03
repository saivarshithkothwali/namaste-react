import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count1: 1,
    };
  }

  render() {
    return (
      <div className="user-card">
        <h3>{this.state.count}</h3>
        <h3>{this.state.count1}</h3>
        <h3>Name: {this.props.name}</h3>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
