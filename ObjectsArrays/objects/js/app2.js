// Veamos como acceder a las propiedades de un objeto

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

// Supongamos que quiero acceder al precio, entonces para esto, usamos las sintaxis de punto

console.log(producto1.precio)
console.log(producto1.nombre)
console.log(producto1.disponible)

// Existe otra, no tan común, pero que en algun momento la vamos a usar

console.log(producto1["precio"])

// Añadir propiedades a un objecto, también utilizamos las sintaxis de punto

producto1.imagen = "imagen.jpg"

console.log(producto1)

// Finalmente, para eliminar propiedades

delete producto1.disponible 

console.log(producto1)