var express = require('express');
var app = module.exports.app = exports.app = express();
var home = require('./routes/index');
var about = require('./routes/about');

//Routes
app.use('/', home);
app.use('/about', about);

//Local server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});