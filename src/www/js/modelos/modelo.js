import { Idb } from '../servicio/idb.js';

export class Modelo {
    constructor(controlador) {
        this.controlador = controlador
        this.idb = new Idb()
    }
    insertar(objeto, callback) {
        this.idb.insertar(objeto, callback)
    }
}