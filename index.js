const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Shopping Backend API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
