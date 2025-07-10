import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";

const ProductDetails= () =>{

const {productId}=useParams();

 const singleProduct=useGetSingleProduct(productId)
   if (!singleProduct) {
    return <p>Loading product details...</p>;
  }

  const {image,title,price}=singleProduct;
  return(
    <div>

   <img src={image} />
   <h1>{title}</h1>
   <p>{price}</p>
    </div>
  )
}

export default ProductDetails