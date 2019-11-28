import React, { useState } from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Portafolio from "./components/Portafolio/Portafolio";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";

function App() {
  const [showDrawer, setShowDrawer] = useState(true);

  const sideDrawerToggle = () => {
    setShowDrawer(showDrawer => {
      return !showDrawer;
    });
  };
  return (
    <div className="App">
      {showDrawer ? (
        <div>
          <Backdrop show clicked={sideDrawerToggle} />
          <SideDrawer clicked={sideDrawerToggle} closed={!showDrawer} />
        </div>
      ) : null}
      <Toolbar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
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
