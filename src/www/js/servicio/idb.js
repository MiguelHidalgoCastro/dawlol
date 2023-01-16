
export class Idb {
    constructor() {
        const peticion = indexedDB.open('bdnueva', 2)
        peticion.onerror = evento => { throw 'Error al conectar indexedDB' }
        peticion.onupgradeneeded = evento => {
            this.conexion = evento.target.result
            this.crear()
        }
        peticion.onsuccess = evento => { this.conexion = evento.target.result }
    }
    crear() {
        const tabla = this.conexion.createObjectStore('tabla1', { autoIncrement: true })
    }
    insertar(objeto, callback) {
        const transaccion = this.conexion.transaction(['tabla1'], 'readwrite')
        transaccion.onerror = evento => { throw 'Error al insertar' }
        const objectStore = transaccion.objectStore('tabla1')
        const peticion = objectStore.add(objeto)
        peticion.onerror = (evento) => { console.log('No se ha podido agregar el coche a la bbdd'); }
        peticion.onsuccess = callback
    }
}
