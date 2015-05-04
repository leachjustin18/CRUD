var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('about', { 
		pageName: 'About us', 
		layout: 'layouts/shell'
	});
});

module.exports = router;