var mongoose = require('mongoose');

var Users = mongoose.model('users', {
    name:{
        type:String,
        required: true,
        minlength:1,
        trim: true
    },
    email:{
        type:String,
        required:true
    }
});

Users.create(
    { name: 'Star Wars',
      email: "bob@gmail.com"})
.then( (user) =>
 {

    console.log("Added:" , user);
 });

Users.find().then( (user) =>
 {
    console.log("Found:" , user);
 });

module.exports={Users};