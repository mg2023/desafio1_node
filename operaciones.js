const fs = require('fs')

/*Crear archivos con el módulo File System (3 Puntos)*/
function registrar(nombre, edad, animal, color, enfermedad) {
    if (nombre, edad, animal, color, enfermedad) {
        const templateCitas = {
            nombre, edad, animal, color, enfermedad
        }

        try {
            const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
            citas.push(templateCitas)
            fs.writeFileSync('citas.json', JSON.stringify(citas))
            console.log('La cita ha sido agregada para ' + nombre)
        } catch (error) {
            const crearArreglo = '[]'
            fs.writeFileSync('citas.json', crearArreglo)
            console.log('archivo creado')
            const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
            citas.push(templateCitas)
            fs.writeFileSync('citas.json', JSON.stringify(citas))
            console.log('La cita ha sido agregada para ' + nombre)
        }
    } else {
        console.log('faltan parametros')
    }
}

/* Leer archivos con el módulo File System (2 Puntos) */
function leer() {
    try {
        const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
        console.log(citas)
    }
    catch (error) {
        console.log("No hay citas registradas")
    }
}


module.exports = { registrar, leer }