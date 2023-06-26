import React, { useContext } from "react";
import "./CartTotal.css";
import { FootDataContext } from "../../App";

const CartTotal = (props) => {
  const dataContext = useContext(FootDataContext);
  const closeModalContext = dataContext.onClose;

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
        <button className={"actions-button"} onClick={closeModalContext}>
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
