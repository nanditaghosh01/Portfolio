export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Path</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Where I&apos;m studying and the engineering foundations I&apos;m building on.
          </p>
        </div>

        <div className="education-grid">
          {/* Ongoing Degree: Visually Prominent Card */}
          <div className="education-featured-card">
            <div>
              <div className="edu-badge-row">
                <span className="pill-badge">
                  <span className="status-dot"></span>
                  Currently Pursuing
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-primary)" }}>
                  2024 – 2028
                </span>
              </div>

              <h3 className="edu-degree">B.Tech in Computer Science and Engineering</h3>

              <div className="edu-institution">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <span>Adamas University, Barasat</span>
              </div>

              <div className="edu-meta">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: "inline-block", verticalAlign: "-2px", marginRight: "0.35rem" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Barasat, North 24 Parganas, West Bengal</span>
              </div>

              {/* CGPA Highlight Box */}
              <div className="edu-cgpa-box">
                <span className="cgpa-score">8.98</span>
                <div className="cgpa-label">
                  Approximate Cumulative Grade Point Average (CGPA)
                  <span style={{ display: "block", fontSize: "0.78rem", color: "var(--color-primary)", fontWeight: 600, marginTop: "0.2rem" }}>
                    Sem 1: 8.45 &bull; Sem 2: 9.15 &bull; Sem 3: 8.87 &bull; Sem 4: 9.45 SGPA
                  </span>
                </div>
              </div>
            </div>

            <ul className="edu-details-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Core Computer Science: Data Structures, Algorithms, Object-Oriented Programming, and Database Systems.</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Modern Web &amp; Systems: Full-stack Next.js and React architectures, TypeScript, IoT sensor telemetry, and machine learning fundamentals.</span>
              </li>
            </ul>
          </div>

          {/* Secondary & Higher Secondary Stack */}
          <div className="education-secondary-stack">
            {/* Class 12 */}
            <div className="edu-card-compact">
              <span className="edu-compact-year">Year: 2024</span>
              <h3 className="edu-compact-title">Higher Secondary Education (Class 12)</h3>
              <p className="edu-compact-board">
                West Bengal Council of Higher Secondary Education (WBCHSE)
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-silver-muted)", marginTop: "0.5rem" }}>
                Completed science stream with Mathematics, Physics, Chemistry, and Computer Applications—which solidified my passion for coding.
              </p>
            </div>

            {/* Class 10 */}
            <div className="edu-card-compact">
              <span className="edu-compact-year">Year: 2022</span>
              <h3 className="edu-compact-title">Secondary Education (Class 10)</h3>
              <p className="edu-compact-board">
                West Bengal Board of Secondary Education (WBBSE)
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-silver-muted)", marginTop: "0.5rem" }}>
                Completed with distinction in Mathematics and Science, building the analytical mindset that drives my engineering work today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

