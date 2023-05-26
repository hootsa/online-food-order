import React from "react";
import "./CartTotal.css";

const CartTotal = (props) => {
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < props.foodData.length; i++) {
      const total =
        Number(props.foodData[i].price) * Number(props.foodData[i].count);

      sum += total;
    }
    return sum.toFixed(2);
  };
  const sumOfPrice = totalPrice();
  const orderHandler = () => {
    console.log("...ordering");
  };

  return (
    <div>
      {!!props.foodData.length ? (
        <div className={"total"}>
          <span>Total Amount</span>
          <span>{sumOfPrice}</span>
        </div>
      ) : (
        "There is nothing on your cart"
      )}

      <div className={"action"}>
        <button className={"actions-button"} onClick={props.onClose}>
          Close
        </button>
        {sumOfPrice > 0 && (
          <button className={"actions-button"} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </div>
  );
};
export default CartTotal;
