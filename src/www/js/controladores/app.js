/**
 * @file Contiene el controlador principal de la app
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */
import { VistaLista } from "../vistas/vistalista.js"
import { VistaFormulario } from "../vistas/vistaformulario.js"
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
        this.divFormulario = document.getElementById('vistaFormulario')


        this.vistaListaCoches = new VistaLista(this, this.divListaCRUD)
        this.vistaFormulario = new VistaFormulario(this, this.divFormulario)


        /*Para ocultar titulo y botones del formulario */
        this.tituloCrear = document.getElementById('tituloCrear')
        this.tituloModificar = document.getElementById('tituloModificar')
        this.btnAceptar = document.getElementById('btnAceptar')
        this.btnModificar = document.getElementById('btnModificar')
        this.imagenNav = document.getElementById('imgNav')
        this.imagenNav.onclick = this.recargar.bind(this)

        //Cargamos la vista principal
        this.mostrarIndex()

        //Cargamos la lista inicial
        this.buscar()

    }
    recargar() {
        this.iniciar()
    }
    /**
     * Muestra la lista de coches
     */
    mostrarIndex() {
        this.vistaListaCoches.mostrar(true)
        this.vistaFormulario.mostrar(false)
    }
    back() {
        this.mostrarIndex()
    }

    /**
     * Muestra el formulario de crear
     */
    mostrarFormularioCrear() {
        this.vistaListaCoches.mostrar(false)
        this.vistaFormulario.mostrar(true)
        this.btnModificar.style.display = 'none'
        this.tituloModificar.style.display = 'none'
        this.btnAceptar.style.display = 'inline'
        this.tituloCrear.style.display = 'block'
        //this.VistaModificarCoches.mostrar(false)
    }

    mostrarFormularioModificar() {
        this.vistaListaCoches.mostrar(false)
        this.vistaFormulario.mostrar(true)
        this.btnModificar.style.display = 'inline'
        this.tituloModificar.style.display = 'block'
        this.btnAceptar.style.display = 'none'
        this.tituloCrear.style.display = 'none'

    }

    insertarCoche(coche) {
        this.modelo.insertar(coche, this.insertarCocheOK.bind(this))
    }

    insertarCocheOK() {
        //feedback al usuario
        alert("coche insertado correctamente");
        //Volvería a la vista lista
        this.vistaListaCoches.mostrar(true)
        this.vistaFormulario.mostrar(false)
        this.recargar()
    }

    insertarCochePorID(id, coche) {
        this.modelo.insertarCochePorID(id, coche, this.insertarCochePorIDOK.bind(this))
    }

    insertarCochePorIDOK() {
        alert('coche modificado correctamente')
        this.vistaListaCoches.mostrar(true)
        this.vistaFormulario.mostrar(false)
        this.recargar()
    }

    buscar(marca) {
        this.modelo.buscar(marca, this.buscarOK.bind(this))
    }

    buscarOK(lista) {
        this.vistaListaCoches.cargar(lista)
    }

    borrar(id) {
        this.modelo.borrar(id, this.borrarOK.bind(this))
    }
    borrarOK() {
        alert('borrado')
        this.recargar()
    }

    buscarPorID(id) {
        this.modelo.buscarPorID(id, this.buscarPorIDOK.bind(this, id))
    }
    buscarPorIDOK(id, coche) {
        this.mostrarFormularioModificar()
        this.vistaFormulario.cargarCoche(id, coche)
    }
}

const app = new Controlador()