// dependencies
const express = require('express');



// starting express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// routes file
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT} 🚀`);
});