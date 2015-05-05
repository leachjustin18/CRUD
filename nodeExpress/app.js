//Pull in required files
var express = require('express');
var path = require('path');
var home = require('./routes/index');
var userlist = require('./routes/users');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/expressTest');

// set our port
var port = process.env.PORT || 3000; 

//Use gulp-express with express 
var app = module.exports.app = exports.app = express();

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

//Handlebars set up for redering engine and views
app.set('view engine', 'hbs'); 
app.set('views', __dirname + '/views');

//Use routes
app.use('/', home);
app.use('/users', userlist);

//Specify where to look for CSS, JS, etc. 
app.use(express.static(path.join(__dirname, '/public')));

//Local server with port 3000
app.listen(port);

