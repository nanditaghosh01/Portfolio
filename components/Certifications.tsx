export default function Certifications() {
  return (
    <section className="cert-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications &amp; Languages</h2>
          <p className="section-subtitle">
            Verified coursework, technical workshops, and language proficiencies.
          </p>
        </div>

        <div className="cert-grid">
          {/* Left Column: Certifications */}
          <div className="cert-cards-column">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Certificates &amp; Workshops
            </h3>

            {/* Cert 1 */}
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <div className="cert-info">
                <h4>Basics of Python</h4>
                <span className="cert-issuer">Infosys Springboard</span>
                <p style={{ fontSize: "0.85rem", color: "var(--color-silver-muted)", marginTop: "0.25rem" }}>
                  Python syntax, functional programming, and data structures.
                </p>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="cert-info">
                <h4>Web Development &amp; AI Workshop</h4>
                <span className="cert-issuer">Kshitij, IIT Kharagpur</span>
                <p style={{ fontSize: "0.85rem", color: "var(--color-silver-muted)", marginTop: "0.25rem" }}>
                  Modern web architecture and artificial intelligence integration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Languages */}
          <div className="languages-card">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.25rem" }}>
              Languages
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--color-silver-muted)" }}>
              Communication proficiencies.
            </p>

            <div className="lang-list">
              <div className="lang-item">
                <span className="lang-name">Bengali</span>
                <span className="lang-proficiency">Native</span>
              </div>
              <div className="lang-item">
                <span className="lang-name">Hindi</span>
                <span className="lang-proficiency">Fluent</span>
              </div>
              <div className="lang-item">
                <span className="lang-name">English</span>
                <span className="lang-proficiency">Professional Proficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

