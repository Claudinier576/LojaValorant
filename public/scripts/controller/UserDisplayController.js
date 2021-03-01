class UserDisplayController{

    constructor(){


        this._imageUser = document.querySelectorAll(".imgUser")




    }

    alterar(){

        this.imageUser = `../images/icons8-instagram-32.png`

    }


    get imageUser(){

        return this._imageUser;

    }
    set imageUser(code){

       this._imageUser.forEach(function(EL){

           EL.innerHTML = code

       } )

    }




}