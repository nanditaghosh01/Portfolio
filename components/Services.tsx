export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">What I Can Bring to Your Team</h2>
          <p className="section-subtitle">
            I&apos;m early in my engineering journey, which means I bring fresh energy, strong computer science fundamentals,
            and genuine excitement to write clean, maintainable code in React, Next.js, and TypeScript.
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
              Building clean, fast, mobile-first websites and web applications with Next.js (App Router), React 19, TypeScript, and modern Tailwind CSS styling.
            </p>
            <ul className="service-features-list">
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Type-safe Next.js &amp; React component hierarchies</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Modern Tailwind CSS &amp; responsive layouts</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Accessible, smooth user interactions &amp; animations</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Vercel &amp; GitHub automated deployment workflows</span>
              </li>
            </ul>
            <p className="service-footnote">
              Ideal for intern teams, portfolio sites, and frontend feature delivery.
            </p>
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
              Developing structured programming solutions and application logic with a strong focus on algorithmic efficiency, clean code organization, and practical utility.
            </p>
            <ul className="service-features-list">
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>TypeScript, JavaScript, C++, and Python problem-solving</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Core data structures (Trees, Graphs, Queues, Hash Tables)</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>API integration &amp; asynchronous data streaming</span>
              </li>
              <li>
                <span className="service-check-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Object-oriented design &amp; relational database queries</span>
              </li>
            </ul>
            <p className="service-footnote">
              Focused on clear modular code and well-tested algorithmic prototypes.
            </p>
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
              Bridging the gap between software and the physical world with microcontroller programming, sensor integration, and telemetry.
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
                <span>Sensor integration (IMU, Ultrasonic, GPS, Dust)</span>
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
                <span>Low-cost BOM engineering &amp; prototyping</span>
              </li>
            </ul>
            <p className="service-footnote">
              Hands-on physical computing from breadboard to functional build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
