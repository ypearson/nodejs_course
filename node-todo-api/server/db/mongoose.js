var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
var databaseName = 'TodoApp'

// mongoose.connect('mongodb://localhost:27017/'+databaseName);

mongoose.connect('mongodb://ypearson:GBP4vnYJvfKEw3g@ds111791.mlab.com:11791/hellodb');

// module.exports = {
//     mongoose: mongoose
// }

module.exports = {mongoose};