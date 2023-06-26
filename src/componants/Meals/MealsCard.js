import React, { useContext } from "react";
import "./MealsCard.css";
import MealsCardItem from "./MealsCardItem.js";
import { FootDataContext } from "../../App";

const MealsCard = () => {
  const foodDataContext = useContext(FootDataContext);
  const foodData = foodDataContext.foodData;
  return (
    <div className="card">
      {foodData.map((meal) => {
        return <MealsCardItem meal={meal} key={meal.id} />;
      })}
    </div>
  );
};
export default MealsCard;
