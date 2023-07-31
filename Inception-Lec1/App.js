
//Javascript Code


// const heading = document.createElement("h1");
// heading.innerHTML = "React Comming from Javascript";
// const root1 = document.getElementById("root");
// root1.appendChild(heading);

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This h1 from parent"),
        React.createElement("h2", {}, "This h2 from parent")],
        "Namaste React Inception Episode 1")], [
    React.createElement("div", { id: "red" }, "Namaste React Inception Episode 1")
],
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This h1 from parent"),
        React.createElement("h2", {}, "This h2 from parent")],
        "Namaste React Inception Episode 1")], [
    React.createElement("div", { id: "red" }, "Namaste React Inception Episode 1")
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


