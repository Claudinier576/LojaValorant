var express = require('express');
var router = express.Router();
var logado= true;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource', { logado });
});

module.exports = router;
