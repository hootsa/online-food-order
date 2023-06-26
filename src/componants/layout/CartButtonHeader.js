import React, { useContext } from "react";
import "./CartButtonHeader.css";
import { FootDataContext } from "../../App";

const CartButtonHeader = (props) => {
  const contextData = useContext(FootDataContext);
  const foodData = contextData.foodData;
  const openModal = contextData.onOpen;

  const totalCounts = () => {
    let sum = 0;
    for (let i = 0; i < foodData.length; i++) {
      const arrItem = foodData[i];
      const count = arrItem.count;
      sum += Number(count);
    }
    return sum;
  };
  const total = totalCounts();

  return (
    <button className="cart-button" onClick={openModal}>
      <span> Your Cart</span>
      <span className="cart-span">{total}</span>
    </button>
  );
};

export default CartButtonHeader;
