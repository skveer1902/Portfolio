import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/* Sections will go here */}
      <div id="overview"></div>
      <div id="education"></div>
      <div id="experience"></div>
      <div id="projects"></div>
      <div id="skills"></div>
      <div id="certifications"></div>
    </div>
  );
}

export default App;
