"use client";

import { useState } from "react";
import { PORTFOLIO_PROJECTS, Project } from "../data/projects";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Top Bar */}
        <div className="projects-top-bar">
          <div>
            <span className="section-label">— My Portfolio</span>
            <h2 className="section-title" style={{ marginBottom: "0.35rem", textAlign: "left" }}>
              My Latest <span className="gradient-text">Projects</span>
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-silver-muted)" }}>
              Featured web platforms (React, Next.js, TypeScript), robotics prototypes, and software tools.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="projects-filter-bar">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${filter === "web" ? "active" : ""}`}
              onClick={() => setFilter("web")}
            >
              Web Applications
            </button>
            <button
              className={`filter-btn ${filter === "hardware" ? "active" : ""}`}
              onClick={() => setFilter("hardware")}
            >
              IoT &amp; Robotics
            </button>
            <button
              className={`filter-btn ${filter === "interactive" ? "active" : ""}`}
              onClick={() => setFilter("interactive")}
            >
              Games &amp; Logic
            </button>
          </div>
        </div>

        {/* Dynamic Projects Grid */}
        <div className="projects-grid" id="projectsGrid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              data-id={project.id}
            >
              {/* Media / Thumbnail */}
              {project.image ? (
                <div className="project-thumb">
                  <span className="project-category-badge">{project.categoryLabel}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              ) : (
                <div className="project-thumb" style={{ background: project.imageGradient }}>
                  <span className="project-category-badge">{project.categoryLabel}</span>
                  <div className="project-thumb-fallback">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                    </svg>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, opacity: 0.9 }}>
                      {project.tags[0] || "Hardware"} Prototype
                    </span>
                  </div>
                </div>
              )}

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-tags-list">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="project-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-links-group">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link primary"
                        title="View Live Demo"
                      >
                        <span>Demo</span>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link secondary"
                        title="View Source Code"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    className="circle-arrow-btn view-details-trigger"
                    onClick={() => onSelectProject(project)}
                    title="View Details &amp; Specs"
                    aria-label="View Project Details"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
