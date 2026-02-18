import React, { useState, useEffect } from 'react';

export default function Portfolio() {
     const [activeSection, setActiveSection] = useState('home');
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          setIsVisible(true);
     }, []);

     const skills = {
          frontend: ['React', 'HTML', 'CSS', 'JavaScript'],
          backend: ['Node.js', 'Express', 'Supabase', 'Python', 'C++', 'C'],
          ai: ['Whisper', 'Faster Whisper', 'Pyannote', 'STT', 'Translation Models'],
          databases: ['PostgreSQL', 'MySQL'],
     };

     const certifications = [
          'Programming with JavaScript',
          'Version Control',
          'Introduction to Frontend Development',
          'Full Stack Development'
     ];

     const scrollToSection = (id) => {
          setActiveSection(id);
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
     };

     return (
          <>
               <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a);
          color: white;
          overflow-x: hidden;
          width: 100%;
        }

        /* ── NAV ─────────────────────────────────────────── */
        .nav {
          position: sticky;
          top: 0;
          width: 100%;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          z-index: 50;
          border-bottom: 1px solid rgba(168, 85, 247, 0.2);
        }

        .nav-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1rem;
          text-transform: capitalize;
          transition: color 0.3s;
          white-space: nowrap;
        }

        .nav-button:hover,
        .nav-button.active {
          color: #c084fc;
        }

        /* ── SHARED SECTION WRAPPER ──────────────────────── */
        .section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          width: 100%;
          scroll-margin-top: 65px;
        }

        /* All inner containers share the same max-width and are full-width on mobile */
        .section-container,
        .section-container-wide,
        .contact-content {
          width: 100%;
          max-width: 72rem;
        }

        /* ── HERO ────────────────────────────────────────── */
        .hero-content {
          text-align: center;
          opacity: 0;
          transform: translateY(2.5rem);
          animation: fadeInUp 1s forwards;
          width: 100%;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-size: 3.75rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #c084fc, #f9a8d4, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #d1d5db;
          margin-bottom: 2rem;
        }

        .hero-description {
          font-size: 1.125rem;
          color: #9ca3af;
          margin-bottom: 3rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .btn-primary {
          padding: 0.75rem 2rem;
          background: linear-gradient(to right, #a855f7, #ec4899);
          border: none;
          border-radius: 9999px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
        }

        .btn-secondary {
          padding: 0.75rem 2rem;
          background: transparent;
          border: 2px solid #a855f7;
          border-radius: 9999px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(168, 85, 247, 0.1);
        }

        .chevron {
          margin: 0 auto;
          width: 32px;
          height: 32px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* ── SECTION TITLES ──────────────────────────────── */
        .section-title {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .icon {
          width: 32px;
          height: 32px;
          color: #c084fc;
          flex-shrink: 0;
        }

        /* ── ABOUT CARD ──────────────────────────────────── */
        .card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(4px);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(168, 85, 247, 0.2);
        }

        .card p {
          font-size: 1.125rem;
          color: #d1d5db;
          margin-bottom: 1.5rem;
          line-height: 1.75;
        }

        .certifications-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #c084fc;
          margin-top: 2rem;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.75rem;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(51, 65, 85, 0.5);
          padding: 0.75rem;
          border-radius: 0.5rem;
        }

        .cert-icon {
          width: 20px;
          height: 20px;
          color: #c084fc;
          flex-shrink: 0;
        }

        /* ── PROJECT CARD ────────────────────────────────── */
        .project-card {
          background: linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(88, 28, 135, 0.2));
          backdrop-filter: blur(4px);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(168, 85, 247, 0.3);
          transition: border-color 0.3s;
        }

        .project-card:hover {
          border-color: rgba(168, 85, 247, 0.5);
        }

        .project-title {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #c084fc;
        }

        .project-description {
          color: #d1d5db;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }

        .features-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #f9a8d4;
        }

        .features-list {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #d1d5db;
          margin-bottom: 0.5rem;
        }

        .bullet {
          color: #c084fc;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(168, 85, 247, 0.2);
          border-radius: 9999px;
          font-size: 0.875rem;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        /* ── SKILLS ──────────────────────────────────────── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(4px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(168, 85, 247, 0.2);
          transition: border-color 0.3s;
        }

        .skill-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
        }

        .skill-category {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #c084fc;
          text-transform: capitalize;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(168, 85, 247, 0.3);
          transition: transform 0.2s;
        }

        .skill-tag:hover {
          transform: scale(1.05);
        }

        /* ── CONTACT ─────────────────────────────────────── */
        .contact-content {
          text-align: center;
        }

        .contact-title {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .contact-description {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 3rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: #1e293b;
          border-radius: 50%;
          transition: all 0.3s;
          text-decoration: none;
          color: white;
        }

        .social-link:hover {
          background: rgba(168, 85, 247, 0.2);
          transform: scale(1.1);
        }

        .contact-card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(4px);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(168, 85, 247, 0.2);
        }

        .contact-card p {
          font-size: 1.125rem;
          color: #d1d5db;
          margin-top: 0.5rem;
        }

        /* ── FOOTER ──────────────────────────────────────── */
        footer {
          width: 100%;
          background: rgba(15, 23, 42, 0.5);
          border-top: 1px solid rgba(168, 85, 247, 0.2);
          padding: 2rem 1.5rem;
          text-align: center;
          color: #9ca3af;
        }

        /* ── MOBILE ──────────────────────────────────────── */
        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .nav-links {
            gap: 0.6rem;
          }

          .nav-button {
            font-size: 0.8rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .project-title {
            font-size: 1.4rem;
          }

          .card,
          .project-card,
          .skill-card,
          .contact-card {
            padding: 1.25rem;
          }
        }
      `}</style>

               {/* Navigation */}
               <nav className="nav">
                    <div className="nav-container">
                         <h1 className="logo">Portfolio</h1>
                         <div className="nav-links">
                              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                                   <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className={`nav-button ${activeSection === section ? 'active' : ''}`}
                                   >
                                        {section}
                                   </button>
                              ))}
                         </div>
                    </div>
               </nav>

               {/* Hero Section */}
               <div id="home" className="section">
                    <div className="hero-content">
                         <h1 className="hero-title">Hello, I'm Bilal a Full Stack Developer</h1>
                         <p className="hero-subtitle">Full Stack Developer | AI Enthusiast | Turning Ideas Into Reality</p>
                         <p className="hero-description">
                              Full-Stack developer with hands on experience in building intelligent web applications
                         </p>
                         <div className="hero-buttons">
                              <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                                   View My Work
                              </button>
                              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                                   Contact Me
                              </button>
                         </div>
                         <div className="chevron">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                   <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                         </div>
                    </div>
               </div>

               {/* About Section */}
               <div id="about" className="section">
                    <div className="section-container">
                         <h2 className="section-title">
                              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                   <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                   <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                              </svg>
                              About Me
                         </h2>
                         <div className="card">
                              <p>
                                   Motivated full-stack developer with hands-on experience in building PERN and MERN stack applications, integrating backend APIs, and deploying websites with authentication workflows. My passion lies at the intersection of web development and artificial intelligence, where I create innovative solutions that push the boundaries of what's possible.
                              </p>
                              <p>
                                   Through Meta's certification programs, I've built a strong foundation in modern web development, mastering the full stack from frontend interfaces to backend systems. My expertise extends to AI applications, particularly in speech-to-text systems and real-time translation technologies.
                              </p>
                              <div>
                                   <h3 className="certifications-title">Meta Certifications</h3>
                                   <div className="certifications-grid">
                                        {certifications.map((cert, idx) => (
                                             <div key={idx} className="cert-item">
                                                  <svg className="cert-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                       <circle cx="12" cy="8" r="7"></circle>
                                                       <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                                  </svg>
                                                  <span>{cert}</span>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Projects Section */}
               <div id="projects" className="section">
                    <div className="section-container-wide">
                         <h2 className="section-title">
                              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                   <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                   <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                              </svg>
                              Featured Project
                         </h2>
                         <div className="project-card">
                              <h3 className="project-title">Automated Trial Log</h3>
                              <p className="project-description">
                                   A comprehensive web-based courtroom transcription and case management system featuring AI capabilities for real-time speech processing and analysis.
                              </p>
                              <div>
                                   <h4 className="features-title">Key Features</h4>
                                   <ul className="features-list">
                                        <li>
                                             <span className="bullet">▹</span>
                                             <span><strong>Real-time Speech-to-Text:</strong> Utilizing Faster Whisper for accurate transcription</span>
                                        </li>
                                        <li>
                                             <span className="bullet">▹</span>
                                             <span><strong>Language Translation:</strong> Instant translation capabilities for global accessibility</span>
                                        </li>
                                        <li>
                                             <span className="bullet">▹</span>
                                             <span><strong>Speaker Diarization:</strong> Advanced Pyannote models for identifying and separating multiple speakers</span>
                                        </li>
                                        <li>
                                             <span className="bullet">▹</span>
                                             <span><strong>Case Management:</strong> Role based system for organizing and tracking cases efficiently</span>
                                        </li>
                                        <li>
                                             <span className="bullet">▹</span>
                                             <span><strong>User Authentication:</strong> Controlled login system with role permissions for structured case access</span>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <h4 className="features-title">Technologies Used</h4>
                                   <div className="tech-tags">
                                        {['React', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Faster Whisper', 'Pyannote', 'Supabase'].map((tech) => (
                                             <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Skills Section */}
               <div id="skills" className="section">
                    <div className="section-container-wide">
                         <h2 className="section-title">
                              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                   <polyline points="16 18 22 12 16 6"></polyline>
                                   <polyline points="8 6 2 12 8 18"></polyline>
                              </svg>
                              Technical Skills
                         </h2>
                         <div className="skills-grid">
                              {Object.entries(skills).map(([category, items]) => (
                                   <div key={category} className="skill-card">
                                        <h3 className="skill-category">
                                             {category === 'ai' ? 'AI & Machine Learning' : category}
                                        </h3>
                                        <div className="skill-tags">
                                             {items.map((skill) => (
                                                  <span key={skill} className="skill-tag">{skill}</span>
                                             ))}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>

               {/* Contact Section */}
               <div id="contact" className="section">
                    <div className="contact-content">
                         <h2 className="contact-title">Let's Connect</h2>
                         <p className="contact-description">
                              I'm always open to discussing new projects, opportunities, or collaborations.
                         </p>
                         <div className="social-links">
                              <a href="https://github.com/Bilal0876?tab=repositories" className="social-link">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                   </svg>
                              </a>
                              <a href="https://www.linkedin.com/in/bilal-khadim-b2a359325" className="social-link">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                   </svg>
                              </a>
                              <a href="https://mail.google.com/mail/?view=cm&to=m.bilal0876@gmail.com" className="social-link">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                   </svg>
                              </a>
                         </div>
                         <div className="contact-card">
                              <p><strong>Location:</strong> Lahore, Punjab, PK</p>
                         </div>
                    </div>
               </div>

               {/* Footer */}
               <footer>
                    <p>© 2026 Portfolio. Built with React & CSS</p>
               </footer>
          </>
     );
}
