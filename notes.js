console.log("Starting notes.js");

const fs = require('fs');

// var car = {type:"Fiat", model:"500", color:"white"};

var fetchNotes = () =>
{
    var notes = []
    try
    {
        var notesString = fs.readFileSync("notes.json");
        notes = JSON.parse(notesString);
    }
    catch (e)
    {
        notes = []
    }

    return notes;
};

// var dupes = notes.filter((note) => {
    //     return note.title === title;
    // });

var saveNote = (notes) =>
{
    fs.writeFileSync("notes.json", JSON.stringify(notes));
};

var addNote = (title,body) =>
{
    var ret;

    console.log("adding note:", title, body);

    note = {
        title,
        body
    };

    notes = fetchNotes();
    var dupes = notes.filter((note) => note.title === title);
    if(dupes.length === 0)
    {
        notes.push(note);
        saveNote(notes);
        ret = note;
        debugger;
    }

    return ret;
};

var getAll = () =>
{
    return fetchNotes();
}

var readNote = (title) =>
{
    var notes = fetchNotes();
    return notes.filter( (note) => note.title === title)[0];
}

var removeNote = (title) =>
{
    var ret;
    var notes = fetchNotes();
    var remaining_notes = notes.filter( (note) => note.title !== title);
    if(remaining_notes.length !== notes.length)
    {
        saveNote(remaining_notes);
        ret = title;
    }

    return ret;
}

module.exports =
{
    addNote,
    getAll,
    readNote,
    removeNote,
};
