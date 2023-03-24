
const {registrar, leer} = require('./operaciones') //importa las funcines de otro módulo.


const argumentos  = process.argv.slice(2) //permite pasar argumentos por línea de comando. el slice se ocupa porque los primeros dos índices son irrelevantes para el programa.
const operacion_ingresada = argumentos[0] // captura el primer argumento 

/*valida y ejecuta según opción ingresada*/
if (operacion_ingresada === 'registrar'){
    registrar( //llama a la función y establece los argumentos según sus índices.
        nombre = process.argv[3],
        edad = process.argv[4],
        tipo_de_animal = process.argv[5],
        color = process.argv[6],
        enfermedad = process.argv[7]
    )
} else if (operacion_ingresada === 'leer' ){
    leer() //llama a la función 
} else {
    console.log('Debe ingresar una opcion "ingresar" o "leer"')
}