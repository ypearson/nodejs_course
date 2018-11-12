var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
var databaseName = 'TodoApp'

mongoose.connect('mongodb://localhost:27017/'+databaseName);

// module.exports = {
//     mongoose: mongoose
// }

module.exports = {mongoose};