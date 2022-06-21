// Variable creada con CONST, una vez definida, no puede reasignarse su valor

/*
const producto1 = "Monitor";
producto1 = "Tablet";

console.log(producto1)
*/

// En el caso de Objetos es un comportamiento diferente

const producto2 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

console.log(producto2)

producto2.disponible = false
producto2.precio = 200

console.log(producto2)