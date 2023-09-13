const router = require("express").Router(); 
const path =  require('path');
const apiRoutes = require("./apiRoutes")
router.use('/api', apiRoutes)

// renders the landing page (index.html) 
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
// renders the note.html
router.get("/notes", (req,res)=> {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
    console.log("goes through index");
});

module.exports = router;