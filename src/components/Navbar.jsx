import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Navbar = () =>{
  //usestatehook
 const [btname,setBtnName]=useState("light");
 const cartItems=useSelector((store)=> store.cart.cartitems);

 console.log("i have subscribe cart items ",cartItems);

 //1st case;-> [] empty array Dependency ->only once called when navbar rendered
 //2nd case->[] no array dependency jab jab navbar render hoga to useeffest call hoga

 //3rd case : jab hum array dependency ke andar kuch pass karte hai to wo change hota hai
 useEffect(()=>{
  console.log("useEffect called");
 },[]);
  return(
    <div className="navbar">
      <h1>Logo</h1>
      <ul className="menuitems">
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">women</Link></li>
        <li><Link to="/kid">kids</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li><Link to="/cart">Cart{cartItems.length}</Link></li>
        <button onClick={()=>{
          btname ==="Light" ?setBtnName("dark"):setBtnName("Light");
        }}>{btname}</button>
      </ul>
    </div>
  )
}


export default Navbar