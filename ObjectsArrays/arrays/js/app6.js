// Para adicionar elementos a un Array es mejor usar la sintaxis moderna de SPREAD OPERATOR, pero necesitamos una variable auxiliar que a la final es mucho mejor.

const carrito = [];

const producto1 = {
    nombre:"Monitor",
    precio:200,
}

const producto2 = {
    nombre:"tablet 8 pulgadas",
    precio:100,
}

const producto3 = {
    nombre:"parlantes BT",
    precio:270,
}

// Para añadir elementos a un Array con SPREAD OPERATOR

let carritoCopia = [...carrito,producto1]
carritoCopia = [...carritoCopia,producto2]
carritoCopia = [producto3,...carritoCopia]

console.log(carritoCopia)