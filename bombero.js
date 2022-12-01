const Fuego = require("./Fuego");

class Bombero {
    //Estado/característica/campo
    #bomberoJoven="sin nombre";
    #bomberoExperimentado= "no nombre";
    #nombre= "nom xdef";
  
    //Inicializo los estados/caracterisiticas
    constructor(nombre){
        this.#nombre= nombre;
    }

    setBomberoJoven(bomberoJoven){
        this.#bomberoJoven=bomberoJoven;
    }
    getBomberoJoven(){
        return this.#bomberoJoven;
    }

    setBomberoExperimentado(bomberoExperimentado){
        this.#bomberoExperimentado=bomberoExperimentado;
    }
    getBomberoExperimentado(){
        return this.#bomberoExperimentado;
    }

    setNombre(nombre){
        this.#nombre=nombre
    }
    getNombre(){
        return this.#nombre;
    }



    //comportamiento
    quienSos(){ //quienApagaElFuego / QuienEsElBomberoJoven
        return "yo soy: " +this.bomberoJoven;
    }
    
    miNombreEs(nuevoNombre){
        this.bomberoJoven=nuevoNombre;
    }
  
 
    quienApagoElFuego(){  //quienesApaganElFuego
        return "Yo soy " +this.#nombre+" , el bombero que apagó el incendio";
    }

    setNombre(nuevoNombre){
        this.#nombre=nuevoNombre;
    }

    getNombre(){
        return this.#nombre;
    }

      
    intentaApagarElFuego(fuego){
        console.log(this.#nombre , "va a apagar el fuego");

        if (fuego.getFuegoEncendido()) {
            console.log("apagalo!!");
            fuego.apagate();
        } else {
            console.log("vamos a tomar mate");
        }
    }
        

}

module.exports = Bombero;

