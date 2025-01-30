import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useRef } from 'react';
import HomeScreen from '@pages/homeScreen/homeScreen';
import Navbar from '@components/navBar/navBar';
import AboutScreen from './pages/aboutScreen/aboutScreen';

const App = () => {
  // Nav-refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const [isCardsHidden, setCardsHidden] = useState(false);

  return (
    <>
      {isCardsHidden && (
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
      )}
      <div className="screenContainer">
        <HomeScreen
          ref={homeRef}
          isCardsHidden={isCardsHidden}
          setCardsHidden={setCardsHidden}
        />
        <AboutScreen ref={aboutRef} />
      </div>
    </>
  );
};

export default App;
