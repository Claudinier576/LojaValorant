var express = require('express');
const { route } = require('./RegisterSkin');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


router.post('/', function(req, res, next) {
  

  console.log('req pagina login = '+ req.body)

  res.redirect('/skins');


})

module.exports = router;
