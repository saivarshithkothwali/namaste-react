import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User
        name={"varshith(functional Component)"}
        location={"Hanamkonda(functional Component)"}
      />
      <UserClass
        name={"varshith(Class Component)"}
        ocation={"Hanamkonda(Class Component)"}
      />
    </div>
  );
};

export default About;
