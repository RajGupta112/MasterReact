import { useState } from "react"



const Navbar = () =>{
  //usestatehook
 const [btname,setBtnName]=useState("light");
  return(
    <div className="navbar">
      <h1>Logo</h1>
      <ul className="menuitems">
        <li>Men</li>
        <li>women</li>
        <li>Kids</li>
        <button onClick={()=>{
          btname ==="Light" ?setBtnName("dark"):setBtnName("Light");
        }}>{btname}</button>
      </ul>
    </div>
  )
}


export default Navbar