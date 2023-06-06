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

  /*
    cartData = [
      {id: 555,  count: 2},
      {id: 666,  count: 1},
    ]
 
    updateFoodDataHandler(666, -1);

    cartData = [
      {id: 555,  count: 5},
    ]

  
  */
  const updateFoodDataHandler = (id, mealsAmount) => {
    // const foundIdx = cartData.findIndex((arrItem) => {
    //   return id === arrItem.id;
    // });
    // const foundCount = cartData.find((arrItem) => {
    //   return arrItem.count > 0;
    // });
    const foundItem = cartData.find((arrItem) => {
      return id === arrItem.id;
    });

    // console.log(foundCount, typeof foundCount, typeof mealsAmount);
    if (!!foundItem) {
      const sum = foundItem.count + mealsAmount;
      if (sum <= 0) {
        const filterData = cartData.filter((arrItem) => {
          return id !== arrItem.id;
        });
        setCartData(filterData);
      } else {
        const newCartData = cartData.map((arrItem) => {
          const newArr = { ...arrItem };
          if (newArr.id === id) {
            newArr.count += Number(mealsAmount);
            return newArr;
          } else {
            return newArr;
          }
          // return {
          //   ...arrItem,
          //   count: newArr.id === id ? arrItem.count +  Number(mealsAmount) : arrItem.count
          // }
        });
        console.log(cartData, "mmmm");
        setCartData(newCartData);
      }
    } else {
      setCartData([...cartData, { id: id, count: Number(mealsAmount) }]);
    }
  };
  console.log(cartData, "hhhh");
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
