/* En un nuevo proyecto usar al menos 2 clases que no hayamos visto donde:
Tienen que tener comportamientos para modificar estados (al menos 2 estados)
Los objetos tienen que poder interactuar con otros objetos de la misma clase (al menos 1 tipo de interaccion)
Los objetos tienen que poder interactuar con otros objetos de otra clase (al menos 1 tipo de interaccion) */


const Fuego = require("./Fuego");
const Bombero= require("./Bombero");

//identidad

const bomberoUno= new Bombero ("Juan");
const bomberoDos = new Bombero ("Pedro");
const incendio= new Fuego();


/* bomberoUno.setNombre("juan");
bomberoDos.setNombre("pedro");
 */
console.log(bomberoUno.quienApagoElFuego());
console.log(bomberoDos.quienApagoElFuego());


bomberoUno.intentaApagarElFuego(incendio);
bomberoDos.intentaApagarElFuego(incendio);
