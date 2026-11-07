export default function Certifications() {
  return (
    <section className="cert-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications &amp; Achievements</h2>
          <p className="section-subtitle">
            Industry credentials, technical workshops, hackathons, and language proficiencies.
          </p>
        </div>

        <div className="cert-grid">
          {/* Left Column: Certifications */}
          <div className="cert-cards-column">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Licenses &amp; Certifications
            </h3>

            {/* Cert 1: IBM Agile Explorer */}
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="cert-info">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap" }}>
                  <h4 style={{ margin: 0 }}>Agile Explorer</h4>
                  <a
                    href="https://www.credly.com/badges/63160850-a562-4271-b5c7-80829c3b4c78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-tag"
                    style={{ fontSize: "0.75rem", textDecoration: "none", cursor: "pointer", color: "var(--color-primary)" }}
                  >
                    Credly Verified &nearr;
                  </a>
                </div>
                <span className="cert-issuer">IBM SkillsBuild &bull; Issued Aug 2026</span>
                <p style={{ fontSize: "0.85rem", color: "var(--color-silver-muted)", marginTop: "0.25rem" }}>
                  Agile methodologies, sprint cadence, adaptive workflow design, and iterative team delivery.
                </p>
              </div>
            </div>

            {/* Cert 2: Gen AI Tools */}
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className="cert-info">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap" }}>
                  <h4 style={{ margin: 0 }}>Gen AI Tools</h4>
                  <a
                    href="/assets/docs/certificates/GenAITools_nasscom.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-tag"
                    style={{ fontSize: "0.75rem", textDecoration: "none", cursor: "pointer", color: "var(--color-primary)" }}
                  >
                    View Cert &nearr;
                  </a>
                </div>
                <span className="cert-issuer">Futureskills Prime &bull; NASSCOM IT-ITeS SSC</span>
                <p style={{ fontSize: "0.85rem", color: "var(--color-silver-muted)", marginTop: "0.25rem" }}>
                  Competency standards for generative AI tooling, prompt construction, and smart AI workflow integration (ID: 26180873171).
                </p>
              </div>
            </div>

            {/* Cert 3: Web Development & AI Workshop */}
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="cert-info">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap" }}>
                  <h4 style={{ margin: 0 }}>Web Development &amp; AI Workshop</h4>
                  <a
                    href="/assets/docs/certificates/KTJCertificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-tag"
                    style={{ fontSize: "0.75rem", textDecoration: "none", cursor: "pointer", color: "var(--color-primary)" }}
                  >
                    View Cert &nearr;
                  </a>
                </div>
                <span className="cert-issuer">Kshitij, IIT Kharagpur &bull; June – July 2026</span>
                <p style={{ fontSize: "0.85rem", color: "var(--color-silver-muted)", marginTop: "0.25rem" }}>
                  Intensive technical workshop exploring modern web architecture and artificial intelligence integration.
                </p>
              </div>
            </div>

            {/* Cert 4: Basics of Python */}
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
                  Core Python programming constructs, functional modules, and computational logic.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Honors, Competitions & Languages */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Competitions Card */}
            <div className="languages-card">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                Competitions &amp; Hackathons
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-silver-muted)", marginBottom: "1rem" }}>
                Active tech-fest participation and innovation challenges.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {/* Competition 1: ADINOVA */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <div>
                    <h5 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0, color: "var(--color-white)" }}>Model Making Competition</h5>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-primary)" }}>ADINOVA 2025 &bull; Adamas University</span>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-silver-muted)", margin: "0.15rem 0 0 0" }}>Supported by BIRAC &amp; Institution's Innovation Council.</p>
                  </div>
                  <a href="/assets/docs/certificates/MMC_2025_Certificate.png" target="_blank" rel="noopener noreferrer" className="skill-tag" style={{ fontSize: "0.72rem", textDecoration: "none", color: "var(--color-primary)", flexShrink: 0 }}>Certificate &nearr;</a>
                </div>

                {/* Competition 2: IgniteX */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <div>
                    <h5 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0, color: "var(--color-white)" }}>IgniteX 2.0 Tech-Fest</h5>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-primary)" }}>IMI Kolkata &bull; RP-Sanjiv Goenka Group</span>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-silver-muted)", margin: "0.15rem 0 0 0" }}>Flagship tech-fest events and engineering problem solving.</p>
                  </div>
                  <a href="/assets/docs/certificates/IgniteX_Certificate.jpeg" target="_blank" rel="noopener noreferrer" className="skill-tag" style={{ fontSize: "0.72rem", textDecoration: "none", color: "var(--color-primary)", flexShrink: 0 }}>Certificate &nearr;</a>
                </div>

                {/* Competition 3: Rekhi Happithon */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <div>
                    <h5 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0, color: "var(--color-white)" }}>Rekhi HappiThon @Adamas</h5>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-primary)" }}>Center of Excellence for Science of Happiness</span>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-silver-muted)", margin: "0.15rem 0 0 0" }}>Innovation sprint for collaborative well-being and tech builds.</p>
                  </div>
                  <a href="/assets/docs/certificates/Rekhi_HappiThon_Certificate.jpeg" target="_blank" rel="noopener noreferrer" className="skill-tag" style={{ fontSize: "0.72rem", textDecoration: "none", color: "var(--color-primary)", flexShrink: 0 }}>Certificate &nearr;</a>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="languages-card">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                Languages
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-silver-muted)", marginBottom: "0.75rem" }}>
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
      </div>
    </section>
  );
}
