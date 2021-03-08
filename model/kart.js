const fs = require('fs');
let data = require('../src/guns.json');
let date = new Date();
let dateString = '';
dateString += date.getDay() + '-' + date.getHours();

let pathfile = 'src/kart' + dateString + '.txt';



function getkart(Pfile) {
    try {
        let kart = require('../src/' + Pfile + 'kart.json');
        return kart;
    }
    catch (err) {
        fs.writeFileSync('src/' + Pfile + 'kart.json', '[]');
        let kart = require('../src/' + Pfile + 'kart.json');
        return kart;
    }


}


function insertProduct(productinfo, Pfile) {
    let kart = getkart(Pfile);

    var p = data.filter(function (product) {
        return product.id == productinfo;
    })


   

    p.forEach(function (product) {
        product.id = product.id + Math.random() * 100;

        kart.push(product)

    })

 

    p = [];

   

    saveFile('save', p.length, Pfile);
}


function saveFile(type, id, Pfile) {

    let data = new Date();
    let conteudos = getkart(Pfile);
    conteudo = conteudos[conteudos.length - 1];


    if (type == 'save') {

        fs.appendFileSync(pathfile, '\nSkin Adicionada em: ' + data.toLocaleDateString('pt-br') + ' Titulo: ' + conteudo.name + ' Com a descrição: ' + conteudo.description);

    } else if (type = 'delete') {

        fs.appendFileSync(pathfile, '\nSkin id: ' + id + ' Removida em: ' + data.toLocaleDateString('pt-br'));

    } else if (type == 'edit') {

        fs.appendFileSync(pathfile, '\n Skin id:' + id + 'Editada em: ' + data.toLocaleDateString('pt-br'));

    }

    saveJson(Pfile);

}

function saveJson(Pfile, newkartC) {

    if (newkartC != undefined) {

        var newkart = JSON.stringify(newkartC);

        fs.writeFileSync('src/' + Pfile + 'kart.json', newkart);



    } else {

        let Nkart = getkart(Pfile);

        var newkart = JSON.stringify(Nkart);

        fs.writeFileSync('src/' + Pfile + 'kart.json', newkart);

    }




}

function deleteFile(id, Pfile) {

    let kart = getkart(Pfile);

 


    kart = kart.filter(function (product) {


        return product.id != id;
    })

    saveJson(Pfile, kart);


}





module.exports = {
    deleteFile: deleteFile,
    getkart: getkart,
    insertProduct: insertProduct
};
