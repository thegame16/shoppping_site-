import React from 'react';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Smartphone', price: 499, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Headphones', price: 199, image: 'https://via.placeholder.com/150' },
];

const Products = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {sampleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
