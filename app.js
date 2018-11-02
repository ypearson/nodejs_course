// https://nodejs.org/api/
// https://www.npmjs.com/
// https://lodash.com/

console.log("starting app.js");

const fs = require('fs');
const _  = require('lodash')

const notes = require('./notes.js')

var user = os.userInfo();
console.log(user.username);

var ret = notes.add(5,6)
console.log(ret)

fs.appendFile('message.txt', `hello ${user.username} = ${notes.hello} \n`, (err) => {
  if (err) throw err;
  console.log('file operation completed');
});


console.log(_.isString("string"));

var filteredArray = _.uniq([2,2,5, 'dog', 'dog', 'cat', 'hello', 'ok this is cool'])

console.log(filteredArray);