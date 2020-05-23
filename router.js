const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('home-quest');
});

router.get('/about', function(req, res){
    res.send("This is about page!")
})

module.exports = router;