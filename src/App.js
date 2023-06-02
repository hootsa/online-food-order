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
  },
  {
    name: "Schinitzel",
    dis: " A German Speciallity!",
    price: 16.99,
    id: Math.random().toString(),
  },
  {
    name: "BBQ Bergur",
    dis: "American, raw, meaty",
    price: 12.99,
    id: Math.random().toString(),
  },
  {
    name: "Green Bowl",
    dis: "Healthy and Green",
    price: 18.99,
    id: Math.random().toString(),
  },
];
const defaultCart = [
  // { id: DummyDefaultFoods[0].id, count: 7 },
];

function App() {
  const [foodData, setFoodData] = useState(DummyDefaultFoods);
  const [cartData, setCartData] = useState(defaultCart);

  const updateFoodDataHandler = (id, mealsAmount) => {
    const found = cartData.findIndex((arrItem) => {
      return id === arrItem.id;
    });
    if (found >= 0) {
      const newCartData = cartData.map((arrItem) => {
        const newArr = { ...arrItem };
        if (found >= 0) {
          newArr.count += Number(mealsAmount);
          return newArr;
        } else {
          return newArr;
        }
      });

      setCartData(newCartData);
    } else {
      setCartData([...cartData, { id: id, count: Number(mealsAmount) }]);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const setCloseModalHandler = () => {
    setIsOpen(false);
  };
  const setOpenModalHandler = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <Header cartData={cartData} onOpen={setOpenModalHandler} />
      <WebDiscription />
      <MealsCard foodData={foodData} onAddFood={updateFoodDataHandler} />
      {/* {for showing the cart or not} */}
      {isOpen && (
        <CartItems
          cartData={cartData}
          foodData={foodData}
          onClose={setCloseModalHandler}
          updateFoodDataHandler={updateFoodDataHandler}
        />
      )}
    </div>
  );
}
export default App;
