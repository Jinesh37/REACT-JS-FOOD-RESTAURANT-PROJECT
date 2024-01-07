// import {CDN_URL} from '../utils/constant';
// import React from "react";
// const RestaurantCard = (props) => {
//  const{resData}=props;
//   console.log(resData);
//   return (
//     <div className=" m-4 p-4 w-60 h-84" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//        className="w-48"
//         alt="res-logo"
//         src={CDN_URL+resData?.info?.cloudinaryImageId}
//       />
//       <h3>{resData?.info?.name}</h3>
//       <h4>{resData?.info?.cuisines.join(",")}</h4>
//       <h4>{resData?.info?.avgRating}</h4>
//       <h4>{resData?.info?.costForTwo}</h4>
//       <h4>{resData?.info?.sla?.slaString}</h4>
//     </div>
//   );
// };
// export default RestaurantCard;



import { CDN_URL } from '../utils/constant';
import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="m-4 p-4 w-60 h-100 border border-gray-300 rounded-md transition-transform transform hover:scale-105">
      <img
        className="w-full h-32 object-cover rounded-lg mb-2 transition-transform transform hover:scale-110"
        alt="res-logo"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <h3 className="text-lg font-bold  mb-2 text-blue-500">{resData?.info?.name}</h3>
      <div className="mb-2">
        <h4 className="text-black font-bold">Cuisines:</h4>
        <p className="text-sm">{resData?.info?.cuisines.join(", ")}</p>
      </div>
      <div className="mb-2">
        <h4 className="text-black font-bold">Average Rating:</h4>
        <p className="text-sm">{resData?.info?.avgRating}</p>
      </div>
      <div className="mb-2">
        <h4 className="text-black font-bold">Cost for Two:</h4>
        <p className="text-sm">{resData?.info?.costForTwo}</p>
      </div>
      <div>
        <h4 className="text-black font-bold">SLA:</h4>
        <p className="text-sm">{resData?.info?.sla?.slaString}</p>
      </div>
    </div>
  );
};
// Higher Order Component
// input:RestaurantCard=>RestaurantCardPromoted
const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
