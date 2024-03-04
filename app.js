const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am grand child"),
    React.createElement("h2", {}, "I am grand child-2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am grand child"),
    React.createElement("h2", {}, "I am grand child-2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
