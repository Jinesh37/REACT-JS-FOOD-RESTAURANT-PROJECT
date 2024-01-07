import React ,{useContext} from "react";
import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchList, setSearchText] = useState("");
  const [filterRestaurant, setFilteredRestaurant] = useState([]);
  // console.log(withPromotedLabel(RestaurantCard));
  // const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("Body rendered",ListOfRestaurant);
  const fetchData = async () => {
    console.log("Hanuman");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9621948&lng=77.7115841&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
 const onlineStatus=useOnlineStatus();
 if(onlineStatus===false)
     return <h1>Looks like you're offline!! please check your Internet connection</h1>
  
     const{loggedInUser,setUserInfo}=useContext(UserContext);
     
  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black search-box"
            value={searchList}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="px-4  bg-green-100 m-4 rounded-lg" 
            onClick={() => {
              const FilteredList = ListOfRestaurant.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchList.toLowerCase())
              );
              setFilteredRestaurant(FilteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className=" m-4 p-4 flex item-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            console.log("KHatushyam");
            const filteredList = filterRestaurant.filter(
              (res) => res?.info?.avgRating < 4
            );
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
        <div className=" m-4 p-4 flex item-center ">
            <label>UserName:</label>
            <input className=" border px-{-5} border-black" value={loggedInUser} onChange={(e)=>{setUserInfo(e.target.value)}}/>
        </div>
       
      </div>
      <div className="m-15 flex space-around flex-wrap">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {/* if the restaurant is promoted then add a promoted label to it */}
            {/* restaurant.info.promoted?<RestaurantCardPromoted resData={restaurant} />:<RestaurantCard resData={restaurant} /> */}
            <RestaurantCard resData={restaurant}></RestaurantCard>
          </Link>
        ))}
       {/* <RestaurantCategory resData={restaurant}/> */}
      </div>
    </div>
  );
};
export default Body;

// key={Math.floor(Math.random()*100+5)}
// How can we a copy of data of state variable from one variable to other local or state variable
// Conditional Rendering
//  if(ListOfRestaurant.length===0){
//   return <Shimmer/>
//  }
