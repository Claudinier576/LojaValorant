class timerControll{


    constructor(){
        this._time = new Date();
        this._locale = 'pr-BR'
        this._displayTimeEL = document.querySelectorAll(".timerDisplay");
        this._currentTime;
        this.initalize();
        
    }

    initalize(){
    
        this.setDisplayTime();

        setInterval(()=>{

            this.setDisplayTime()

        },1000)


    }

    setDisplayTime()
    {

        if(( this.currentTime.getMinutes() - this._time.getMinutes()  ) < 1){

            this.displayTime =  (this.currentTime.getSeconds() - this._time.getSeconds() + " Segundos") ;

            
        }else if(( this.currentTime.getMinutes() - this._time.getMinutes()  ) < 60){
            this.displayTime =  (this.currentTime.getMinutes() - this._time.getMinutes()  + " Minutos") ;
        }
    

    }


    get displayTime(){


        return this._displayTimeEL.innerHTML;

    }
    set displayTime(value){


        
         this._displayTimeEL.forEach(function(EL){

            EL.innerHTML = value

         })

    }

    get currentTime() {

        return new Date();

    }
    set currentTime(data) {

        this._currentTime = data;

    }


}