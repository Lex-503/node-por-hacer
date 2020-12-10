//const arvg = require('yargs').argv;

const arvg = require('./config/yargs').arvg;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
const { actualizar } = require('./por-hacer/por-hacer');

let comando = arvg._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(arvg.descripcion);
        console.log(tarea);
        break

    case 'listar':
        let listado = porHacer.getListado();

        for (let lista of listado) {
            console.log('==========POR HACER=========='.green);
            console.log(lista.descripcion);
            console.log('Tarea: ', lista.completado);
            console.log('============================='.green);
        }

        break

    case 'actualizar':
        let actualizado = porHacer.actualizar(arvg.descripcion, arvg.c);
        console.log(actualizado);
        break

    case 'borrar':
        let borrar = porHacer.borrar(arvg.descripcion);
        console.log('Archivo borrado: ', borrar);
        break

    default:
        console.log('Comando no es reconocido');

}

/* console.log(arvg); */