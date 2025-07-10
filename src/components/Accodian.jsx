import React, { useState } from 'react'
import Items from './Items'
const Accodian = () => {
  const [open,setOpen] = useState(false);
  const showItemList= () =>{
 setOpen(!open);
  }
  return (
  <div className='shadow-lg
     border-gray-200 px-4 py-2 w-64'>

      <div className='flex justify-between  '>
      <h1>Gender</h1>
      <button className='bg-black text-white px-2 rounded-md cursor-pointer' onClick={showItemList}>show</button>
   
    </div>
   {
    open &&  <Items/>
   }
  </div>
  )
}

export default Accodian
