import React from 'react';

const Prodeucts = (props) => {
  const { name, brand, price, image } = props.product;

  return (
    <div className='product'>
      <img src={image} alt={name} style={{ width: '200px', height: 'auto' }} />
      <h2>{name}</h2>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
    </div>
  );
};

export default Prodeucts;
