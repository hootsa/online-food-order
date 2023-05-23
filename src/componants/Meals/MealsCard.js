import React from "react";
import "./MealsCard.css";
import MealsCardItem from "./MealsCardItem.js";

const MealsCard = (props) => {
  return (
    <div className="card">
      {props.foodData.map((meal) => {
        return (
          <MealsCardItem
            meal={meal}
            key={meal.id}
            onAddFood={props.onAddFood}
          />
        );
      })}
    </div>
  );
};
export default MealsCard;
