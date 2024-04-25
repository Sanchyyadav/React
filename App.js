import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro_container">
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "hyy I m H1 tag i am sanchy"),
//     React.createElement("h2", {}, "hyy I m H2 tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// const heading = React.createElement("h1", { id: "heading" }, "namaste react");
// console.log(heading);
// const elem = <span>Element</span>;
// const Title = () => (
//   <div id="yes">
//     {elem}
//     <h1 id="heading">"Namaste React from JSX"</h1>
//   </div>
// );

// const HeadingComponent = () => (
//   <div id="test">
//     <Title />
//     <h1>Namaste component</h1>
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
