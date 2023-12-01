import { Producto } from "./sujeto";
 export interface Observador {
    actualizar(producto: Producto): void;
  }