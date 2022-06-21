// Supongamos que tenemos una tienda online con varios productosy un carrito de compras

// Supongamos los siguientes productos

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

// Para añadir al final del Array, usamos el metodo PUSH

carrito.push(producto1)
carrito.push(producto2)

// Para añadir al inicio del Array, usamos el metodo UNSHIFT

carrito.unshift(producto3)

console.log(carrito)