import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems=useSelector((store)=> store.cart.cartitems);
  return (
    <div className='max-w-5xl  mx-auto mt-10'>
      <h1>cart-({0})</h1>
      {cartItems.map((item)=>(
        <div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Cart
