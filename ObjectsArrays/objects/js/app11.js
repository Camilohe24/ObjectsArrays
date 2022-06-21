// 3 Metodos, OBJECT.KEYS, OBJECT VALUES y OBJECT.ENTRIES

//OBJECT.KEYS - Nos devuelve un Array con la Keys

const producto1 = {
    nombre:"Monitor 21 pulgadas",
    precio:130,
    disponible:true,
}

console.log(Object.keys(producto1))

// OBJECT VALUES - Nos devuelve un Array con valores

console.log(Object.values(producto1))

// OBJECT.ENTRIES - Nos devuelve un Array con las parejas llave valor

console.log(Object.entries(producto1))