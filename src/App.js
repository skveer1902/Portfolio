import React from 'react';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Education from './components/Education';


function App() {
  return (
    <div>
      <Navbar />
      <Overview />
      <Education />

      <div id="education"></div>
      <div id="experience"></div>
      <div id="projects"></div>
      <div id="skills"></div>
      <div id="certifications"></div>
    </div>
  );
}

export default App;
