// dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.js')

// starting express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('__dirname'));

// routes file
require('./routes/apiRoutes')(app);

// starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT} 🚀`);
});