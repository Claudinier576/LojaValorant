var express = require('express');
var router = express.Router();
var logado= true;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { logado });
});

module.exports = router;
