import React from "react";
import { useState, useEffect } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    //    Api calls
    getUserInfo();
  });
  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
  }
  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h3>Location:Dehradun</h3>
      <h4>Contact:@akshymarch7</h4>
    </div>
  );
};
export default User;

// i want to render quickly my components as fast as possible or after that i will do api call
