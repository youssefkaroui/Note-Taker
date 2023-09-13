// dependencies
const path = require('path');



module.exports = (app) => {

  // GET routes 
  // notes page
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/notes.html'));
  });

  // landing page
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/index.html'));
  })
};