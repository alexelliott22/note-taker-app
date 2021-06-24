const router = require('express').Router();
const { notes } = require('../db/db');
const {createNewNote, validateNote} = require('../lib/notes');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results);
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    
    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted');
    } else {
        
        const note = createNewNote(req.body, notes);
        res.json(note);
    }


})

module.exports = router;