import React from "react";
import {useState} from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  console.log(data);
  // const[showItems,setShowItems]=useState(false)
  // const handleClick=()=>{
  //      showItems===false?setShowItems(true):setShowItems(false);
  //     // setShowItems(!showItems)
  //     }
  const handleClick=()=>{
       setShowIndex()
  }
  return <div>
      <div className="w-6/12 mx-auto my-4   bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}  >
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>
        {showItems&&<ItemList items={data.itemCards}/>}
      </div>
      Khatushyam
         
    </div>
    // Body
    
  ;
};
export default RestaurantCategory;



// controlled & uncontrolled components(RestaurantCategory component is a controlled component because it is controlled by Restaurantmenu)
// if any components have own state variable then it's uncontrolled components
// Lifting state up;To passing parent component state variable to chil component and parent component state variable is controlled by child component
// props drilling(To passing data from last child or nth-level)
// in our application we have such type of data which we need to use multiple location or places in our app so we can hold such type of data in context