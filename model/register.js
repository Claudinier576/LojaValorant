const fs = require('fs');
let acconts = require('../src/accont.json');

function getAccounts(){

    return acconts;

}

function register(user){

    accont = getAccounts();

    let newUser = user;

    accont.push(newUser);



    
    saveJson();
}


function saveJson() {
    
    var Naccont = getAccounts();

    var Newacconts = JSON.stringify(Naccont);
    
    fs.writeFileSync('src/accont.json', Newacconts);
    
}

module.exports = {
    register: register
}