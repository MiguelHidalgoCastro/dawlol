
/**
 * 
 */
export class Vista {
    /**
     * 
     * @param {*} div 
     */
    constructor(div) {
        this.div = div;
    }
    /**
     * 
     * @param {*} ver 
     */
    mostrar(ver) {
        if (ver) {
            this.div.style.display = 'block'

        }
        else {
            this.div.style.display = 'none'
        }
    }
}