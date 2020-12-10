const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    desc: 'Marcar como completado o pendiente la tarea',
    alias: 'c'
};

const arvg = require('yargs').command('crear', 'Crear una nueva tarea por hacer', {
    descripcion
}).command('actualizar', 'Actualizar el estado de una tarea', {
    descripcion,
    completado
}).command('borrar', 'Borrar un Archivo existente', {
    descripcion
}).help().argv;

module.exports = {
    arvg
};