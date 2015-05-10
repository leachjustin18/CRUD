var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res){
	res.render('newUser', { 
		pageName: 'Add new user', 
		layout: 'layouts/shell'
	});
})
//Add new user from post
.post('/adduser', urlencodedParser, function(req, res) {
    var db = req.db;
    
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var userPassword = req.body.userpassword;
    var name = req.body.name;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        'username' : userName,
        'email' : userEmail, 
        'password': userPassword, 
        'name' : name
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send('There was a problem adding the information to the database.');
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location('/users');
            // And forward to success page
            res.redirect('/users');
        }
    });
  
});

module.exports = router;