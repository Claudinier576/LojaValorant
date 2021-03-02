var express = require('express');
const { route } = require('./RegisterSkin');
var router = express.Router();

const logar = require('../model/login');
const authenticated = require('../model/authenticated');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


router.post('/', function(req, res, next) {
  

  logar.login(req.body);

 

  console.log(authenticated.authenticated)

  res.redirect('/skins');


})

module.exports = router;
