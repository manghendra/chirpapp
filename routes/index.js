var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {title: "Chirp"});
    //res.send("This is index route");
});

module.exports = router;