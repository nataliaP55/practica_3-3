const Bombero = require("./Bombero");

class Fuego {

    #fuegoEncendido= true; 

    constructor(fuegoEncendido){
        this.#fuegoEncendido=fuegoEncendido;

    }

    setFuegoEncendido(fuegoEncendido){
        this.#fuegoEncendido=fuegoEncendido;
    }

    getFuegoEncendido(){
        return this.fuegoEncendido;
    }

    apagate(){
        this.fuegoEncendido=false
    }
}



module.exports = Fuego;