import React, { useState } from 'react';

const Cart = () => {
  // Sample cart items (we'll make this dynamic later)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', price: 999, quantity: 1 },
    { id: 2, name: 'Headphones', price: 199, quantity: 2 },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                borderBottom: '1px solid #ddd',
                paddingBottom: '0.5rem',
              }}
            >
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
