let products = require('../src/guns.json');
let date = new Date();
let dateString = '';
dateString += date.getDay() +'-'+date.getHours();
console.log(dateString)

let pathfile = 'src/produto'+dateString+'.txt';

const fs = require('fs');

function insertProduct(product) {
    product.id = Math.random()*100;
    products.push(product);
    saveFile('save');
  }
  


function getProducts() {
  return products;
}


function saveFile(type,id) {

  let data = new Date();
  let conteudos = getProducts();
  conteudo = conteudos[conteudos.length-1];
 

  if(type == 'save'){
  
    fs.appendFileSync(pathfile, '\nSkin Cadastrado em: ' + data.toLocaleDateString('pt-br') + ' Titulo: ' + conteudo.name + ' Com a descrição: ' + conteudo.description);
  
  }else if( type= 'delete') {
   
 
  
    fs.appendFileSync(pathfile, '\nSkin id: '+id+ ' Deletado em: ' + data.toLocaleDateString('pt-br'));
  }

  saveJson();
 
}

function saveJson(){


  var newProducts = JSON.stringify(products);

  fs.writeFileSync('src/guns.json',newProducts);



}

function deleteFile(id){

  

  console.log('this is id: '+id)

  products = products.filter(function(product){
    return product.id != id;
  })

  console.log(products)

  saveFile('delete',id);


}

module.exports = {
 
  deleteFile: deleteFile,
  getProducts: getProducts,
  insertProduct: insertProduct
};
