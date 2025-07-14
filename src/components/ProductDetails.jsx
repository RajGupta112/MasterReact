import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { addItems } from "../store/cardSlice";
import { useDispatch } from "react-redux";

const ProductDetails= () =>{

const {productId}=useParams();
const dispatch=useDispatch();

 const singleProduct=useGetSingleProduct(productId)
   if (!singleProduct) {
    return <p>Loading product details...</p>;
  }

  const {image,title,price}=singleProduct;

  const handleCartItem=()=>{
    dispatch(addItems(singleProduct));
  }
  return(
    <div>

   <img src={image} />
   <h1>{title}</h1>
   <p>{price}</p>
    <button onClick={handleCartItem} className='bg-black text-white px-2 py-2 mt- mb-2.5
      '>Add to Cart</button>
    </div>
  )
}

export default ProductDetails