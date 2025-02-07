import './navBar.css';
import React from 'react';

const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-100 fixed-top">
      <div className="container-sm">
        <div className="navbar-container d-flex justify-content-center py-2">
          <ul className="nav-links nav gap-5">
            <li onClick={() => scrollToSection(homeRef)}>Home</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li onClick={() => scrollToSection(aboutRef)}>About</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
