var acconts = require('../src/accont.json');


function verifyLogins(req, res, next){

  if(req.session.user == null || req.session.user == undefined){
    var accont = acconts.filter(function(accont){

        return accont.email == req.body.email ; 
    
     })
    
    
     
    
        accont.forEach(function(accont){
            if(accont.email == req.body.email && accont.password == req.body.password){
                req.session.user = accont
                next();
            }
        });
        
        res.redirect('/login');
        return;
    
    }
    
    next();
  }



module.exports ={
    verifyLogins: verifyLogins
}
