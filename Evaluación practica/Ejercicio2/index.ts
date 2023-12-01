import { Producto } from "./sujeto";
import { Cliente } from "./cliente";
// Aplicación de consola
const producto1 = new Producto("Patineta", 100);
const producto2 = new Producto("Bongos", 150);

const cliente1 = new Cliente("Roberto Briones");
const cliente2 = new Cliente("María Tijeras");

// Suscribir clientes a productos
producto1.suscribir(cliente1);
producto2.suscribir(cliente2);

// Cambiar precios (simulación de bajada de precios)
producto1.cambiarPrecio(90);
producto2.cambiarPrecio(160);

// Desuscribir cliente1 de producto1
producto1.desuscribir(cliente1);

// Cambiar precios nuevamente
producto1.cambiarPrecio(85);
producto2.cambiarPrecio(120);
