var express = require('express');
var router = express.Router();
var logado= true;
/* GET home page. */

var productsModel = require("../model/skins");

/* GET skins page. */
router.get('/', function(req, res, next) {
  const productsData = productsModel.getProducts();
  res.render('RegisterSkin', { logado, productsData: productsData });
});


router.post("/", function (req, res) {
  const newProduct = req.body;

  productsModel.insertProduct(newProduct);
  res.redirect("/ADDskin");
});


router.delete('/:id', function(req, res) {

  productsModel.deleteFile(req.params.id);
 


  res.redirect('/ADDskin');
});




module.exports = router;
