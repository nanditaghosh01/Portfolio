"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onPreviewCv: () => void;
}

export default function Hero({ onPreviewCv }: HeroProps) {
  // 3D Parallax tilt on portrait
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePortraitMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    setTilt({
      x: deltaY * -5,
      y: deltaX * 5,
    });
  };

  const handlePortraitLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

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

            <h1 className="hero-headline hero-name-title">
              Nandita <span className="gradient-text">Ghosh</span>
            </h1>

            <p className="hero-subheadline">
              Third-Year Computer Science Student
            </p>

            <p className="hero-bio">
              Computer Science undergraduate building clean, responsive web applications with Next.js, React, and TypeScript, with a strong foundation in algorithms and IoT hardware.
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
                <span className="metric-value">9.45</span>
                <span className="metric-label">Current CGPA (Adamas Univ)</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">12+</span>
                <span className="metric-label">Projects &amp; Prototypes</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">2028</span>
                <span className="metric-label">B.Tech Graduation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Photo Portrait Box with Caption */}
          <div className="hero-right">
            <div
              className="circle-portrait-wrapper"
              onMouseMove={handlePortraitMove}
              onMouseLeave={handlePortraitLeave}
              style={{
                transform:
                  tilt.x !== 0 || tilt.y !== 0
                    ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
                    : undefined,
                transition:
                  tilt.x === 0 && tilt.y === 0 ? "transform 0.45s ease-out" : "none",
              }}
            >
              {/* Ambient Glow & Orbital Dash Ring */}
              <div className="circle-glow-halo" aria-hidden="true"></div>
              <div className="circle-orbit-ring" aria-hidden="true"></div>

              {/* Main Box Frame */}
              <div className="circle-portrait-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/profile.png"
                  alt="Portrait of Nandita Ghosh"
                  className="circle-portrait-img"
                />
              </div>
            </div>

            {/* Caption under Image (Matches user reference) */}
            <div className="portrait-caption">
              <h3 className="portrait-caption-name">Nandita Ghosh</h3>
              <p className="portrait-caption-role">CSE Student &bull; Web Developer &bull; IoT Builder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
