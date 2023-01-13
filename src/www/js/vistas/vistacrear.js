/**
 * @file Contiene el controlador de la vista crear de coches
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */

import { Vista } from "./vista.js";
/**
 * Vista para Crear coches
 */
export class VistaCrear extends Vista {
    /**
    * Constructor
    * @param {Class Controlador} controlador 
    * @param {HTMLElement} div 
    */
    constructor(controlador, div) {
        super(div)
        this.controlador = controlador

    }

}