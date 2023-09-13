
const path = require('path');
const fs = require('fs')

// npm package that generates unique ids for user inputs 
var uniqid = require('uniqid');


module.exports = (app) => {

  // GET request  reads the db.json file and returns saved notes
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // POST request receives a new note and saves on the request body.
  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    // creating body for note
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
  });


};