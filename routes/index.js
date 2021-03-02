var express = require('express');
var router = express.Router();

var authenticate = require('../model/authenticated');
var logado= authenticate.authenticated;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { logado });
});

module.exports = router;
