import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);

    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " component did mount");
  }

  render() {
    console.log(this.props.name + " Child Render");
    return (
      <div className="user-card">
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increment Class Component Button
        </button>
        <h3>{this.state.count1}</h3>
        <h3>Name: {this.props.name}</h3>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
