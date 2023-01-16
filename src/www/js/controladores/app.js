/**
 * @file Contiene el controlador principal de la app
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */
import { VistaLista } from "../vistas/vistalista.js"
import { VistaCrear } from "../vistas/vistacrear.js"
import { Modelo } from "../modelos/modelo.js"
/**
 * Controlador principal de la app
 */
class Controlador {
    /**
     * Constructor de la clase
     * Carga el método iniciar al cargar la página
     */
    constructor() {
        this.modelo = new Modelo(this)
        window.onload = this.iniciar.bind(this)
    }
    /**
     * Inicia la aplicación
     * Muestra la vista de la lista de coches y, carga las vistas y el modelo
     */
    iniciar() {
        //aqui cargaría el modelo

        /*Containers de los divs*/
        this.divListaCRUD = document.getElementById('vistaListaCRUD')
        this.divCrearCRUD = document.getElementById('vistaCrearCRUD')
        //this.divModificarCRUD = document.getElementById('vistaModificarCRUD')

        this.vistaListaCoches = new VistaLista(this, this.divListaCRUD)
        this.vistaCrearCoches = new VistaCrear(this, this.divCrearCRUD)
        //this.VistaModificarCoches = new VistaModificar(this, this.divModificarCRUD)

        //this.vistaListaCoches.mostrar(true)
        // mientras programo el crear
        this.vistaCrearCoches.mostrar(true)

    }
    /**
     * Muestra la lista de coches
     */
    mostrarIndex() {
        this.vistaListaCoches.mostrar(true)
        this.vistaCrearCoches.mostrar(false)
        //this.VistaModificarCoches.mostrar(false)
    }
    /**
     * Muestra el formulario de crear
     */
    mostrarFormularioCrear() {
        this.vistaListaCoches.mostrar(false)
        this.vistaCrearCoches.mostrar(true)
        //this.VistaModificarCoches.mostrar(false)
    }


    insertarCoche(coche) {
        this.modelo.insertar(coche, this.insertarCoche.bind(this))
    }
}

const app = new Controlador()