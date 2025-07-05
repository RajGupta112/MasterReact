import React, { useEffect, useState } from 'react';

import productList from './productlist';
import Prodeucts from './Prodeucts';
import Skelton from './Skelton';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const [listofProduct,setListofProduct]=useState([]);
  const [search,setSearch]= useState("");
useEffect(()=>{
   fetchData();
},[])

const fetchData= async()=>{
  const data= await fetch("https://fakestoreapi.com/products")
  const resData= await data.json();
  setListofProduct(resData);

}
const filterdata=listofProduct.filter((product)=>{
  return product.price.toString().includes(search);
})


  return listofProduct.length===0 ? <Skelton/> : (
    <div className='productcard'>
      <div>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} />
        <button onClick={()=>setListofProduct(filterdata)}>search</button>
      </div>
      <button onClick={()=>{
       const filterProduct=listofProduct.filter(product=>product.price>=18);
       setListofProduct(filterProduct)
      }} style={{"marginTop":"10px"}}>Top Rated Product</button>
      {
      listofProduct.map((product, index) => (
         <Link key={product.id} to={`/product/${product.id}`}>  <Prodeucts  to product={product} /></Link>
        ))
      }
    </div>
  );
};

export default ProductCard;
