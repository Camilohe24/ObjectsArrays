// La forma correcta y más conveniente de unir dos objetos es con SPREAD OPERATOR o REST OPERATOR

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

const medidas1 = {
    peso:"1KG",
    largo:"40CM",
}

const objetoUnion = { ...producto1, ...medidas1 }

console.log(producto1)
console.log(medidas1)
console.log(objetoUnion)

// Crear 3 objetos diferentes y unirlos con SPREAD OPERATOR

const producto2 = {
    nombre:"Closet",
    precio:300,
    disponible:true,
}

const producto3 = {
    nombre:"Nochero",
    precio:70,
    disponible:true,
}

const medidas2 = {
    peso:"100KG",
    largo:"40CM",
    ancho:"180CM",
}

const medidas3 = {
    peso:"15KG",
    largo:"20CM",
    ancho:"30CM",
}

const objetoUnion1 = { ...producto2, ...medidas2 }
const objetoUnion2 = { ...producto3, ...medidas3 }

console.log(producto2)
console.log(medidas2)
console.log(objetoUnion1)

console.log(producto3)
console.log(medidas3)
console.log(objetoUnion2)
