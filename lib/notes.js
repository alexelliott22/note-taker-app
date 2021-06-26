const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

const createNewNote = (body, notesArray) => {
    let note = body;
    note.id = uniqid();
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
}

const deleteNote = (deletedNote, notesArray) => {
    notesArray = notesArray.filter(note => deletedNote.id !== note.id)

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    )

    console.log(notesArray);
    return notesArray;
}

const validateNote = note => {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

const readNotesFile = () => {
    const notes = fs.readFileSync('db/db.json', 'utf8');

    return notes;
}


module.exports = {
    createNewNote,
    validateNote,
    deleteNote,
    readNotesFile
}