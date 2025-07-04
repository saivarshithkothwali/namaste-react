import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <User
          name={"varshith(functional Component)"}
          location={"Hanamkonda(functional Component)"}
        />
        <UserClass
          name={"varshith(Class Component)"}
          location={"Hanamkonda(Class Component)"}
        />
      </div>
    );
  }
}

export default About;
