import { useState, useEffect } from "react";

const User = (props) => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("useEffect");
    fetchData();
    return () => {
      clearInterval(timer);
      console.log("UseEffect Return");
    };
  }, []);
  console.log("Render");

  const fetchData = async () => {
    const data = await fetch(
      "https://api.github.com/users/saivarshithkothwali"
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="user-card">
      <h3>{state}</h3>
      <button
        onClick={() => {
          setState(state + 1);
          setState1(state1 + 1);
        }}
      >
        Increment State
      </button>
      <h3>{state1}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Location: {props.location}</h3>
    </div>
  );
};

export default User;
