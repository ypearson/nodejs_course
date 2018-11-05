const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var yargsTitleOptions = { decribe:'Title of note',
                          demand:true,
                          alias: 'a'};

var yargsBodyOptions  = { decribe:'body of note',
                          demand:true,
                          alias:'b'};

const argv = yargs
    .command('add', 'add new note',
    {
        title:yargsTitleOptions,
        body: yargsBodyOptions,
    })
    .command('list', 'list all notes',{})
    .command('read', 'read target note',
    {
        title: yargsTitleOptions,
    })
    .command('remove', 'remove note',
    {
        title: yargsTitleOptions,
    })
    .help()
    .argv;

var cmd = argv._[0];

if (cmd === 'add')
{
    if(! _.isUndefined(notes.addNote(argv.title, argv.body)))
    {
        console.log("AAnote added: ", `title ${argv.title}: ${argv.body}`)
    }
    else
    {
        console.log("dupe detected.")
    }
}
else if (cmd === 'list')
{
    notes.getAll().forEach((element) => console.log(element));
}
else if (cmd === 'read')
{
    var note = notes.readNote(argv.title);
    if(note)
    {
        console.log("Note read:", note.title, note.body);
    }
    else
    {
        console.log("Note not found");
    }
}
else if (cmd === 'remove')
{
    var msg  = `title ${argv.title} `;

    msg += notes.removeNote(argv.title)?"removed":"not found";
    console.log(msg);
}
else
{
    console.log('Command: ', 'not recognized command');
}