"Use strict"

// Existe otro metodo similiar que se llama SEAL, a diferencia de FREEZE, que no permite agregar, modificar, ni eliminar propiedades

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

Object.seal(producto1);

// SEAL permite reasignar, pero no borrar ni agregar nuevas propiedades

producto1.nombre = "tablet"

console.log(producto1)

console.log(Object.isSealed(producto1))