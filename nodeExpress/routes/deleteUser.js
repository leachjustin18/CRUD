var express = require('express');
var router = express.Router();

//Variable we use in get and post
var userId;

router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    //Store user id in variable 
    userId = req.query.id;

    //Find user by id
    collection.find({
        '_id': userId
    }, function(e, docs) {
        res.render('deleteUser', {
            pageName: 'Delete user',
            layout: 'layouts/shell',
            'deleteUsersInformation': docs
        });
    });

})

.post('/deleteCurrentUser', function(req, res) {
    var db = req.db;

    // Set our collection
    var collection = db.get('usercollection');
    
    
    collection.remove({
       '_id' : userId 
    },     function(err, doc) {
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