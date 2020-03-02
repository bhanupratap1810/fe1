var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars'); 
var path = require('path'); 

var app = express();

app.set('port', 3000);

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('hbs', hbs({extname: 'hbs',defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'})); 
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs'); 

var hbsContent = {userName: '', loggedIn:false, title: "You are not logged in today", body: "Hello World"}; 

app.get('/', (req, res) => {
    res.render('index', hbsContent);
});

app.get('/register', (req, res) => {
    res.render('register', hbsContent);
});

app.get('/login', (req, res) => {
    res.render('login', hbsContent);
});



app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});


// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));