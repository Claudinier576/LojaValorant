var express = require('express');
var router = express.Router();
var logado= true;

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { logado });
});

module.exports = router;
