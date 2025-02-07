import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useRef } from 'react';
import HomeScreen from '@pages/homeScreen/homeScreen';
import Navbar from '@components/navBar/navBar';
import AboutScreen from './pages/aboutScreen/aboutScreen';
import ProjectsScreen from './pages/projectsScreen/projectsScreen';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [isCardsHidden, setCardsHidden] = useState(false);

  return (
    <>
      {isCardsHidden && (
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      )}
      <div className="screenContainer">
        <HomeScreen
          ref={homeRef}
          isCardsHidden={isCardsHidden}
          setCardsHidden={setCardsHidden}
        />
        <ProjectsScreen ref={projectsRef} />
        <AboutScreen ref={aboutRef} />
      </div>
    </>
  );
};

export default App;
