// Veamos como asignar varibalesa las propiedades de un objeto

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

//const nombre = producto1.nombre;

// Está es la forma más intuitiva, pero es la menos optima

// Existe una forma moderna que llego con ES6, que se llama Object Destructuring, al principio puede ser compleja, pero después se vuelve más natural (practica)

//const { nombre } = producto1
//const { precio } = producto1
const { nombre,precio,disponible} = producto1

console.log(nombre)
console.log(precio)
console.log(disponible)