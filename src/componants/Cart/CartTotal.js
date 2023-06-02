import React from "react";
import "./CartTotal.css";

const CartTotal = (props) => {
  const totalPrice = () => {
   const found = props.cartData.find(()=>{
    return 
   })
    if(props.cartData.id === props.foodData.id){

    }
    }
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
