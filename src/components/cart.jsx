import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlice";
import ItemList from "./ItemList";
const Cart=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);
    // In this portion we are selecting the specific portion of store .It will update only that portion of store
    // const store=useSelector((store)=>store);
    // const cartItems=store.cart.items;
    const handleClearCart=()=>{
        console.log("Khatushyam");
        dispatch(clearCart())
    }
    return(
          <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black rounded-lg text-white " onClick={handleClearCart}>Clear Cart</button>
               {cartItems.length===0&&<h1>Cart is empty Add Items to the cart</h1>}
                <ItemList items={cartItems}/>
            </div>
          </div>
        ) 
        
}
export default Cart;