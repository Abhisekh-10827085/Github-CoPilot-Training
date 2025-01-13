// Create web server

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const comments = require('./comments');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});