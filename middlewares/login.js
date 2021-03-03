var acconts = require('../src/accont.json');


function verifyLogins(req, res, next){

    console.log(req.body);

 var accont = acconts.filter(function(accont){

    return accont.email == req.body.email ; 

 })



    accont.forEach(function(accont){
        if(accont.email == req.body.email && accont.password == req.body.password){
            
            next();

        }
    });




}


module.exports ={
    verifyLogins: verifyLogins
}
