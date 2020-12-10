const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

};

const actualizar = (descripcion, completado = true) => {

    cargarDb();
    let index = listadoPorHacer.findIndex(lista => lista.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(lista => lista.descripcion === descripcion);
    let borrado = listadoPorHacer.splice(index, 1);
    guardarDB();
    return borrado;
}

module.exports = { crear, getListado, actualizar, borrar };