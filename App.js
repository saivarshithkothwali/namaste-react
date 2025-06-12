
import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading=<h1 id="heading" tabIndex={1}>Namaste React using jsx</h1>
console.log(jsxHeading);


const HeadingComponent=()=>(<h1 className="heading">
  Namaste React functional component
  </h1>
  );

const HeadingComponent1=()=>{
  return <h1 className="heading">Namaste React functional component1</h1>
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1/>);




