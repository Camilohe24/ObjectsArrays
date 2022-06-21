// Como unir 2 objetos

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

const medidas1 = {
    peso:"1KG",
    largo:"40CM",
}

// La forma antigua de unir objetos es un OBJECT METHOD ASSIGN

const resultado = Object.assign(producto1,medidas1)

console.log(producto1)
console.log(medidas1)
console.log(resultado)

// ASSIGN modifica el primero objeto, no es recomedable usarlo.