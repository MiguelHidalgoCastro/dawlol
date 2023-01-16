/**
 * @file Contiene el modelo de la clase coche
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */
export class Coche {

    constructor(marca, modelo, fecha, enFab, descripcion, extras, imagen) {
        //this.idMarcaModelo; //para la segunda versión
        this.marca = marca
        this.modelo = modelo
        this.fechaFabricacion = fecha
        this.descripcion = descripcion
        this.enFabricacion = enFab
        this.extras = extras
        this.imagen = imagen
    }


    
}