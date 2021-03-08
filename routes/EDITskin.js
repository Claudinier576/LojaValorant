var express = require('express');
var router = express.Router();
var multer = require('multer');
var middlewarePublic = require('../middlewares/public');
var path = require('path');
var productsModel = require("../model/skins");
var numberRandom = Math.random() * 100;
var form = 1;

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



router.get('/', middlewarePublic.isLoad,function (req, res, next) {
    const productsData = productsModel.getProducts();
    res.render('EDITskin', {  productsData: productsData, form:form});
});



router.put('/',upload.single('img'), function (req, res, next) {

    

    const newProduct = req.body;
    var image = imageFile;


    productsModel.editFile(newProduct,image);

    res.redirect('/EDITskin');

});



module.exports = router;