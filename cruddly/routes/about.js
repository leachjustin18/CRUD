var express = require('express');
var router = express.Router(); 

//middle ware specific to this route
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now()); 
	next();
});

router.get('/', function(req, res){
	res.send('Hi about page');
});

router.get('/justin', function(req, res) {
	res.send('About Justin');
});

module.exports = router;