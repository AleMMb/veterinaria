const fs = require('fs')

//toma el json citas lo trasforma en array (de objetos en este caso), "pushea" una nueva cita y lo sobreescribe pasándolo a json nuevamente.
const registrar = (nombre, edad, tipo_de_animal, color, enfermedad) => {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err 
        const citas = JSON.parse(data)

        citas.push({ nombre, edad, tipo_de_animal, color, enfermedad })

        fs.writeFile('citas.json', JSON.stringify(citas), (err) => {
            if (err) throw err
            console.log('La cita fue registrada exitosamente')
        })
    })
}

//leer el citas.json
const leer = () => {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err
        const citas = JSON.parse(data)
        console.log(citas)
    })

}

module.exports = { registrar, leer }
