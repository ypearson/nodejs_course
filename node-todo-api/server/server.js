var express    = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req,res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        console.log("id not valid");
        res.status(404).send();
    }
    else
    {
        Todo.findById(id).then((todo)=>{
            if(!todo)
            {
                Todo.find({}).then((todo)=>{console.log("Users:", todo);});
                console.log('todo: id not found');
                res.status(404).send();
            }
            else
            {
                console.log("find by Id", todo);
                // res.status(200).send(todo);
                // res.status(200).send({todo:todo});
                res.status(200).send({todo});
            }
        }).catch((e)=>{
            console.log(e);
            res.status(400).send(e);
        });
    }
});


app.listen(process.env.PORT || 3000, () => {
  console.log("listening...");
});

module.exports={app};

// var newUser = new User({
//     name:'Bob',
//     email:'bob@bob.com'
// });

// newUser.save().then(doc => {
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log(e);
// });

