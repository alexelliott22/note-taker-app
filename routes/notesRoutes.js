const router = require('express').Router();
const { notes } = require('../db/db.json');
const {createNewNote, validateNote, deleteNote, readNotesFile} = require('../lib/notes');


router.get('/notes', async (req, res) => { 
    const notesFile = readNotesFile();
    const notes = JSON.parse(notesFile)

    res.json(notes.notes);
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