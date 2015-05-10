var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var userId;


// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});


router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    //Store user id in variable 
    userId = req.query.id;

    //Find user by id
    collection.find({
        '_id': userId
    }, function(e, docs) {
        res.render('editUser', {
            pageName: 'Edit user',
            layout: 'layouts/shell',
            'editUsersInformation': docs
        });
    });

})

.post('/updatecurrentuser', urlencodedParser, function(req, res) {
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.updatedusername;
    var userEmail = req.body.updateduseremail;
    var userPassword = req.body.updateduserpassword;
    var name = req.body.updatedname;

    // Set our collection
    var collection = db.get('usercollection');

    collection.update({
            '_id': userId
        },
        {
            $set: {
                'username': userName,
                'email': userEmail,
                'password': userPassword,
                'name': name

            }
        },
        function(err, doc) {
            if (err) {
                res.send('This was a problem updating, please try again');
            } else {
                //It worked. 
                res.location('/users');

                res.redirect('/users');
            }
        });
});

module.exports = router;