/**
 * @file Contiene el controlador de la vista lista de coches
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */
import { Vista } from "./vista.js";
/**
 * Vista de la lista de coches
 */
export class VistaLista extends Vista {
    /**
   * Constructor
   * @param {Class Controlador} controlador 
   * @param {HTMLElement} div 
   */
    constructor(controlador, div) {
        super(div)
        this.controlador = controlador

        /*Containers*/
        this.divListarCRUD = document.getElementById('vistaListaCRUD')
        this.divCrearCRUD = document.getElementById('vistaCrearCRUD')
        this.divModificarCRUD = document.getElementById('vistaModificarCRUD')


        /*Localizo botones*/
        this.btnCrear = document.getElementById('addCoche')
        this.btnCrear.onclick = this.pulsarCrear.bind(this)

        this.btnModificar = document.getElementById('modCoche')
        this.btnModificar.onclick = this.pulsarModificar.bind(this)

        this.btnModificar = document.getElementById('delCoche')
        this.btnModificar.onclick = this.pulsarBorrar.bind(this)

        /*Primer coche*/

        this.coche = document.getElementById('coche1')
    }

    /*eventos de pulsar */
    /**
     * Le pido al controlador que muestre el formulario de crear
     */
    pulsarCrear() {
        this.controlador.mostrarFormularioCrear()
    }
    /**
     *  Le pido al controlador que muestre el formulario de modificar
     */
    pulsarModificar() {
        this.controlador.mostrarFormularioModificar()
    }
    /**
     * Le pido al controlador que me borre el objeto
     */
    pulsarBorrar() {
        let resultado = window.confirm('Estas seguro?');
        if (resultado === true) {
            window.alert('Okay, coche borrado.');
            this.coche.style.display = 'none'
        } else {
            window.alert('Cancelado');
        }
    }
}