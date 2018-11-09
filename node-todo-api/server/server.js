var express    = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo}     = require('./models/todo');
var {User}     = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    console.log(req.body);

    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        console.log(doc);
        res.send(doc);
    },
    (e)=>{
        console.log(e);
        res.status(400).send(e);
    });

});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening...");
});


// var newUser = new User({
//     name:'Bob',
//     email:'bob@bob.com'
// });

// newUser.save().then(doc => {
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log(e);
// });
