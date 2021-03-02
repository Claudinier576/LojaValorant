const fs = require('fs');
let acconts = require('../src/accont.json');
var authenticate = require('../model/authenticated');

let pathFile = 'model/authenticated.js'

let trueCode = `
let authenticated = true;


module.exports = {

authenticated : authenticated

};`

let falseCode = `
let authenticated = false;


module.exports = {

authenticated : authenticated

};`

function getAllAcconts() {
    return acconts;
}


function login(user){

    accont = getAllAcconts();

    accont.forEach(function(EL){

        if(EL.email === user.email && EL.password === user.password){
            
            console.log('Fazendo autenticaçao')
            authenticate.authenticated = true;

            fs.writeFileSync(pathFile,trueCode);

            return true;

       

        }
        else{

            console.log('autenticaçao falhou');
            authenticate.authenticated = false;
                return false;
            fs.writeFileSync(pathfile,falseCode);
        }

    });
    

}


module.exports = {
 
    login: login
    
  };
  

