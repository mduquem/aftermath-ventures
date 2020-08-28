import React, { useState } from 'react';
import { RevealGlobalStyles } from 'react-genie';
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Backdrop from './components/UI/Backdrop/Backdrop';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  const sideDrawerToggle = () => {
    setShowDrawer((showDrawer) => {
      return !showDrawer;
    });
  };

  return (
    <div className="App">
      <RevealGlobalStyles />
      {showDrawer ? (
        <div>
          <Backdrop show clicked={sideDrawerToggle} />
          <SideDrawer clicked={sideDrawerToggle} closed={!showDrawer} />
        </div>
      ) : null}
      <Toolbar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <main>
        <Main />
      </main>
      {/* <footer>
            <Footer />
         </footer> */}
    </div>
  );
}

export default App;
