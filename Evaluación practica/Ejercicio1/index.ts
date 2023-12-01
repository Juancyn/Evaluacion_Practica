import { TiendaDeMusica } from "./tienda";
const tienda1 = TiendaDeMusica.obtener_Instancia();
const tienda2 = TiendaDeMusica.obtener_Instancia();
const tienda3 = TiendaDeMusica.obtener_Instancia();

tienda1.agregar_producto("Guitarra");
tienda2.agregar_producto("Batería");
tienda3.agregar_producto("Teclado");

tienda1.mostrar_productos();
tienda2.mostrar_productos();
tienda3.mostrar_productos();