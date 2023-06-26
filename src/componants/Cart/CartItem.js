import React, { useContext } from "react";
import "./CartItem.css";
import { FootDataContext } from "../../App";

const CartItem = (props) => {
  const DataContext = useContext(FootDataContext);
  const updateFood = DataContext.updateFoodDataHandler;
  const removeOrderHandler = () => {
    const currentId = props.food.id;
    updateFood(currentId, -1);
  };
  const addOrderHandler = () => {
    const currentId = props.food.id;
    updateFood(currentId, 1);
  };
  return (
    <div className="cart-item">
      <div>
        <h3>{props.food.name}</h3>
        <div className="dis-cart">
          <span className="price-cart"> {props.food.price}</span>
          <span className="amount-cart">×{props.food.count}</span>
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
