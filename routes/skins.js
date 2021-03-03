var kartModel = require("../model/kart");
var express = require('express');
var router = express.Router();




var productsModel = require("../model/skins");



/* GET skins page. */
router.get('/', function (req, res, next) {
  const productsData = productsModel.getProducts();
  res.render('skins', {  productsData: productsData });
});


router.post("/:id", function (req, res) {
  const newProduct = req.params.id;


  kartModel.insertProduct(newProduct);

  console.log(newProduct)


  res.redirect("/skins");
});


module.exports = router;
