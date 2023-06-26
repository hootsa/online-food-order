import React, { useState, useContext } from "react";
import "./CartItems.css";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
import { FootDataContext } from "../../App";

const CartItems = (props) => {
  // for showing the cart or not. when we return null it's like false and nothing is render
  // if (props.onOpen) {
  //   return null;
  // }
  const DataContext = useContext(FootDataContext);
  const foodDataContext = DataContext.foodData;
  const filteredData = foodDataContext.filter((foodObj) => {
    return Number(foodObj.count) > 0;
    // OR
    // if (Number(foodObj.count) > 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  });

  return (
    // <div className = {props.isopen ? "card-cart":"empty"}
    <div className={"card-back"}>
      <div className={"card-cart"}>
        {filteredData.map((food) => {
          return (
            <CartItem
              key={food.id}
              food={food}
              updateFoodDataHandler={props.updateFoodDataHandler}
            />
          );
        })}
        <CartTotal foodData={filteredData} />
      </div>
    </div>
  );
};
export default CartItems;
