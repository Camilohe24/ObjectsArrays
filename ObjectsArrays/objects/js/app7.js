// Existen 2 metodos para blindar objetos, pero ambos metodos deben tener como primera instrucción.

"use strict";

const producto1 = {
    nombre:"monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

console.log(producto1)

// Object method o Metodo de objetos
// Llamamos la palabra reservada Object, sintanxis de punto, metodo y parantesis de objeto.

Object.freeze(producto1)

//producto1.disponible = false;

console.log(producto1)

//freeze no permite que hagamos modificiaciones a un objeto, tampoco borrar propiedades, ni asignar nuevas

console.log( Object.isFrozen(producto1) )