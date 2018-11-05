var obj =
{
    name : 'bob'
};

var objString = JSON.stringify(obj);

console.log(obj);
console.log(objString);

console.log(typeof obj);
console.log(typeof objString);

var personString = '{"name":"bill", "age":25}';

var person = JSON.parse(personString);


console.log(person);
console.log(personString);

console.log(typeof person);
console.log(typeof personString);

const fs = require('fs');

var note =
{
    title : 'some title',
    body  : 'some body',
}

noteString = JSON.stringify(note);

fs.writeFileSync('file.json', noteString);

var noteString = fs.readFileSync('file.json');

note = JSON.parse(noteString);

console.log(typeof note)
console.log(note.title)
