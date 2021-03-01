var express = require('express');
var router = express.Router();
var logado= true;

var productsModel = require("../model/skins");

/* GET skins page. */
router.get('/', function(req, res, next) {
  const productsData = productsModel.getProducts();
  res.render('skins', { logado, productsData: productsData });
});


router.post("/", function (req, res) {
  const newProduct = req.body;

  productsModel.insertProduct(newProduct);
  res.redirect("/skins");
});




module.exports = router;
