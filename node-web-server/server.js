const express = require('express');
const hbs = require('hbs');
const fs  = require('fs');

const port = process.env.PORT||3000;

var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () =>
{
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) =>
{
    return text.toUpperCase();
});

app.use((req,res,next) => {

    var now = new Date().toString();

    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log+'\n', (err)=>
    {
        console.log("error");
    })

    res.render('broken.hbs',
    {
        pageTitle:'Broken Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: "Hello visitor=)"
    });
    next();
});

// app.use((req,res,next) => {

//     res.render('broken.hbs',
//     {
//         pageTitle:'Broken Page',
//         currentYear: new Date().getFullYear(),
//         welcomeMessage: "Hello visitor=)"
//     });
//     // next();
// });

app.use(express.static(__dirname+'/public'));

app.get('/',(request,response)=>
{
    response.render('home.hbs',
    {
        pageTitle:'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: "Hello visitor!"
    });
});

app.get('/about', (request, response)=>
{
    response.render('about.hbs',
    {
        pageTitle:'Home Page',
        currentYear: new Date().getFullYear(),
    });
});

app.get('/bad', (request, response)=>
{
    response.send(
    {
        errorMessage:1
    });
});

app.listen(port, () =>
{
    console.log("server is up @", port);
});

