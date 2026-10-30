"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onPreviewCv: () => void;
}

const ROLES = [
  "Software Engineer",
  "Full-Stack Web Developer",
  "React & Next.js Engineer",
  "Robotics & IoT Builder"
];

export default function Hero({ onPreviewCv }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-left">
            <div className="hero-tagline-bar">
              <span className="status-dot"></span>
              <span>Computer Science &bull; Adamas University</span>
            </div>

            <h1 className="hero-headline">
              Turning curiosity into{" "}
              <span className="gradient-text">code that actually works</span>
            </h1>

            <p className="hero-subheadline">
              Third-Year Computer Science Student &bull; Aspiring{" "}
              <span className="typing-role-wrap">
                <span className="typing-role" id="typingRole">
                  {text || "Software Engineer"}
                </span>
                <span className="typing-cursor" aria-hidden="true">
                  |
                </span>
              </span>
            </p>

            <p className="hero-bio">
              Hey, glad you&apos;re here! I&apos;m an engineering student who loves building things from scratch—whether that&apos;s
              crafting clean, responsive web applications with Next.js, React, and TypeScript, solving algorithmic puzzles in C++,
              or wiring up sensors on an Arduino breadboard at our robotics club. I&apos;m happiest when tackling real problems and shipping code
              that feels great to use.
            </p>

            <div className="hero-actions-row">
              <a href="#projects" className="btn btn-primary">
                <span>View My Projects</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href="/assets/docs/Nandita_Ghosh_Resume.pdf"
                download="Nandita_Ghosh_Resume.pdf"
                className="hero-cv-link"
                aria-label="Download Nandita Ghosh Resume PDF"
                title="Download official Resume PDF"
              >
                <span>Download CV</span>
                <span
                  className="circle-arrow-btn"
                  style={{ width: "28px", height: "28px", fontSize: "0.8rem" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
              </a>

              <button
                className="btn btn-outline cv-modal-trigger"
                type="button"
                onClick={onPreviewCv}
                aria-label="Preview CV in modal"
                title="Preview Resume in modal"
                style={{
                  borderRadius: "var(--radius-full)",
                  padding: "0.8rem 1.6rem",
                  gap: "0.55rem",
                  fontSize: "0.96rem",
                  fontWeight: 700,
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Preview CV</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="hero-metrics">
              <div className="metric-item">
                <span className="metric-value">8.98</span>
                <span className="metric-label">Current CGPA (Adamas Univ)</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">12+</span>
                <span className="metric-label">Projects & Prototypes</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">2028</span>
                <span className="metric-label">B.Tech Graduation</span>
              </div>
            </div>
          </div>

          {/* Right Column: CLEAR Photo Portrait */}
          <div className="hero-right">
            <div className="circle-portrait-wrapper">
              {/* Ambient Glow & Orbital Dash Ring */}
              <div className="circle-glow-halo" aria-hidden="true"></div>
              <div className="circle-orbit-ring" aria-hidden="true"></div>

              {/* Main Circular Frame */}
              <div className="circle-portrait-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/profile.png"
                  alt="Portrait illustration of Nandita Ghosh"
                  className="circle-portrait-img"
                />
              </div>

              {/* Single Keyword Badge */}
              <div className="circle-single-badge">
                <span className="badge-icon-bullet">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                <span>Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

