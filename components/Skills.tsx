export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills &amp; Competencies</span>
          <h2 className="section-title">Technical Toolkit</h2>
          <p className="section-subtitle">
            Core programming languages, modern web frameworks, and developer tools.
          </p>
        </div>

        {/* Everyday Toolkit (Interactive Capsule Showcase) */}
        <div className="tools-capsule-showcase" style={{ marginBottom: "3.5rem" }}>
          <div className="tools-strip-header" style={{ marginBottom: "1.75rem" }}>
            <span className="tools-strip-label">— Everyday Toolkit</span>
            <h3 className="tools-strip-title" style={{ fontSize: "1.65rem" }}>
              The Tools &amp; Technologies I Actually Use
            </h3>
          </div>

          <div className="tools-capsule-grid">
            {/* React.js */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                </svg>
              </div>
              <span className="tool-name">React.js</span>
              <span className="tool-role-tag">Frontend &amp; UI</span>
            </div>

            {/* Next.js */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>N</span>
              </div>
              <span className="tool-name">Next.js</span>
              <span className="tool-role-tag">Full-Stack SSR</span>
            </div>

            {/* TypeScript */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>TS</span>
              </div>
              <span className="tool-name">TypeScript</span>
              <span className="tool-role-tag">Type Safety</span>
            </div>

            {/* JavaScript */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>JS</span>
              </div>
              <span className="tool-name">JavaScript</span>
              <span className="tool-role-tag">Modern ES6+</span>
            </div>

            {/* Tailwind CSS */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
              </div>
              <span className="tool-name">Tailwind CSS</span>
              <span className="tool-role-tag">Modern Styling</span>
            </div>

            {/* C++ */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>C++</span>
              </div>
              <span className="tool-name">C++</span>
              <span className="tool-role-tag">Algorithms</span>
            </div>

            {/* Python */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path>
                </svg>
              </div>
              <span className="tool-name">Python</span>
              <span className="tool-role-tag">AI &amp; ML</span>
            </div>

            {/* Git & GitHub */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                  <line x1="6" y1="9" x2="6" y2="21"></line>
                </svg>
              </div>
              <span className="tool-name">Git &amp; GitHub</span>
              <span className="tool-role-tag">Version Control</span>
            </div>

            {/* VS Code */}
            <div className="tool-capsule-card">
              <div className="tool-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <span className="tool-name">VS Code</span>
              <span className="tool-role-tag">Environment</span>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {/* Category 1: Web Development */}
          <div className="skill-category-card">
            <div className="skill-header">
              <div className="skill-header-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="skill-header-text">
                <h3>Modern Web Development</h3>
                <span>Full-stack &amp; UI frameworks</span>
              </div>
            </div>
            <div className="skill-pills-wrap">
              <span className="skill-tag">Next.js (App Router)</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">HTML5 &amp; CSS3</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">REST APIs</span>
            </div>
          </div>

          {/* Category 2: Programming Languages */}
          <div className="skill-category-card">
            <div className="skill-header">
              <div className="skill-header-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="skill-header-text">
                <h3>Core Languages</h3>
                <span>Syntax &amp; computational logic</span>
              </div>
            </div>
            <div className="skill-pills-wrap">
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Bash &amp; Shell</span>
            </div>
          </div>

          {/* Category 3: Computer Science & AI */}
          <div className="skill-category-card">
            <div className="skill-header">
              <div className="skill-header-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path>
                </svg>
              </div>
              <div className="skill-header-text">
                <h3>Computer Science &amp; AI</h3>
                <span>Algorithms, systems &amp; data</span>
              </div>
            </div>
            <div className="skill-pills-wrap">
              <span className="skill-tag">Data Structures &amp; Algorithms</span>
              <span className="skill-tag">Object-Oriented Programming (OOP)</span>
              <span className="skill-tag">Database Design &amp; SQL</span>
              <span className="skill-tag">Machine Learning Fundamentals</span>
              <span className="skill-tag">Deep Learning Concepts</span>
              <span className="skill-tag">Data Preprocessing</span>
            </div>
          </div>

          {/* Category 4: IoT and Hardware */}
          <div className="skill-category-card">
            <div className="skill-header">
              <div className="skill-header-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                </svg>
              </div>
              <div className="skill-header-text">
                <h3>IoT &amp; Physical Computing</h3>
                <span>Embedded hardware &amp; robotics</span>
              </div>
            </div>
            <div className="skill-pills-wrap">
              <span className="skill-tag">Arduino</span>
              <span className="skill-tag">Raspberry Pi</span>
              <span className="skill-tag">Microcontroller Programming</span>
              <span className="skill-tag">Sensor Integration</span>
              <span className="skill-tag">GPIO Interfacing</span>
              <span className="skill-tag">Embedded C/C++</span>
              <span className="skill-tag">Hardware Telemetry</span>
            </div>
          </div>

          {/* Category 5: Tools & Environments */}
          <div className="skill-category-card" style={{ gridColumn: "1 / -1" }}>
            <div className="skill-header">
              <div className="skill-header-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <div className="skill-header-text">
                <h3>Tools, Workflows &amp; Environments</h3>
                <span>Developer tooling, version control, and design</span>
              </div>
            </div>
            <div className="skill-pills-wrap">
              <span className="skill-tag">Next.js &amp; Vercel</span>
              <span className="skill-tag">Git &amp; GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Postman &amp; API Testing</span>
              <span className="skill-tag">Arduino IDE</span>
              <span className="skill-tag">Canva &amp; Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
