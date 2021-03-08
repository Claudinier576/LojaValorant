var kartModel = require("../model/kart");
var express = require('express');
var router = express.Router();
var multer = require('multer');
var middlewarePublic = require('../middlewares/public');

var path = require('path');

var numberRandom = Math.random() * 100;
/* GET home page. */
let imageFile = '';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('public/images'))
  },
  filename: function (req, file, cb) {
    imageFile = (numberRandom.toString() + '-' + file.originalname)

    cb(null, imageFile)

  }
})

var upload = multer({ storage: storage })



/* GET skins page. */
router.get('/', middlewarePublic.isLoad, function (req, res, next) {
  const productsData = kartModel.getkart(req.session.user.email);
  res.render('kart', { productsData: productsData });
});




router.delete('/:id', function (req, res) {

  kartModel.deleteFile(req.params.id, req.session.user.email);
  res.redirect('/kart');


});




module.exports = router;
