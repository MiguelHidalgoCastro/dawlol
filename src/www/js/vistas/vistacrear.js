import { Vista } from "./vista.js";

export class VistaCrear extends Vista {

    constructor(controlador, div) {
        super(div)
        this.controlador = controlador

    }

}