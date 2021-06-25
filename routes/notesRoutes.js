const router = require('express').Router();
const { notes } = require('../db/db');
const {createNewNote, validateNote, deleteNote} = require('../lib/notes');


router.get('/notes', (req, res) => {
    const results = notes;
    console.log(results);
    res.json(results);
})

router.post('/notes', (req, res) => {
    
    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted');
    } else {
        
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
})

router.delete('/notes/:id', (req, res) => {
    const {id} = req.params

    const deleted = notes.find(note => note.id == id);
    if(deleted) {
        const newArray = deleteNote(deleted, notes)
        res.json(newArray)
    } else {
        res.status(404).json({message: "404 Error"})
    }
})

module.exports = router;