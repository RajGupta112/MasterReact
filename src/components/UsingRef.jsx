import React, { useState } from 'react'

const UsingRef = () => {
  let x=0;
const [y,setY]=useState(0);
  return (
    <div>
      <h1>using ref</h1>
      <button className='bg-blue-600' onClick={()=>{
        x=x+1;
      }}>increament</button>

      <h1>x={x}</h1>

       <button className='bg-blue-600' onClick={()=>{
        setY(y+1);
      }}>increament</button>
      <h1>y={y}</h1>
    </div>
  )
}

export default UsingRef
