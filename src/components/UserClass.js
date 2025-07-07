import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log(this.props.name + " component did mount");

    const data = await fetch(
      "https://api.github.com/users/saivarshithkothwali"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }
  render() {
    console.log(this.props.name + " Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="avatar" alt="avatar-img" src={avatar_url}></img>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
