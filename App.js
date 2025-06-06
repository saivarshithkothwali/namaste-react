const heading=React.createElement("h1",{id:"heading"},"Hello world from React");
console.log(heading); //This returns us with an JS object also called as react element object

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);