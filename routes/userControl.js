var express = require('express');
var router = express.Router();


/* GET skins page. */
router.get('/', function(req, res, next) {
  res.render('userControl', {  });
});

module.exports = router;
