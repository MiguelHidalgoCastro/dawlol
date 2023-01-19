/**
 * @file Contiene el controlador de la vista crear de coches
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */

import { Vista } from "./vista.js";
import { Coche } from "../modelos/coche.js";
/**
 * Vista para Crear coches
 */
export class VistaFormulario extends Vista {
    /**
    * Constructor
    * @param {Class Controlador} controlador 
    * @param {HTMLElement} div 
    */
    constructor(controlador, div) {
        super(div)
        this.controlador = controlador

        this.btnAceptar = document.getElementById('btnAceptar')
        this.btnAceptar.onclick = this.aceptar.bind(this)

        this.btnVolver = document.getElementById('btnCancelar')
        this.btnVolver.onclick = this.back.bind(this)

        this.btnModificar = document.getElementById('btnModificar')
        this.btnModificar.onclick = this.modificar.bind(this)

        //inputs
        this.marca = document.getElementById('imarca')
        this.modelo = document.getElementById('imodelo')
        this.fecha = document.getElementById('ifecha')
        this.enFab = document.getElementById('enFab')
        this.descripcion = document.getElementById('textDescripcion')

        this.extra1 = document.getElementById('extra1')
        this.extra2 = document.getElementById('extra2')
        this.extra3 = document.getElementById('extra3')
        this.extra4 = document.getElementById('extra4')
        this.extra5 = document.getElementById('extra5')

        //Imagen base64   
        this.imagen = document.getElementById('imagen')
        this.base64 = null

        this.imagen.addEventListener('change', e => {
            const archivo = this.imagen.files[0]
            const lector = new FileReader()
            lector.addEventListener('load', () => {
                this.base64 = lector.result
            })
            lector.readAsDataURL(archivo)
        })
    }

    aceptar() {

        //Validamos los campos
        let mensaje = ''
        let mostrarAlerta = false

        // Expresiones regulares
        let expMarca = /^[A-Z][A-z]{3,20}$/
        if (!expMarca.test(this.marca.value)) {
            if (mensaje == '')
                mensaje = "La marca debe de tener la primera letra mayúscula, sin números y un máximo de 20 caracteres"

            mostrarAlerta = true
        }

        let expModelo = /^[A-Z0-9][A-z0-9]{1,20}$/
        if (!expModelo.test(this.modelo.value)) {
            if (mensaje == '')
                mensaje = "Modelo debe de tener la primera letra mayúscula y mínimo dos caracteres, máximo 20"
            else
                mensaje = mensaje + "\nModelo debe de tener la primera letra mayúscula y mínimo dos caracteres, máximo 20"
            mostrarAlerta = true
        }

        if (this.fecha.value == '') {
            if (mensaje == '')
                mensaje = "Selecciona una fecha valida"
            else
                mensaje = mensaje + "\nSelecciona una fecha valida"
            mostrarAlerta = true
        }
        else {
            //cuando la fecha sea mayor que la de hoy, enfabricación no puede ser si
            //enfab por defecto va a ser si
        }

        //relleno array de extras

        let extras = []

        extras.push(this.extra1.checked)
        extras.push(this.extra2.checked)
        extras.push(this.extra3.checked)
        extras.push(this.extra4.checked)
        extras.push(this.extra5.checked)

        if (this.descripcion.value == '')
            this.descripcion.value = 'No descripción'

        if (mostrarAlerta)
            alert(mensaje)

        else {
            //los empaqueto
            let coche = new Coche(this.marca.value, this.modelo.value, this.fecha.value, this.enFab.value, this.descripcion.value, extras, this.base64)

            // los mando al controlador como un objeto coche
            this.controlador.insertarCoche(coche)

            // borro los campos
            this.borrarCampos()
        }


    }

    borrarCampos() {
        this.marca.value = ''
        this.modelo.value = ''
        this.fecha.value = ''
        this.extra1.checked = false
        this.extra2.checked = false
        this.extra3.checked = false
        this.extra4.checked = false
        this.extra5.checked = false
        this.descripcion.value = ''
        this.base64 = ''
        this.imagen.src = ''

        document.getElementById('divImagenPrevia').style.display = 'none'
        document.getElementById('imagenPrevia').src = ''
    }

    back() {
        this.borrarCampos()
        this.controlador.back()
        this.controlador.recargar()
    }

    cargarCoche(id, coche) {
        this.marca.value = coche.marca
        this.modelo.value = coche.modelo
        this.fecha.value = coche.fechaFabricacion
        this.descripcion.value = coche.descripcion

        this.extra1.checked = coche.extras[0]
        this.extra2.checked = coche.extras[1]
        this.extra3.checked = coche.extras[2]
        this.extra4.checked = coche.extras[3]
        this.extra5.checked = coche.extras[4]

        this.enFab.value = coche.enFabricacion

        document.getElementById('divImagenPrevia').style.display = 'block'
        document.getElementById('imagenPrevia').src = coche.imagen
        document.getElementById('idCoche').value = id
    }

    modificar() {
        let idCoche = document.getElementById('idCoche').value


        //Validamos los campos
        let mensaje = ''
        let mostrarAlerta = false

        // Expresiones regulares
        let expMarca = /^[A-Z][A-z]{3,20}$/
        if (!expMarca.test(this.marca.value)) {
            if (mensaje == '')
                mensaje = "La marca debe de tener la primera letra mayúscula, sin números y un máximo de 20 caracteres"

            mostrarAlerta = true
        }

        let expModelo = /^[A-Z0-9][A-z0-9]{1,20}$/
        if (!expModelo.test(this.modelo.value)) {
            if (mensaje == '')
                mensaje = "Modelo debe de tener la primera letra mayúscula y mínimo dos caracteres, máximo 20"
            else
                mensaje = mensaje + "\nModelo debe de tener la primera letra mayúscula y mínimo dos caracteres, máximo 20"
            mostrarAlerta = true
        }

        if (this.fecha.value == '') {
            if (mensaje == '')
                mensaje = "Selecciona una fecha valida"
            else
                mensaje = mensaje + "\nSelecciona una fecha valida"
            mostrarAlerta = true
        }
        else {
            //cuando la fecha sea mayor que la de hoy, enfabricación no puede ser si
            //enfab por defecto va a ser si
        }

        //relleno array de extras

        let extras = []

        extras.push(this.extra1.checked)
        extras.push(this.extra2.checked)
        extras.push(this.extra3.checked)
        extras.push(this.extra4.checked)
        extras.push(this.extra5.checked)

        if (this.descripcion.value == '')
            this.descripcion.value = 'No descripción'

        if (mostrarAlerta)
            alert(mensaje)

        else {
            //los empaqueto
            let coche = new Coche(this.marca.value, this.modelo.value, this.fecha.value, this.enFab.value, this.descripcion.value, extras, document.getElementById('imagenPrevia').src)

            console.log(coche, idCoche);
            // los mando al controlador como un objeto coche
            this.controlador.insertarCochePorID(idCoche, coche)

            //borro los campos
            //this.borrarCampos()
        }


    }

}