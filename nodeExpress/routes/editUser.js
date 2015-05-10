var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    var userId = req.query.id;
	
    collection.find({
        '_id': userId
    }, function(e, docs) {
        res.render('editUser', {
            pageName: 'Edit user',
            layout: 'layouts/shell',
            'editUsersInformation': docs
        });
    });

});

module.exports = router;