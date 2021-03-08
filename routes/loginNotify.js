var express = require('express');
const { route } = require('./RegisterSkin');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.render('loginNotify');

});
module.exports = router;
   
