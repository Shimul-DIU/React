import React, { use, useState } from "react";
import "./Footer.css";

const Footer = () => {
  let [count,setCount]=useState(0)
  
  return (
   
    <div className="footer">
      <div className="header">
        <div>Shimul</div>
        <div>
          <div>Home</div>
        <div>Products</div>
        <div>Contact</div>
        <div>About us</div>
        <div>Services</div>
      </div>
      </div>
      <hr />
        <p>&copy;Copyright 2023-25 Md.Shimul </p>
      
      <h1 className="text-2xl">{count}</h1>
      <button onClick={()=>setCount(count+1)}>inncrease</button>
      <button onClick={()=>setCount(prev=>prev-1)}>decrease</button>
      
    </div>
  );
};

export default Footer;