export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">What I Can Bring to Your Team</h2>
          <p className="section-subtitle">
            Core engineering capabilities across modern web development, software logic, and hardware prototyping.
          </p>
        </div>

        <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {/* Service 1: Modern Web & Full-Stack Development */}
          <div className="service-card">
            <div className="card-icon-circle">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="service-title">Modern Web &amp; Frontend</h3>
            <p className="service-lead">
              Responsive, mobile-first web applications built with Next.js, React, and modern Tailwind CSS.
            </p>
            <ul className="service-features-list">
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Type-safe Next.js &amp; React architecture</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Responsive Tailwind CSS layouts</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Interactive UI animations &amp; state management</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Automated deployment workflows (Vercel &amp; Git)</span>
              </li>
            </ul>
          </div>

          {/* Service 2: Software Development & Algorithms */}
          <div className="service-card">
            <div className="card-icon-circle">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="service-title">Software &amp; Algorithms</h3>
            <p className="service-lead">
              Application logic and computational solutions with a focus on algorithmic efficiency and clean structure.
            </p>
            <ul className="service-features-list">
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Problem-solving in C++, Python, and TypeScript</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Core data structures &amp; algorithmic optimization</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>RESTful API integration &amp; data processing</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Object-oriented design &amp; relational SQL</span>
              </li>
            </ul>
          </div>

          {/* Service 3: IoT & Hardware Prototyping */}
          <div className="service-card">
            <div className="card-icon-circle">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
              </svg>
            </div>
            <h3 className="service-title">IoT &amp; Hardware Prototyping</h3>
            <p className="service-lead">
              Embedded systems and microcontroller solutions bridging software with physical hardware.
            </p>
            <ul className="service-features-list">
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Arduino &amp; microcontroller firmware in C/C++</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Sensor integration (IMU, Ultrasonic, GPS)</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Motor drivers, relays &amp; actuator circuits</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Rapid breadboard prototyping &amp; telemetry</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
