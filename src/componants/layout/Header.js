import React from "react";
import "./Header.css";
import CartButtonHeader from "./CartButtonHeader";

const Header = (props) => {
  return (
    <header className="header">
      <h2 className="title">ReactMeals</h2>
      <CartButtonHeader
        foodData={props.foodData}
        onOpen={props.onOpen}
        onClose={props.onClose}
      ></CartButtonHeader>
    </header>
  );
};
export default Header;
