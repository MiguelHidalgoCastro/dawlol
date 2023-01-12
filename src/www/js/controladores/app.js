/**
 * @file Contiene el controlador principal de la app
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */
import { VistaLista } from "../vistas/vistalista.js"
/**
 * Controlador principal de la app
 */
class Controlador {
    /**
     * Constructor de la clase
     * Carga el método iniciar al cargar la página
     */
    constructor() {
        window.onload = this.iniciar.bind(this)
        this.divListaCRUD = document.getElementById('vistaListaCRUD')
        this.divCrearCRUD = document.getElementById('vistaCrearCRUD')
        this.divModificarCRUD = document.getElementById('vistaModificarCRUD')

        //Mas adelante cambiar por sus métodos de mostrar
        this.divCrearCRUD.style.display = 'none'
        this.divModificarCRUD.style.display = 'none'
    }
    /**
     * Inicia la aplicación
     * Carga las vistas y el modelo
     */
    iniciar() {
        //aqui cargaría el modelo
        this.vistaListaCoches = new VistaLista(this, this.divListaCRUD)
    }



}

const app = new Controlador()