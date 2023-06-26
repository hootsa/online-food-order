import React, { useState, useContext } from "react";
import "./MealsCardItem.css";
import { FootDataContext } from "../../App";

const MealsCardItem = (props) => {
  const foodDataContext = useContext(FootDataContext);
  const updateData = foodDataContext.updateFoodDataHandler;
  const [mealsAmount, setMealsAmount] = useState("");

  const changeInputHandler = (event) => {
    setMealsAmount(event.target.value);
  };
  const addButtonHandler = () => {
    const newId = props.meal.id;
    updateData(newId, mealsAmount);
  };

  return (
    <div>
      <div className="meals-item">
        <div>
          <h3 className="font-name-meals">{props.meal.name}</h3>
          <p className="font-dis-meals">{props.meal.dis}</p>
          <p className="font-price-meals">${props.meal.price}</p>
        </div>
        <div>
          <div className="amount">
            <label>Amount</label>
            <input
              className="form-input"
              onChange={changeInputHandler}
              type="number"
            ></input>
          </div>
          <button className="form-button" onClick={addButtonHandler}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default MealsCardItem;
