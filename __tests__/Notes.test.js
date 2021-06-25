const {
    createNewNote,
    validateNote,
    deleteNote
} = require('../lib/notes');
const {notes} = require('../db/db.json');

jest.mock('fs');

test('create a new note', () => {
    const note = createNewNote (
        {title: 'OAR To Do', text: 'finish variances'},
        notes
    );


    expect(note.title).toEqual(expect.any(String));
    expect(note.text).toEqual(expect.any(String));
    expect(note.id).toEqual(expect.any(String));
})

test('validate title and text', () => {
    const note = {
        title: 'OAR To Do', 
        text: 'finish variances'
    }

    const invalidNote = {
        title: 'balance sheet variance',
        text: 8
    }

    const result = validateNote(note);
    const result2 = validateNote(invalidNote);

    expect(result).toBe(true);
    expect(result2).toBe(false);
})
