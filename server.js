// dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.js')
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// setting up the get routes 
// landing page 
app.get('/', (req, res)=>
res.sendFile(path.join(__dirname, 'public/pages/index.html'))
);

// Notes page
app.get('/notes' ,(req, res) =>
res.sendFile(path.join(__dirname, 'public/pages/notes.html')))



// starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT} 🚀`);
});