export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Hands-on Experience &amp; Club Life</h2>
          <p className="section-subtitle">
            Internships, team builds, and collaborative engineering projects.
          </p>
        </div>

        <div className="timeline">
          {/* Experience 1: Summer Intern */}
          <div className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Summer Intern</h3>
                  <div className="timeline-org">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>EssProm Academy</span>
                  </div>
                </div>
                <span className="timeline-date-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>June 2026 – October 2026</span>
                </span>
              </div>
              <p className="timeline-desc">
                Built a project management web tool for sprint tracking and milestone monitoring using React, TypeScript, and Tailwind CSS.
              </p>
              <div className="timeline-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Project Management Tool</span>
                <span className="skill-tag">UI Design</span>
              </div>
            </div>
          </div>

          {/* Experience 2: 3D Printing Internship */}
          <div className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">3D Printing Internship</h3>
                  <div className="timeline-org">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <span>Adamas Robotics &amp; AI Club</span>
                  </div>
                </div>
                <span className="timeline-date-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Jun 2026 – Jul 2026</span>
                </span>
              </div>
              <p className="timeline-desc">
                Practical 3D printing and additive manufacturing for robotics prototyping, fabricating custom structural enclosures, sensor brackets, and precision hardware assemblies.
              </p>
              <div className="timeline-tags">
                <span className="skill-tag">3D Printing</span>
                <span className="skill-tag">Additive Manufacturing</span>
                <span className="skill-tag">Robotics Prototyping</span>
                <span className="skill-tag">Hardware Design</span>
              </div>
            </div>
          </div>

          {/* Experience 3: Adamas Robotics and AI Club */}
          <div className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Active Member</h3>
                  <div className="timeline-org">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Adamas Robotics and AI Club</span>
                  </div>
                </div>
                <span className="timeline-date-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>February 2025 – Present</span>
                </span>
              </div>
              <p className="timeline-desc">
                Collaborating on IoT and embedded systems prototypes, including crash-detection telemetry (Smart Helmet) and autonomous navigation (VACUUM-X).
              </p>
              <div className="timeline-tags">
                <span className="skill-tag">IoT Hardware</span>
                <span className="skill-tag">Robotics Prototyping</span>
                <span className="skill-tag">Microcontroller C/C++</span>
                <span className="skill-tag">Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
