var express = require('express');
var router = express.Router();

var authenticate = require('../model/authenticated');
var logado= authenticate.authenticated;

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { logado });
});

module.exports = router;
