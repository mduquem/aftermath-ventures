import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Portafolio from "./components/Portafolio/Portafolio";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <header>Header</header>
      <main>
        <section id="Landing">
          <Landing />
        </section>
        <section id="Portafolio">
          <Portafolio />
        </section>
        <section id="Servicios">
          <Servicios />
        </section>
        <section id="Contacto">
          <Contacto />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
