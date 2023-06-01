import React from "react";
import "./CartButtonHeader.css";

const CartButtonHeader = (props) => {
  const totalCounts = () => {
    let sum = 0;
    for (let i = 0; i < props.cartData.length; i++) {
      const arrItem = props.cartData[i];
      const count = arrItem.count;
      sum += Number(count);
    }
    return sum;
  };
  const total = totalCounts();

  return (
    <button className="cart-button" onClick={props.onOpen}>
      <span> Your Cart</span>
      <span className="cart-span">{total}</span>
    </button>
  );
};

export default CartButtonHeader;
