var express = require('express');
var router = express.Router();
var modelRegister = require('../model/register')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register',{
      
  });
});


router.post('/', function(req, res, next) {

 user = req.body;



  modelRegister.register(user);

  res.redirect('/login')
 

});

module.exports = router;
