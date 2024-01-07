import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantCategory from "../components/RestaurantCategory";
// import {useRestaurantMenu} from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const params = useParams();
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  // const resInfo=useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.data?.title}
          showItems={index === showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;

{
  /* <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines}:{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
        (item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        )
      )}
    </div> */
}
// const {itemCards} =
//   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
// console.log(itemCards);
// console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
