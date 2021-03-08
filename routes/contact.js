var express = require('express');
var router = express.Router();
var middlewarePublic = require('../middlewares/public');



/* GET contact page. */
router.get('/',middlewarePublic.isLoad, function(req, res, next) {
  res.render('contact', {  });
});

module.exports = router;
