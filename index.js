/* 4. Importar y exportar módulos en Node Js (1 Punto) */
const { registrar, leer } = require('./operaciones.js')


/*5. Utilizar argumentos escritos por línea de comandos (2 Punto) */
const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

if (operacion === "registrar") {
    const nombre = argumentos[1]
    const edad = argumentos[2]
    const animal = argumentos[3]
    const color = argumentos[4]
    const enfermedad = argumentos[5]
    console.log("Operacion registar")
    registrar(nombre, edad, animal, color, enfermedad)
} else if (operacion === "leer") {
    console.log("Operacion leer")

    leer()
} else {
    console.log("Operacion invalida")
}



