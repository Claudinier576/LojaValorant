function verifyempty(req, res, next) {
    
    console.log('passando o middleware')
    var requisition = req.body;

    if(requisition.name.trim() == ''){

        res.status(500).send("Erro: o campo de nome  é obrigatório");
        return;

    }else if(requisition.value.trim() == ''){

        res.status(500).send("Erro: o campo de valor  é obrigatório");
        return;

    }else if(Math.sign(requisition.value.trim())== -1){
        res.status(500).send("Erro: o campo de valor deve conter apenas numeros positivos");
        return;
    } 
    else if(requisition.description.trim() == ''){

        res.status(500).send("Erro: o campo de descrição  é obrigatório");
        return;

    } else if(requisition.set.trim() == ''){

        res.status(500).send("Erro: o campo conjunto é obrigatório")
    }
    
    next();

}

module.exports ={
    verifyempty:verifyempty
}