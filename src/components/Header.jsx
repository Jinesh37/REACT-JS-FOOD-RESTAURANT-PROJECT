// import React from "react";
// import ReactDOM from "react-dom/client";
// import{useState} from 'react';
// import {Link} from "react-router-dom";
// import {LOGO_URL} from "../utils/constant";
// import useOnlineStatus from "../utils/useOnlineStatus";
// const Header = () => { 
//   const[btnName,setBtnName]=useState("Login");
//   console.log('Header render')
//   const onlineStatus=useOnlineStatus();
//     return (
//       <div className="flex justify-between bg-pink-100 shadow-lg ">
//         <div className="logo">
//           <img className="w-56" src={LOGO_URL}></img>
//         </div>
//         <div className="flex items-center">
//           <ul className="flex p-4 m-4">
//             <li className="px-4 ">
//               Online Status:{onlineStatus?"✅":"🔴"}
//             </li>
//             <li className="px-4">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="px-4">
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className="px-4">
//               <Link to ="/contact">Contact Us</Link>
//             </li>
//             <li className="px-4">
//               <Link to="/grocery">Grocery</Link>
//             </li>
//             <li className="px-4 ">Cart</li>
//             <button className="Login" onClick={()=>btnName==="Login"?setBtnName("LogOut"):setBtnName("Login")}>{btnName}</button>
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   export default Header;

//   // onClick={()=>{btnname="Logout"}}



import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useSelector} from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
  // selector
  const cartItems=useSelector((store)=>store.cart.items)

  return (
    <div className="flex justify-between items-center bg-pink-500 shadow-lg p-2">
      <div className="logo">
        <img className="w-32" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-2 text-white">
          <li className="px-4 font-bold text-black">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 font-bold text-xl text-black">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="px-4 font-bold text-xl text-black">
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li className="Px-4 font-bold text-xl text-black">
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold text-xl text-black">
            <Link to="/grocery" className="hover:underline">
              Grocery
            </Link>
          </li>
          <li className=" px-4 font-bold text-xl text-black hover:underline">
            <Link to="/cart">
            Cart-({cartItems.length}items)

            </Link>
            </li>
        
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() =>
            btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login")
          }
        >
          {btnName}
        </button>
        <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
