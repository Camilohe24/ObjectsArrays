// Un objeto también puede tener otro objeto adentro de este

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
    medidas:{
        peso:"1KG",
        largo:"50CM",
        alto:"25CM",
        profundo:"5CM",
    }
}

console.log(producto1)
console.log(producto1.medidas)
console.log(producto1.medidas.peso)