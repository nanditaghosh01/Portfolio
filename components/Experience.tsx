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
                Built a practical project-management web tool designed for tracking sprint tasks, logging member hours,
                and monitoring delivery milestones. Focused on creating an intuitive, clean interface with modern React,
                responsive Tailwind styling, and reusable components so team members could quickly log updates.
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

          {/* Experience 2: Adamas Robotics and AI Club */}
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
                Collaborating on hands-on robotics, IoT, and embedded systems hardware prototypes alongside peer
                developers. We spend weekends soldering sensor pins, calibrating ultrasonic modules, and testing
                emergency communication protocols like our Smart Helmet impact system and VACUUM-X robot.
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
