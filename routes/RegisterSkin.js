var express = require('express');
var router = express.Router();
var multer  = require('multer');
var authenticate = require('../model/authenticated');
var logado= authenticate.authenticated;
var path = require('path');

var numberRandom = Math.random() *100;
/* GET home page. */
let imageFile = '';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('public/images'))
  },
  filename: function (req, file, cb) {
    imageFile = (numberRandom.toString()+'-'+file.originalname)

    cb(null, imageFile )

  }
})
 
var upload = multer({ storage: storage })


var productsModel = require("../model/skins");

/* GET skins page. */
router.get('/', function(req, res, next) {
  const productsData = productsModel.getProducts();
  res.render('RegisterSkin', { logado, productsData: productsData });
});


router.post("/",upload.single('img'),function (req, res) {
  const newProduct = req.body;
  var image = imageFile;

  productsModel.insertProduct(newProduct,image);
  
console.log(req)


  res.redirect("/ADDskin");
});


router.delete('/:id', function(req, res) {

  productsModel.deleteFile(req.params.id);
 


  res.redirect('/ADDskin');
});




module.exports = router;
