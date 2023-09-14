
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
  // DELETE request receives a query parameter containing the specific id to be deleted.
  app.delete('/api/notes/:id', (req, res) => {
    // grabs notes form db.json
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    // deleting the note by its id 
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    // Rewriting the updated notes that reflect the delete to db.json 
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
   })
};