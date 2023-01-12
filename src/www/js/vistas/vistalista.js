import { Vista } from "./vista.js";


export class VistaLista extends Vista {

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
    pulsarCrear() {
        this.divListarCRUD.style.display = 'none'
        this.divCrearCRUD.style.display = 'block'
        this.divModificarCRUD.style.display = 'none'
    }

    pulsarModificar() {
        this.divListarCRUD.style.display = 'none'
        this.divCrearCRUD.style.display = 'none'
        this.divModificarCRUD.style.display = 'block'
    }

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