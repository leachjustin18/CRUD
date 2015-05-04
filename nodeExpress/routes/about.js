var express = require('express');
var router = express.Router(); 

router.get('/', function(req, res){
	res.send('Hi about page');
});

router.get('/justin', function(req, res) {
	res.send('About Justin');
});


module.exports = router;