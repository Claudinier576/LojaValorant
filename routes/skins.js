var express = require('express');
var router = express.Router();
var logado= true;

/* GET skins page. */
router.get('/', function(req, res, next) {
  res.render('skins', { logado });
});

module.exports = router;
