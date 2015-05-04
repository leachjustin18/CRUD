var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('Hi, I am the home');
});


module.exports = router;