import { useState } from "react";
import MealsCard from "./componants/Meals/MealsCard";
import WebDiscription from "./componants/UI/WebDiscription";
import Header from "./componants/layout/Header";
import CartItems from "./componants/Cart/CartItems";

const DummyDefaultFoods = [
  {
    name: "Sushi",
    dis: "Finest Fish and Vegies",
    price: 22.99,
    id: Math.random().toString(),
    count: 0,
  },
  {
    name: "Schinitzel",
    dis: " A German Speciallity!",
    price: 16.99,
    id: Math.random().toString(),
    count: 0,
  },
  {
    name: "BBQ Bergur",
    dis: "American, raw, meaty",
    price: 12.99,
    id: Math.random().toString(),
    count: 0,
  },
  {
    name: "Green Bowl",
    dis: "Healthy and Green",
    price: 18.99,
    id: Math.random().toString(),
    count: 0,
  },
];

function App() {
  const [foodData, setFoodData] = useState(DummyDefaultFoods);

  const updateFoodDataHandler = (id, count) => {
    const result = foodData.map((arrItem) => {
      const newObj = { ...arrItem }; // copy object because object are passed by refrence and will change the original object if we modify it here
      if (newObj.id === id) {
        newObj.count += Number(count);
        return newObj;
      } else {
        return newObj;
      }
    });
    //   //with every usestate we must set a new thing(arr,obj,bollean)
    setFoodData(result);
  };
  // console.log(foodData);

  const [isOpen, setIsOpen] = useState(false);
  const setCloseModalHandler = () => {
    setIsOpen(false);
  };
  const setOpenModalHandler = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <Header foodData={foodData} onOpen={setOpenModalHandler} />
      <WebDiscription />
      <MealsCard foodData={foodData} onAddFood={updateFoodDataHandler} />
      {/* {for showing the cart or not} */}
      {isOpen && (
        <CartItems
          foodData={foodData}
          onClose={setCloseModalHandler}
          updateFoodDataHandler={updateFoodDataHandler}
        />
      )}
    </div>
  );
}

export default App;
