import React from "react";
import "./CartItem.css";
const CartItem = (props) => {
  const removeOrderHandler = () => {
    const currentId = props.key;
    console.log(currentId);
    props.updateFoodDataHandler(currentId, -1);
  };
  const addOrderHandler = () => {
    const currentId = props.key;
    props.updateFoodDataHandler(currentId, 1);
  };
  return (
    <div className="cart-item">
      <div>
        <h3>{props.name}</h3>
        <div className="dis-cart">
          <span className="price-cart"> {props.price}</span>
          <span className="amount-cart">×{props.count}</span>
        </div>
      </div>
      <div>
        <button className="button-cart" onClick={removeOrderHandler}>
          -
        </button>
        <button className="button-cart" onClick={addOrderHandler}>
          +
        </button>
      </div>
    </div>
  );
};
export default CartItem;
