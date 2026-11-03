export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Driven by Curiosity, Grounded in Engineering</h2>
          <p className="section-subtitle">
            Computer Science undergraduate focused on modern web technologies and practical software engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Biography and Interests Column */}
          <div className="about-left">
            <div className="about-lead-box">
              <p className="about-bio-text" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                Third-year Computer Science student at Adamas University (8.98 CGPA) building full-stack web applications and interactive hardware prototypes. I focus on clean code, responsive user interfaces, and dependable software solutions.
              </p>
            </div>

            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
              Core Focus Areas
            </h3>

            <div className="interest-grid">
              <div className="interest-item">
                <div className="interest-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <span>Full-Stack Web (React &amp; Next.js)</span>
              </div>

              <div className="interest-item">
                <div className="interest-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <span>Algorithms &amp; Data Structures</span>
              </div>

              <div className="interest-item">
                <div className="interest-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <span>AI &amp; Machine Learning</span>
              </div>

              <div className="interest-item">
                <div className="interest-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                  </svg>
                </div>
                <span>IoT &amp; Embedded Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights */}
          <div className="about-right">
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.25rem" }}>
              Engineering Approach
            </h3>

            <div className="highlights-stack">
              <div className="highlight-card">
                <div className="highlight-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Practical Execution</h4>
                  <p>
                    Shipping responsive React &amp; Next.js applications with type-safe TypeScript, modern Tailwind CSS, and live Vercel deployments.
                  </p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Algorithmic Problem Solving</h4>
                  <p>
                    Solving computational logic and data structure challenges in C++ and Python with an emphasis on clarity and performance.
                  </p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Quality &amp; Detail</h4>
                  <p>
                    Prioritizing clean project architecture, readable git commits, accessible markup, and smooth user interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
