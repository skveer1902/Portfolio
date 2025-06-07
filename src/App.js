import React, { useEffect } from 'react';
import './App.css';

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

    const animatedElements = document.querySelectorAll('.animateOnScroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
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
      <div className="mainContainer">
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

      {/* === Overview === */}
      <section id="overview" className="overviewSection">
        <div className="overviewContainer">
          <div className="overviewImage animateOnScroll">
            <img src="/profile.jpg" alt="Subhash Krishna Veer Buddhi" />
          </div>
          <div className="overviewContent animateOnScroll">
            <h1>SUBHASH KRISHNA VEER BUDDHI</h1>
            <p>
              I’m a software engineer with practical experience in AI, machine learning, and reinforcement learning. I’ve built and deployed projects that apply these technologies to real-world problems like bias mitigation, intelligent automation, and cybersecurity. Alongside my AI work, I have a strong foundation in core cybersecurity concepts and hands-on experience with tools like Metasploit, OWASP ZAP, and Kali Linux. I enjoy working at the intersection of AI and security to create smart, reliable software.
            </p>
            <div className="cardLinks">
              <a href="https://www.linkedin.com/in/subhash-krishna-veer-buddhi/" target="_blank" rel="noopener noreferrer" className="cardLink">LinkedIn</a>
              <a href="https://github.com/skveer1902/" target="_blank" rel="noopener noreferrer" className="cardLink">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* === Education === */}
      <section id="education" className="educationSection">
        <h2 className="animateOnScroll">Education</h2>
        <div className="educationContainer">
          <div className="educationCard animateOnScroll">
            <img src="/images/unccLogo.png" alt="UNCC" />
            <h3>Master of Science in Computer Science</h3>
            <p>University of North Carolina at Charlotte</p>
            <p>Dec 2025 | GPA: 3.75/4.0</p>
            <p><strong>Coursework:</strong> Algorithms and Data Structures, Machine learning, Applied AI, Parallel computing, Principles of Information and Security, Deep Reinforcement Learning, Software Systems Development and Integration, Visual Analytics, Data Security and Privacy, VAPT, Autoregressive sequence models (Transformers), Bias mitigation, NLP, Front-end and Full-stack Development, Software Development Lifecycle (SDLC), Product Lifecycle Management.</p>
          </div>
          <div className="educationCard animateOnScroll">
            <img src="/images/vnrLogo.png" alt="VNR" />
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>VNR Vignana Jyothi Institute of Engineering & Technology</p>
            <p>May 2023</p>
            <p><strong>Coursework:</strong> DBMS, Computer Networks, Operating Systems, Secure Software Engineering, Ethical Hacking, Cyber Forensics, Web & Database Security, Security in Internet of Things, Cryptography and Network Security, Malware Analysis, Incident Response, Platforms and System Security, Information Security</p>
          </div>
        </div>
      </section>

      {/* === Experience === */}
      <section id="experience" className="experienceSection">
        <h2 className="animateOnScroll">Experience</h2>
        <div className="experienceContainer">
          <div className="experienceCard animateOnScroll">
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
      {/* === Projects === */}
      <section id="projects" className="projectsSection">
        <h2 className="animateOnScroll">Projects</h2>
        <div className="projectsContainer">
          {projectList.map((project, index) => (
            <div key={project.name} className="projectCard animateOnScroll">
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

      {/* === Skills === */}
      <section id="skills" className="skillsSection">
        <h2 className="animateOnScroll">Skills</h2>

        {/* Example for 1 skill group — you can repeat for all your groups */}
        {[
          { title: 'Programming Languages & Databases', items: ['Python', 'C', 'C++', 'C#', 'Java', 'JavaScript', 'SQL', 'HTML/CSS', 'MySQL', 'MongoDB'] },
          { title: 'Frameworks & Libraries', items: ['React.js', 'Node.js', 'Flask', 'FastAPI', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'NumPy', '.NET'] },
          { title: 'Tools & Paradigms', items: ['Git', 'GitHub', 'VSCode', 'Jupyter Notebook', 'REST API', 'CI/CD Pipelines', 'Agile', 'Project Management'] },
          { title: 'Cloud Platforms', items: ['AWS', 'Lambda', 'EC2', 'VPC', 'Google Cloud', 'GPUs', 'TPUs'] },
          { title: 'Soft Skills', items: ['Communication', 'Collaboration', 'Adaptability', 'Problem Solving', 'Fast Learner'] },
          { title: 'Security', items: ['TCP/IP', 'Firewalls', 'Vulnerability Assessment', 'Ethical Hacking'] },
          { title: 'Security Tools', items: ['Wireshark', 'Nmap', 'Nessus', 'OpenVAS', 'Burp Suite', 'Metasploit', 'GFI Languard', 'Retina CS', 'Nikto', 'MBSA'] },
          { title: 'Operating Systems', items: ['Windows', 'Linux', 'MacOS'] },
          { title: 'Microsoft Office', items: ['PowerPoint', 'Excel', 'Word', 'Outlook'] }
        ].map((group, index) => (
          <div key={index} className="skillsGroup animateOnScroll">
            <h4>{group.title}</h4>
            <div className="skillsContainer">
              {group.items.map((item, idx) => (
                <div key={idx} className="skillCard">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* === Certifications === */}
      <section id="certifications" className="certificationsSection">
        <h2 className="animateOnScroll">Certifications</h2>
        <div className="certificationsContainer">
          {[
            { img: '/images/Deep.jpg', title: 'Deep Learning - NPTEL', issued: '2023' },
            { img: '/images/cloud.jpg', title: 'Cloud Computing – NPTEL', issued: '2022' },
            { img: '/images/ibc.jpg', title: 'Blockchain Technologies – IBC Hackfest', issued: '2022' },
            { img: '/images/wipro.jpg', title: 'JAVA Full stack - Wipro', issued: '2023' }
          ].map((cert, index) => (
            <div key={index} className="certCard animateOnScroll">
              <img src={cert.img} alt={cert.title} />
              <div className="certInfo">
                <p>{cert.title}</p>
                <p>Issued: {cert.issued}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}

export default App;
