// Como hacer destructuring en objetos anidados

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
    medidas:{
        peso:"1KG",
        largo:"50CM",
        alto:"25CM",
        profundo:"5CM",
    },
}

const { precio,disponible,medidas:{ peso,largo,alto,profundo } } = producto1;

//console.log(medidas)
console.log(peso)

// Crear un objeto con su nombre, apellido, edad y hobbies (otro objeto) y desestructurar, de manera individual cada llave

const persona1 = {
    nombre:"Camilo",
    apellido:"Hernandez Echeverri",
    edad:24,
    hobbies:{
        deporte:"futbol",
        casa:"leer",
        trabajo:"programar",
    },
    hijos:false,
    mascotas:false,
}

const { nombre,apellido,edad,hobbies:{ deporte,casa,trabajo },hijos,mascotas } = persona1;

console.log(nombre)
console.log(hijos)
