const express = require('express');
const app = express();
const port = 5000;

// Sample product data
const products = [
  { id: 1, name: '2T MAK OIL 20ml', sku: '7267655', price: 2415.00, stock: 9955, gst: 16, image: '/images/2k mak.jpg' },
  { id: 2, name: '2T MAK OIL 40ml', sku: '2T MAK OIL 40ml', price: 15.00, stock: 10000, gst: 16, image: '/images/product2.png' },
  // Add more products here
];

// Define a route to get the products
app.get('/api/products', (req, res) => {
  res.json(products); // Send product data as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
