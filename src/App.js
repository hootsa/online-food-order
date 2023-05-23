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
    console.log(id, count);
    const newArr = [];
    for (let i = 0; i < foodData.length; i++) {
      const arrItem = { ...foodData[i] }; //we do this copy because we do not want to change our old(basic) data.
      if (arrItem.id === id) {
        arrItem.count += Number(count);
        newArr.push(arrItem);
      } else {
        newArr.push(arrItem);
      }
    }
    //with every usestate we must set a new thing(arr,obj,bollean)
    setFoodData(newArr);
  };
  console.log(foodData);
  // const updateFoodDataHandler = foodData.map((arrItem, id, count) => {
  //   const newObj = { ...arrItem[0] };
  //   if (arrItem.id === id) {
  //     arrItem.count += Number(count);
  //     newObj.push(arrItem);
  //   } else {
  //     newObj.push(arrItem);
  //   }
  //   return setFoodData(newObj);
  // });
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
      // for showing the cart or not
      {isOpen && <CartItems data={foodData} onClose={setCloseModalHandler} />}
    </div>
  );
}

export default App;
