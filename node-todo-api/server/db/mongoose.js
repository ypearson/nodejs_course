var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
var databaseName = 'TodoApp'

// mongoose.connect('mongodb://localhost:27017/'+databaseName);

mongoose.connect(process.env.MONGODB_URI);

// module.exports = {
//     mongoose: mongoose
// }

module.exports = {mongoose};