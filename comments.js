// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const comments = require('./comments');

// Create web server
const app = express();

// Use modules
app.use(bodyParser.json());
app.use(cors());

// Create route
app.get('/comments', (req, res) => {
  res.json(comments.get());
});

// Create route
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.add(comment);
  res.json(comment);
});

// Start web server
app.listen(3001, () => {
  console.log('Web server is running on http://localhost:3001');
});