import React from 'react';

import productList from './productlist';
import Prodeucts from './Prodeucts';

const ProductCard = () => {
  return (
    <div className='productcard'>
      {
        productList.map((product, index) => (
          <Prodeucts key={index} product={product} />
        ))
      }
    </div>
  );
};

export default ProductCard;
