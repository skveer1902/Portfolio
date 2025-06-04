// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="navList">
        <li onClick={() => scrollToSection('overview')}>Overview</li>
        <li onClick={() => scrollToSection('education')}>Education</li>
        <li onClick={() => scrollToSection('experience')}>Experience</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('certifications')}>Certifications</li>
      </ul>
    </nav>
  );
};

export default Navbar;
