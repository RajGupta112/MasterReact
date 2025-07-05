import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ProductDetails= () =>{
const [singleproduct,setSingleProduct] = useState(null);
const {productId}=useParams();
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data =await fetch(`https://fakestoreapi.com/products/${productId}`)
    const resData=await data.json();
    setSingleProduct(resData);
    console.log(resData);
  }

   if (!singleproduct) {
    return <p>Loading product details...</p>;
  }

  const {image,title,price}=singleproduct;
  return(
    <div>

   <img src={image} />
   <h1>{title}</h1>
   <p>{price}</p>
    </div>
  )
}

export default ProductDetails