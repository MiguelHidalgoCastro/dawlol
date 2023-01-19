import { Idb } from '../servicios/idb.js';

export class Modelo {
    constructor(controlador) {
        this.controlador = controlador
        this.idb = new Idb()
    }
    insertar(objeto, callback) {
        this.idb.insertar(objeto, callback)
    }
    buscar(marca, callback) {
        this.idb.buscar(marca, callback)
    }

    borrar(id, callback) {
        this.idb.borrar(id, callback)
    }
    buscarPorID(id, callback) {
        this.idb.buscarPorID(id, callback)
    }
    insertarCochePorID(id, coche, callback) {
        this.idb.insertarCochePorID(id, coche, callback)
    }
}