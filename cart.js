const express = require('express');
const router = express.Router();
const products = require('../data/products');

let cart = []; // simple in-memory cart

// GET all cart items
router.get('/', (req, res) => {
  res.json(cart);
});

// POST add item to cart
router.post('/', (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  res.json(cart);
});

// DELETE item from cart
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(item => item.id !== id);
  res.json(cart);
});

module.exports = router;
