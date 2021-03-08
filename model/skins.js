let products = require('../src/guns.json');
let date = new Date();
let dateString = '';
dateString += date.getDay() +'-'+date.getHours();




let pathfile = 'src/produto'+dateString+'.txt';

const fs = require('fs');

function insertProduct(product,image) {
    product.id = Math.random()*100;
    product.img = image;
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
  }else if(type=='edit'){

    fs.appendFileSync(pathfile,'\n Skin id:'+ id+'Editada em: '+ data.toLocaleDateString('pt-br'));

  }

  saveJson();
 
}

function saveJson(){


  var newProducts = JSON.stringify(products);

  fs.writeFileSync('src/guns.json',newProducts);



}

function deleteFile(id){

  



  products = products.filter(function(product){
    return product.id != id;
  })


  saveFile('delete',id);


}

function editFile(id,image){

  

  var product = products.filter(function(product){
    return product.id == id.id;
  })

  product.forEach(function(product){

    product.value = id.value;
    product.set = id.set;
    product.name = id.name;
    product.description = id.description;
    if(image != ''){
      product.img = image;
    }
  

  });



  saveFile('edit',id.id);


}







module.exports = {
 editFile: editFile,
  deleteFile: deleteFile,
  getProducts: getProducts,
  insertProduct: insertProduct
};
