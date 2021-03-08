var express = require('express');
var router = express.Router();
var middlewarePublic = require('../middlewares/public');

/* GET skins page. */
router.get('/', middlewarePublic.isLoad,function(req, res, next) {
  res.render('userControl', {  });
});

module.exports = router;
