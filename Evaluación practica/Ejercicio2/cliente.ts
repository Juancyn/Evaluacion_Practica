import { Producto } from "./sujeto";
import { Observador } from "./observer";
// Clase ObservadorConcreto (Cliente)
export class Cliente implements Observador {
    constructor(public nombre: string) {}
  
    // Método para recibir la notificación sobre la baja de precio
    actualizar(producto: Producto): void {
      console.log(`Llego una notificación para ${this.nombre}: El precio del producto ${producto.nombre} ha bajado a $${producto.obtenerPrecio()}`);
    }
  }