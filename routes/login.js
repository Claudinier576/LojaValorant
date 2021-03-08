var express = require('express');
const { route } = require('./RegisterSkin');
var router = express.Router();
const middlewareLogin = require('../middlewares/login')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


router.post('/', middlewareLogin.verifyLogins ,function(req, res, next) {
  
  
  if(req.body.logado !== undefined){
    res.cookie('loginEmail', req.body.email,{maxAge:900000});
    res.cookie('loginPassword', req.body.password,{maxAge:900000});
  }

  res.redirect('/');


})

module.exports = router;
