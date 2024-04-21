import Header from "./components/Header";
import "./App.css";
import MyCard from "./components/MyCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <div className="contenedor">
        <MyCard
          url={
            "https://images.pexels.com/photos/3877900/pexels-photo-3877900.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          nombre={"Bartolo"}
          descripcion={
            "lleno de energia y listo para jugar.¡Dale a bartolo lo que se merece! estando contigo y toda tu familia feliz!  "
          }
          color={"success"}
          texto={"Husky"}
        />
        <MyCard
          url={
            "https://images.pexels.com/photos/3763312/pexels-photo-3763312.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          nombre={"Messi"}
          descripcion={
            "Es jugueton, amigable y se lleva bien con niños y otros animales ¡Haz de Messi parte de tu familia hoy mismo!"
          }
          color={"primary"}
          texto={"Bobtail"}
        />
        <MyCard
          url={
            "https://images.pexels.com/photos/594687/pexels-photo-594687.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          nombre={"Gohan"}
          descripcion={
            "Un perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
          }
          color={"danger"}
          texto={"Shar pei"}
        />
        <MyCard
          url={
            "https://images.pexels.com/photos/3860306/pexels-photo-3860306.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          nombre={"Princesa"}
          descripcion={
            "Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a princesa a encontrar su final feliz!"
          }
          color={"warning"}
          texto={"Beagle"}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
