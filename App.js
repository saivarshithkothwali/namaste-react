import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(
  <h1 id="heading" tabIndex={1}>Namaste React using jsx</h1>
);
const num=100;
const HeadingComponent=()=>(
    <div id="container">
      {"javscript inside a functional component"}
      {10000}
      {console.log(num)}
      {num}
     <h1 className="heading">Namaste React functional component</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);




