import React from "react";
import "./CartTotal.css";

const CartTotal = (props) => {
  return (
    <div>
      <div className={"total"}>
        <span>Total Amount</span>
        <span>$23</span>
      </div>
      <div className={"action"}>
        <button className={"actions-button"} onClick={props.onClose}>
          Close
        </button>
        <button className={"actions-button"}>Order</button>
      </div>
    </div>
  );
};
export default CartTotal;
