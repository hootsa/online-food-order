import React, { useState } from "react";
import "./CartItems.css";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
const CartItems = (props) => {
  // for showing the cart or not. when we return null it's like false and nothing is render
  // if (props.onOpen) {
  //   return null;
  // }

  return (
    // <div className = {props.isopen ? "card-cart":"empty"}
    <div className={"card-back"}>
      <div className={"card-cart"}>
        {props.cartData.map((cartItemObj) => {
          const found = props.foodData.find((arrItem) => {
            return arrItem.id === cartItemObj.id;
            // if (arrItem.id === cartItemObj.id) {
            //   return true;
            // } else {
            //   return false;
            // }
          });
          console.log(cartItemObj.id, "bbb");
          return (
            <CartItem
              key={cartItemObj.id}
              name={found.name}
              price={found.price}
              count={cartItemObj.count}
              updateFoodDataHandler={props.updateFoodDataHandler}
            />
          );
        })}
        {/* <CartTotal
          onClose={props.onClose}
          foodData={props.foodData}
          cartData={props.cartData}
        /> */}
      </div>
    </div>
  );
};
export default CartItems;
