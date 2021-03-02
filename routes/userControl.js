var express = require('express');
var router = express.Router();
var authenticate = require('../model/authenticated');
var logado= authenticate.authenticated;

/* GET skins page. */
router.get('/', function(req, res, next) {
  res.render('userControl', { logado });
});

module.exports = router;
