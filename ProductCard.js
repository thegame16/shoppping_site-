import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '1rem',
      margin: '1rem',
      width: '200px'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
