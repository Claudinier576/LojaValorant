const fs = require('fs');
let products = require('../src/kart.json');
let data = require('../src/guns.json');
let date = new Date();
let dateString = '';
dateString += date.getDay() + '-' + date.getHours();
console.log(dateString)
let pathfile = 'src/kart' + dateString + '.txt';



function getProducts() {
    return products;
}


function insertProduct(productinfo) {
   
    var p = data.filter(function(product) {
       return product.id == productinfo;
    })

    console.log(p);

    p.forEach(function(pr){
        products.push(pr);
    })

    
    saveFile('save');
}


function saveFile(type, id) {

    let data = new Date();
    let conteudos = getProducts();
    conteudo = conteudos[conteudos.length - 1];


    if (type == 'save') {

        fs.appendFileSync(pathfile, '\nSkin Adicionada em: ' + data.toLocaleDateString('pt-br') + ' Titulo: ' + conteudo.name + ' Com a descrição: ' + conteudo.description);

    } else if (type = 'delete') {

        fs.appendFileSync(pathfile, '\nSkin id: ' + id + ' Removida em: ' + data.toLocaleDateString('pt-br'));

    } else if (type == 'edit') {

        fs.appendFileSync(pathfile, '\n Skin id:' + id + 'Editada em: ' + data.toLocaleDateString('pt-br'));

    }

    saveJson();

}




function saveJson() {


    var newProducts = JSON.stringify(products);

    fs.writeFileSync('src/kart.json', newProducts);



}

function deleteFile(id) {



    console.log('this is id: ' + id)

    products = products.filter(function (product) {
        return product.id != id;
    })

    console.log(products)

    saveFile('delete', id);


}

function editFile(id, image) {



    console.log('this is id: ' + id.id)

    var product = products.filter(function (product) {
        return product.id == id.id;
    })

    product.forEach(function (product) {

        product.value = id.value;
        product.set = id.set;
        product.name = id.name;
        product.description = id.description;
        product.img = image;

    });






    console.log(product)




    saveFile('edit', id.id);


}







module.exports = {
    editFile: editFile,
    deleteFile: deleteFile,
    getProducts: getProducts,
    insertProduct: insertProduct
};
