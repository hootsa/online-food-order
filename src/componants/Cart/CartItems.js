import React from "react";
import "./CartItems.css";
import CartTotal from "./CartTotal";

const CartItems = (props) => {
  // for showing the cart or not. when we return null it's like false and nothing is render
  // if (props.onOpen) {
  //   return null;
  // }
  return (
    // <div className = {props.isopen ? "card-cart":"empty"}
    <div className={"card-cart"}>
      {props.data.map((food) => {
        return (
          <div className="cart-item" key={food.id}>
            <div>
              <h3>{food.name}</h3>
              <div className="dis-cart">
                <span className="price-cart"> {food.price}</span>
                <span className="amount-cart">{food.count}</span>
              </div>
            </div>
            <div>
              <button className="button-cart">-</button>
              <button className="button-cart">+</button>
            </div>
          </div>
        );
      })}
      <CartTotal onClose={props.onClose} />
    </div>
  );
};
export default CartItems;
