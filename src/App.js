import React from 'react';
import './App.css';

import { useEffect } from 'react';


function App() {
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  const animatedSections = document.querySelectorAll('.animateOnScroll');
  animatedSections.forEach((section) => observer.observe(section));

  return () => animatedSections.forEach((section) => observer.unobserve(section));
}, []);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projectList = [
    {
      name: "FairRL",
      tech: "Python, RLlib, Deep RL",
      image: process.env.PUBLIC_URL + "/images/FairRL.jpg",
      description: [
        "Trained a Double-DQN model to identify policy bias.",
        "Used Integrated Gradients for explainability.",
        "Reduced demographic-parity gap by 95%.",
        "Balanced reward fairness trade-offs."
      ],
      link: "https://github.com/skveer1902/FairRL.git"
    },
    {
      name: "Student Information Chatbot",
      tech: "FastAPI, GPT-4o, React.js",
      image: process.env.PUBLIC_URL + "/images/Student Chatbot.jpg",
      description: [
        "Built university chatbot to access GPA, tuition, ID cards.",
        "Used GPT-4o API for natural query handling.",
        "Role-based access for students, faculty, admin.",
        "Maintained 99.9% uptime and sub-2s response time."
      ],
      link: "https://github.com/skveer1902/Student-Information-Chatbot.git"
    },
    {
      name: "AILogue",
      tech: "React, FastAPI, LLM",
      image: process.env.PUBLIC_URL + "/images/AILogue.jpg",
      description: [
        "Built an LLM-powered platform for AI-to-AI conversations.",
        "Used GPT + Google Gemini APIs for simulation.",
        "Frontend built with React, backend with FastAPI.",
        "Ideal for research and UI/UX testing."
      ],
      link: "https://github.com/skveer1902/AILogue.git"
    },
    {
      name: "IDS for IoT",
      tech: "ML, CNN, LSTM, PPGO",
      image: process.env.PUBLIC_URL + "/images/IDS for IOT.jpg",
      description: [
        "Trained models on NSL-KDD and UNSW datasets.",
        "Used PPGO to enhance feature selection accuracy.",
        "Real-time intrusion dashboard with alerts.",
        "Achieved 96% detection accuracy."
      ],
      link: "https://github.com/skveer1902/IDS-IOT.git"
    },
        {
      name: "Waste Classification System",
      tech: "Flask, MobileNet, Python",
      image: process.env.PUBLIC_URL + "/images/Waste Classification System.jpg",
      description: [
        "Built an AI model to classify waste as recyclable/non-recyclable.",
        "Achieved 92% accuracy using MobileNet and image augmentation.",
        "Deployed using Flask with real-time prediction UI.",
        "Improved environmental sorting efficiency."
      ],
      link: "https://github.com/skveer1902/Waste-Classification-system.git"
    }

  ];

  return (
    <div>
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

      <section id="overview" className="overviewSection animateOnScroll" >
        <div className="overviewContainer">
          <div className="overviewImage">
            <img src="/profile.jpg" alt="Subhash Krishna Veer Buddhi" />
          </div>
          <div className="overviewContent">
            <h1>SUBHASH KRISHNA VEER BUDDHI</h1>
            <p>
              A passionate and versatile developer with hands-on experience in AI/ML, Software Engineering, Blockchain, and Cybersecurity. I thrive on building intelligent systems that solve real-world problems efficiently. My strengths lie in designing scalable solutions, optimizing performance, and ensuring secure, ethical technology. I’m driven by curiosity, continuous learning, and making meaningful contributions through code.
            </p>
            <div className="cardLinks">
              <a href="https://www.linkedin.com/in/subhash-krishna-veer-buddhi/" target="_blank" rel="noopener noreferrer" className="cardLink">LinkedIn</a>
              <a href="https://github.com/skveer1902/" target="_blank" rel="noopener noreferrer" className="cardLink">GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="educationSection">
        <h2>Education</h2>
        <div className="educationContainer">
          <div className="educationCard">
            <img src="/images/unccLogo.png" alt="UNCC" />
            <h3>Master of Science in Computer Science</h3>
            <p>University of North Carolina at Charlotte</p>
            <p>Dec 2025 | GPA: 3.75/4.0</p>
            <p><strong>Coursework:</strong>Algorithms and Data Structures, Machine learning, Applied AI, Parallel computing, Principles of Information and
Security, Deep Reinforcement Learning, Software Systems Development and Integration, Visual Analytics, Data Security and
Privacy, VAPT, Autoregressive sequence models (Transformers), Bias mitigation, NLP, Front-end and Full-stack Development,
Software Development Lifecycle (SDLC), Product Lifecycle Management.</p>
          </div>
          <div className="educationCard">
            <img src="/images/vnrLogo.png" alt="VNR" />
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>VNR Vignana Jyothi Institute of Engineering & Technology</p>
            <p>May 2023</p>
            <p><strong>Coursework:</strong> DBMS, Computer Networks, Operating Systems, Secure Software Engineering, Ethical Hacking, Cyber Forensics, Web \& Database Security, Security in Internet of Things, Cryptography and Network Security, Malware Analysis, Incident Response, Platforms and System Security, Information Security</p>
          </div>
        </div>
      </section>

      <section id="experience" className="experienceSection animateOnScroll">
        <h2>Experience</h2>
        <div className="experienceContainer">
          <div className="experienceCard">
            <h3>Summer Intern – VAPT Analysis</h3>
            <p>VNRVJIET, Hyderabad, India</p>
            <p>June 2023 – Dec 2023</p>
            <p>Conducted advanced penetration testing and vulnerability assessments to secure critical institutional web assets, driving measurable improvements in security posture and compliance readiness.</p>
            <ul>
              <li>Conducted a comprehensive security audit of VNRVJIET institutional web platforms, focusing on modern web application vulnerabilities and threat vectors.</li>
              <li>Identified & remediated 6 critical vulnerabilities (XSS, CSRF, SQL Injection, Clickjacking, Insecure Deserialization, Broken Authentication), reducing attack surface by 50%.</li>
              <li>Performed in-depth penetration testing using Metasploit, OWASP ZAP, Kali Linux, and custom scripts, enabling early detection of zero-day vulnerabilities.</li>
              <li>Developed automated test scripts to continuously scan for known vulnerabilities, increasing remediation speed by 70% across development cycles.</li>
              <li>Collaborated with cross-functional teams to implement a secure coding framework and DevSecOps practices, ensuring secure software delivery lifecycle.</li>
              <li>Led knowledge transfer sessions for faculty and IT staff on OWASP Top 10 risks and effective mitigation strategies, driving long-term security awareness across the organization.</li>
              <li>Documented comprehensive vulnerability reports and recommendations for management and stakeholders, facilitating data-driven risk prioritization and compliance reporting.</li>
            </ul>

          </div>
        </div>
      </section>

      <section id="projects" className="projectsSection animateOnScroll">
        <h2>Projects</h2>
        <div className="projectsContainer">
          {projectList.map((project, index) => (
            <div key={project.name} className={`projectCard ${project.side}`}>
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.tech}</p>
              <ul>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a className="cardLink" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="skills" className="skillsSection animateOnScroll">
      <h2>Skills</h2>

      <div className="skillsGroup">
        <h4>Programming Languages & Databases</h4>
        <div className="skillsContainer">
          <div className="skillCard">Python</div>
          <div className="skillCard">C</div>
          <div className="skillCard">C++</div>
          <div className="skillCard">C#</div>
          <div className="skillCard">Java</div>
          <div className="skillCard">JavaScript</div>
          <div className="skillCard">SQL</div>
          <div className="skillCard">HTML/CSS</div>
          <div className="skillCard">MySQL</div>
          <div className="skillCard">MongoDB</div>
        </div>
      </div>

      <div className="skillsGroup">
        <h4>Frameworks & Libraries</h4>
        <div className="skillsContainer">
          <div className="skillCard">React.js</div>
          <div className="skillCard">Node.js</div>
          <div className="skillCard">Flask</div>
          <div className="skillCard">FastAPI</div>
          <div className="skillCard">PyTorch</div>
          <div className="skillCard">TensorFlow</div>
          <div className="skillCard">Scikit-Learn</div>
          <div className="skillCard">NumPy</div>
          <div className="skillCard">.NET</div>
        </div>
      </div>

      <div className="skillsGroup">
        <h4>Tools & Paradigms</h4>
        <div className="skillsContainer">
          <div className="skillCard">Git</div>
          <div className="skillCard">GitHub</div>
          <div className="skillCard">VSCode</div>
          <div className="skillCard">Jupyter Notebook</div>
          <div className="skillCard">REST API</div>
          <div className="skillCard">CI/CD Pipelines</div>
          <div className="skillCard">Agile</div>
          <div className="skillCard">Project Management</div>
        </div>
      </div>

      <div className="skillsGroup">
        <h4>Cloud Platforms</h4>
        <div className="skillsContainer">
          <div className="skillCard">AWS</div>
          <div className="skillCard">Lambda</div>
          <div className="skillCard">EC2</div>
          <div className="skillCard">VPC</div>
          <div className="skillCard">Google Cloud</div>
          <div className="skillCard">GPUs</div>
          <div className="skillCard">TPUs</div>
        </div>
      </div>

      <div className="skillsGroup">
        <h4>Soft Skills</h4>
        <div className="skillsContainer">
          <div className="skillCard">Communication</div>
          <div className="skillCard">Collaboration</div>
          <div className="skillCard">Adaptability</div>
          <div className="skillCard">Problem Solving</div>
          <div className="skillCard">Fast Learner</div>
        </div>
      </div>

      <div className="skillsGroup">
        <h4>Security</h4>
        <div className="skillsContainer">
          <div className="skillCard">TCP/IP</div>
          <div className="skillCard">Firewalls</div>
          <div className="skillCard">Vulnerability Assessment</div>
          <div className="skillCard">Ethical Hacking</div>
        </div>
      </div>

      <div className="skillsGroup">
        <h4>Security Tools</h4>
        <div className="skillsContainer">
          <div className="skillCard">Wireshark</div>
          <div className="skillCard">Nmap</div>
          <div className="skillCard">Nessus</div>
          <div className="skillCard">OpenVAS</div>
          <div className="skillCard">Burp Suite</div>
          <div className="skillCard">Metasploit</div>
          <div className="skillCard">GFI Languard</div>
          <div className="skillCard">Retina CS</div>
          <div className="skillCard">Nikto</div>
          <div className="skillCard">MBSA</div>
        </div>
      </div>

      <div className="skillsGroup">
        <h4>Operating Systems</h4>
        <div className="skillsContainer">
          <div className="skillCard">Windows</div>
          <div className="skillCard">Linux</div>
          <div className="skillCard">MacOS</div>
        </div>
      </div>

      <div className="skillsGroup">
        <h4>Microsoft Office</h4>
        <div className="skillsContainer">
          <div className="skillCard">PowerPoint</div>
          <div className="skillCard">Excel</div>
          <div className="skillCard">Word</div>
          <div className="skillCard">Outlook</div>
        </div>
      </div>
    </section>

      <section id="certifications" className="certificationsSection animateOnScroll">
        <h2>Certifications</h2>
        <div className="certificationsContainer">
          <div className="certCard">
            <img src="/images/Deep.jpg" alt="Deep Learning" />
            <div className="certInfo">
              <p>Deep Learning - NPTEL</p>
              <p>Issued: 2023</p>
            </div>
          </div>
          <div className="certCard">
            <img src="/images/cloud.jpg" alt="Cloud Computing" />
            <div className="certInfo">
              <p>Cloud Computing – NPTEL</p>
              <p>Issued: 2022</p>
            </div>
          </div>
          <div className="certCard">
            <img src="/cert3.png" alt="Blockchain Hackfest" />
            <div className="certInfo">
              <p>Blockchain Technologies – IBC Hackfest</p>
              <p>Issued: 2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
