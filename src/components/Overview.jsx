import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <section id="overview" className="overviewSection">
      <div className="overviewContainer">
        <div className="overviewImage">
          <img src="/profile.jpg" alt="Profile" />
        </div>
        <div className="overviewContent">
          <h1>Subhash Krishna Veer Buddhi</h1>
          <p>
            A passionate and versatile developer with hands-on experience in AI/ML,
            Software Engineering, Blockchain, and Cybersecurity. I enjoy building intelligent systems, solving complex problems, and contributing to impactful technology.
          </p>
          <div className="cardLinks">
            <a href="https://www.linkedin.com/in/subhash-krishna-veer-buddhi/" target="_blank" rel="noopener noreferrer" className="cardLink">
              LinkedIn
            </a>
            <a href="https://github.com/skveer1902/" target="_blank" rel="noopener noreferrer" className="cardLink">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
