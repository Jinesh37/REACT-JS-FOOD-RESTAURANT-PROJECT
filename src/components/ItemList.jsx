import React from "react";
import { CDN_URL } from "../utils/constant";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    // Dispatch an action
    console.log("Khatushyam");
    dispatch(addItem(item))
    console.log(item?.card?.info?.name);
  
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 h-auto flex justify-between space-evenly  text-left"
        > 
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - Rs.
                {item.card.info.price
                  ? item.card.info.price
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 border-2" >
            <img src={CDN_URL + item?.card?.info?.imageId} className="m-4 w-11/12 h-3/6 " />
            <div className="absolute ">
                <button className="p-2 mx-11  rounded-lg bg-black text-white shadow-lg " onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

// what is the difference in three process
// onClick={handleAddItem}
// onClick={()=>handleAddItem(item)}
// onClick={handleAddItem(item)}
