var express = require('express');
var app = module.exports.app = exports.app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
  res.send('Hello About');
});


app.get('/Justin', function (req, res) {
  res.send('Hello justin!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});