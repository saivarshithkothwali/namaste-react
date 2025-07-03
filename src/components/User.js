import { useState } from "react";

const User = (props) => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(1);
  return (
    <div className="user-card">
      <h3>{state}</h3>
      <button onClick={() => setState(state + 1)}>Increment State</button>
      <h3>{state1}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Location: {props.location}</h3>
    </div>
  );
};

export default User;
