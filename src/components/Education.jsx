import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="educationSection">
      <h2>Education</h2>
      <div className="educationContainer">
        <div className="educationCard">
          <h3>Master of Science in Computer Science</h3>
          <p>University of North Carolina at Charlotte</p>
          <p>2023 – 2025 (Expected)</p>
          <p>Specialization in AI, ML, and Cybersecurity</p>
        </div>
        <div className="educationCard">
          <h3>Bachelor of Technology in Computer Science</h3>
          <p>VNR Vignana Jyothi Institute of Engineering & Technology</p>
          <p>2019 – 2023</p>
          <p>Focused on Cybersecurity and Software Development</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
