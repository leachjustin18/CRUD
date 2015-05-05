	var express = require('express');
	var router = express.Router();

	router.get('/', function(req, res) {
	    var db = req.db;
	    var collection = db.get('usercollection');
	    collection.find({}, {}, function(e, docs) {
	        res.render('users', {
	            pageName: 'Users',
	            layout: 'layouts/shell',
	            "users": docs
	        });
	    });
	});

	module.exports = router;