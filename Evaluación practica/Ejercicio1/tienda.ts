export class TiendaDeMusica {
    private static instancia: TiendaDeMusica | null = null;
    private lista: string[] = [];
  
    constructor() {}
  
    public static obtener_Instancia(): TiendaDeMusica {
      if (!TiendaDeMusica.instancia) {
        TiendaDeMusica.instancia = new TiendaDeMusica();
      }
      return TiendaDeMusica.instancia;
    }
  
    public agregar_producto(producto: string): void {
      this.lista.push(producto);
    }
  
    public mostrar_productos(): void { 
      console.log("Los productos en la Tienda de música son:");
      this.lista.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
      });
    }
  }
  
