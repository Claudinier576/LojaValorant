var express = require('express');
var router = express.Router();
var authenticate = require('../model/authenticated');
var logado= authenticate.authenticated;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource', { logado });
});

module.exports = router;
