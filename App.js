{
  /* <div id="parent">
    <div id="child1">
        <h1>I am h1 tag!</h1>
        <h2>I am h1 tag!</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag!</h1>
        <h2>I am h1 tag!</h2>
    </div>
</div> */
}

import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" },
//         [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")],
//         React.createElement("div", { id: "child2" },
//             [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
//         )
//     )
// ]
// )

// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World from React!");

// console.log(heading); // Object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(parent);

// React Element

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestorantCard = ({ resName, cusines }) => {
  // console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1bfdbc79d4fdc71bb133c14d8213d594"
      />
      <h3>{resName}</h3>
      <h4>{cusines}</h4>
      {/* <h4>4.4 Stars</h4>
      <h4>38 minutes</h4> */}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestorantCard
          resName="Abc"
          cusines="Indian, Biryani, North Indian, Asian"
        />
        <RestorantCard
          resName="Xyz"
          cusines="Italian, Biryani, North Indian, Asian"
        />
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
