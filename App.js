import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(
  <h1 id="heading" tabIndex={1}>Namaste React using jsx</h1>
);

const HeadingComponent=function(){
    return(<div id="container">
       <Title/>
     <h1 className="heading">Namaste React functional component</h1>
    </div>)
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);




