"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onPreviewCv: () => void;
}

const ROLES = [
  "Full-Stack Web Developer",
  "Software Engineer",
  "React & Next.js Engineer",
  "Robotics & IoT Builder"
];

export default function Hero({ onPreviewCv }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("Full-Stack Web Developer");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentRole) {
      // Pause at full text
      timeout = setTimeout(() => setIsDeleting(true), 3200);
    } else if (isDeleting && text === "") {
      // Switch to next role and start typing
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const typingSpeed = isDeleting ? 40 : 85;
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
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
                  {text || "Full-Stack Web Developer"}
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

              <button
                className="btn btn-outline cv-modal-trigger"
                type="button"
                onClick={onPreviewCv}
                aria-label="Preview CV in modal"
                title="Preview Resume in modal"
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

              {/* Keyword Badge */}
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
