import { Button } from "bootstrap";
import Buttons from "../Helpers/Buttons";
import Forms from "../Helpers/Forms";
import Header from "../Helpers/Header";
import Img from "../Helpers/Img";
import Textos from "../Helpers/Textos";


const Main = () => {
  return (
    <main>
        
      <section className="venta1">
        <Img />
      </section>

      <section className="venta2">
      <Textos/>
      </section>
      <Forms/>
    </main>
  );
};

export default Main;
