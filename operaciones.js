const fs = require('fs')


function registrar(nombre, edad, animal, color, enfermedad) {
    const paciente = [
        { nombre: nombre ,
         edad: edad ,
         animal: animal ,
         color: color ,
         enfermedad: enfermedad  }
        ]

        fs.appendFileSync('paciente.json', JSON.stringify(paciente) )
    return "ok";
  }

function leer (){
    const pacientes = fs.readFileSync('paciente.json', 'utf8')
    console.log(pacientes)
}


  module.exports = { registrar, leer }