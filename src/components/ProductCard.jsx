import React, { useEffect, useState } from 'react';

import productList from './productlist';
import Prodeucts from './Prodeucts';

const ProductCard = () => {
  const [listofProduct,setListofProduct]=useState(productList);
useEffect(()=>{
   fetchData();
},[])

const fetchData= async()=>{
  const data= await fetch("https://fakestoreapi.in/api/products/1")
  const resData= await data.json();
  console.log(resData);

}
  return (
    <div className='productcard'>
      <button onClick={()=>{
       const filterProduct=listofProduct.filter(product=>product.price>=18);
       setListofProduct(filterProduct)
      }} style={{"marginTop":"10px"}}>Top Rated Product</button>
      {
      listofProduct.map((product, index) => (
          <Prodeucts key={index} product={product} />
        ))
      }
    </div>
  );
};

export default ProductCard;
