//Pull in required files
var express = require('express');
var path = require('path');
var home = require('./routes/index');
var about = require('./routes/about');


// set our port
var port = process.env.PORT || 3000; 

//Use gulp-express with express 
var app = module.exports.app = exports.app = express();

//Handlebars set up for redering engine and views
app.set('view engine', 'hbs'); 
app.set('views', __dirname + '/views');

//Use routes
app.use('/', home);
app.use('/about', about);

//Specify where to look for CSS, JS, etc. 
app.use(express.static(path.join(__dirname, '/public')));

//Local server with port 3000
app.listen(port);

