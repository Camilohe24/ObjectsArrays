// Los objetos son una de las dos piezas claves en JS.
// Sirven para unir información con diferente tipo, pero que tienen algo en común.
// Por ejemplo

const nombreProducto = "Monitor de 21 pulgadas"
const precio = 130;
const disponible = true;

// Podemos reemplazar las variables, creando un objeto para toda está información

// Object literal

/*
const producto1 = {
    // Esto es lo que se conoce como OBJECT LIETRAL
}

// Luego podemos poner conjuntos de LLAVE:VALOR (KEY:VALUE)

const producto1 = {
    nombre: // Esto se le llama llave de objeto (Key)
}
     
// Pero las llaves deben de tener un valor

const producto1 = {
    nombre:"Monitor de 21 pulgadas" // Si lo notan dentro de los objetos los valores se asignan con :, no con igual
}
*/

// Si desean agregar más propiedades, solamente deben colocar comás, para seprar.

const producto1 = {
    nombre:"Monitor de 21 pulgadas",
    precio:130,
    disponible:true, // Está última coma, no es obligatoria colocarlar, pero es una buena practica
}

console.log(producto1)