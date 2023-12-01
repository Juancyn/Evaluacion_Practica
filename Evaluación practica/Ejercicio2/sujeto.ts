import { Observador } from "./observer";
export class Producto {
    private observador: Observador[] = [];
    private precio: number;
  
    constructor(public nombre: string, precio_inicial: number) {
      this.precio = precio_inicial;
    }
  
    // Métodos para suscribir y desuscribir observadores
    suscribir(observador: Observador): void {
      this.observador.push(observador);
    }
  
    desuscribir(observador: Observador): void {
      this.observador = this.observador.filter((o) => o !== observador);
    }
  
    // Método para notificar a los observadores cuando el precio cambia
    notificar(): void {
      for (const observador of this.observador) {
        observador.actualizar(this);
      }
    }
  
    // Método para cambiar el precio y notificar a los observadores
    cambiarPrecio(nuevo_precio: number): void {
      if (nuevo_precio < this.precio) {
        this.precio = nuevo_precio;
        console.log(`El nuevo precio para ${this.nombre}: $${this.precio}`);
        this.notificar();
      }
    }
  
    obtenerPrecio(): number {
      return this.precio;
    }
  }