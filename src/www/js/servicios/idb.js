/**
 * @file Contiene los métodos para operar con IndexedDB
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */


/**
 * Clase para IndexedDB
 */
export class Idb {
    /**
     * Creamos la bbdd si no existe, y la guarda en this.conexion
     */
    constructor() {
        const peticion = indexedDB.open('bdnueva', 2)
        peticion.onerror = evento => { throw 'Error al conectar indexedDB' }
        peticion.onupgradeneeded = evento => {
            this.conexion = evento.target.result
            this.crear()
        }
        peticion.onsuccess = evento => { this.conexion = evento.target.result }
    }
    /**
     * Función que crea la tabla para los datos 
     */
    crear() {
        const tabla = this.conexion.createObjectStore('tabla1', { autoIncrement: true })
    }
    /**
     * Añado a la base de datos 'objeto'. Si todo va bien, avisa al modelo por el callback. Si algo sale mal, muestra por consola el error
     * @param {Object} objeto 
     * @param {Function} callback 
     */
    insertar(objeto, callback) {
        const peticion = this.conexion.transaction(['tabla1'], 'readwrite').objectStore('tabla1').add(objeto)
        peticion.onerror = (evento) => { console.log('No se ha podido agregar el coche a la bbdd'); }
        peticion.onsuccess = (evento) => {
            objeto.id = peticion.result
            console.log(objeto.id)
            callback()
        }
    }
    /**
     * Funcion que modifica un elemento existente de la bbdd.  Avisa al modelo por el callback
     * @param {int} id 
     * @param {Object} coche 
     * @param {Function} callback 
     */
    insertarCochePorID(id, coche, callback) {
        const transaction = this.conexion.transaction(['tabla1'], 'readwrite')
        const peticion = transaction.objectStore('tabla1').put(coche, parseInt(id))
        transaction.oncomplete = () => {
            callback()
        }
    }
    /**
     * Función que busca en la base de datos los objetos que tienen la maraca que viene en queBusco
     * Si no viene datos en queBusco, obtiene todos objetos de la bbdd
     * Lo que encuentra (un array de objetos) lo devuelve por el callback al modelo
     * @param {String} queBusco 
     * @param {Function} callback 
     */
    buscar(queBusco, callback) {
        const objectStore = this.conexion.transaction(['tabla1'], 'readwrite').objectStore('tabla1')
        const cursor1 = objectStore.openCursor()

        cursor1.onerror = (evento) => {
            console.log('No se han cargado los datos');
        }
        this.listaBusqueda = []
        if (queBusco != null) {
            let marca = queBusco
            marca = marca.toLowerCase()


            cursor1.onsuccess = (evento) => {
                const cursor = evento.target.result;

                if (cursor) {
                    let comparacion = cursor.value.marca.toLowerCase();
                    let regEx = new RegExp(marca);

                    if (comparacion.match(regEx)) {
                        let c = cursor.value
                        c.id = cursor.key
                        this.listaBusqueda.push(c);

                    }
                    cursor.continue();
                }
                else {
                    callback(this.listaBusqueda)
                }
            }
        }
        else {
            cursor1.onsuccess = (evento) => {
                const cursor = evento.target.result;

                if (cursor) {
                    let c = cursor.value
                    c.id = cursor.key
                    this.listaBusqueda.push(c);
                    cursor.continue();
                }
                else {
                    callback(this.listaBusqueda)
                }
            }
        }
    }
    /**
     * Función que borra de la base de datos un objeto por id. Avisa al modelo por el callback
     * @param {int} id 
     * @param {Function} callback 
     */
    borrar(id, callback) {
        const transaction = this.conexion.transaction(['tabla1'], 'readwrite')
        const peticion = transaction.objectStore('tabla1').delete(id)
        transaction.oncomplete = () => {
            callback()
        }

    }
    /**
     * Función que busca un objeto en la bbdd cuyo key sea igual que el id.  
     * Avisa al modelo por el callback y le manda el objeto encontrado
     * @param {int} id 
     * @param {Function} callback 
     */
    buscarPorID(id, callback) {
        const objectStore = this.conexion.transaction(['tabla1'], 'readwrite').objectStore('tabla1')
        const cursor1 = objectStore.openCursor()

        cursor1.onerror = (evento) => {
            console.log('No se han cargado los datos');
        }

        cursor1.onsuccess = (evento) => {
            const cursor = evento.target.result;

            if (cursor.key != id) {
                cursor.continue();
            }
            else {
                callback(cursor.value)
            }
        }
    }

}


