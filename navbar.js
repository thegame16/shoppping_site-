import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <h2>ShopEase</h2>
      <div>
        <a href="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</a>
        <a href="/products" style={{ color: '#fff', marginRight: '1rem' }}>Products</a>
        <a href="/cart" style={{ color: '#fff' }}>Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
