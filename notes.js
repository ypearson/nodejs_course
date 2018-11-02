console.log("Starting notes.js");

console.log(module)

module.exports.hello=100
module.exports.addNote = (a,b) =>
{
    console.log("added notes");
    return a+b;
}

module.exports.add = (a,b) =>
{
    return a+b;
}