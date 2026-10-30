export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Driven by Curiosity, Grounded in Engineering</h2>
          <p className="section-subtitle">
            A candid look into my journey, what gets me excited to code, and how I approach engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Biography and Interests Column */}
          <div className="about-left">
            <div className="about-lead-box">
              <p className="about-bio-text">
                &ldquo;I fell in love with programming the moment I realized a few lines of code could solve a real puzzle
                right on my screen. Currently, I&apos;m a third-year Computer Science student at Adamas University in
                Barasat, West Bengal (maintaining an ~8.98 CGPA). I split my days between coursework, late-night coding
                sessions with React, Next.js, and TypeScript, and robotics club builds.&rdquo;
              </p>
              <p className="about-personal-note">
                I believe the fastest way to become a great engineer is by getting your hands dirty: reading docs,
                writing code, breaking things, and figuring out why they broke. Whether it&apos;s architecting full-stack
                web applications with Next.js, prototyping an obstacle-detecting vacuum robot on a tight student budget,
                or polishing micro-interactions with Tailwind CSS, I genuinely care about making things that work well and feel good to use.
              </p>
            </div>

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              What I Genuinely Enjoy Building
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--color-silver-muted)", marginBottom: "1.25rem" }}>
              My exploration spans modern web architectures, algorithmic problem solving, and physical computing:
            </p>

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
                <span>Internet of Things (IoT)</span>
              </div>

              <div className="interest-item">
                <div className="interest-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m14 15-4-3 4-3v6z"></path>
                  </svg>
                </div>
                <span>Robotics &amp; Physical Prototypes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Highlights */}
          <div className="about-right">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>
              How I Approach My Work
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
                  <h4>Build by Doing</h4>
                  <p>
                    Lectures give the map, but shipping responsive React &amp; Next.js components, writing type-safe TypeScript, and deploying live to Vercel is where real engineering instincts are built.
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
                  <h4>Curious &amp; Resourceful</h4>
                  <p>
                    Whether it&apos;s keeping the BOM under ₹5,000 for a smart vacuum robot or optimizing algorithmic time complexity, I enjoy finding clever, scrappy ways forward.
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
                  <h4>Attention to the Little Details</h4>
                  <p>
                    From responsive mobile touch targets and clear error messages to readable git commit messages, I take pride in work that feels thoughtful and polished.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Principles & Human Touch Row */}
        <div className="principles-row">
          <div className="principles-header">
            <span className="principles-label">— Engineering Philosophy</span>
            <h3 className="principles-title">How I Approach People, Code &amp; Problems</h3>
          </div>

          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h4>Curiosity First</h4>
              <p>
                Understanding why things work at a fundamental level — from algorithmic complexity in C++ to state management in modern React and TypeScript.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h4>Human Empathy</h4>
              <p>
                Technology matters most when it removes real frustration for everyday people — whether it&apos;s an effortless web application or rider crash alerts.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4>Pride in Craft</h4>
              <p>
                Taking care with the unseen details: clean commits, accessible markup, defensive error states, and responsive touch feedback.
              </p>
            </div>
          </div>

          <div className="editorial-quote-strip">
            <span className="quote-mark-icon" aria-hidden="true">&ldquo;</span>
            <div className="quote-text-wrap">
              <blockquote>
                &ldquo;I believe engineering is at its best when it solves quiet, everyday problems — turning complex logic into tools that feel effortless and human.&rdquo;
              </blockquote>
              <cite>Nandita Ghosh &bull; Computer Science &amp; Engineering</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

