import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="user-card">
        <h3>Name: {this.props.name}</h3>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
