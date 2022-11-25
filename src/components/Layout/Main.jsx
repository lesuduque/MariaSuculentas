import { Button } from "bootstrap";
import FormularioClientes from "../Helpers/FormularioClientes";
import FormularioProductos from "../Helpers/FormularioProductos";
import FormularioProveedores from "../Helpers/FormularioProveedores";
import Header from "../Helpers/Header";
import Img1 from "../Helpers/Img1";
import Img2 from "../Helpers/Img2";

import Texto1 from "../Helpers/Texto1";
import Texto2 from "../Helpers/Texto2";



const Main = () => {
  return (
    <main>
        
        <section className="ventas">
        
            <section className="venta1">
                <Img1/>
                <Texto1/>
            </section>
            
              <section className="venta2">
                <Img2/>
                <Texto2/>
            </section>
        </section>

        <section className="control">
          <FormularioClientes/>
          <FormularioProveedores/>
          <FormularioProductos/>
        </section>
  
    </main>
  );
};

export default Main;
