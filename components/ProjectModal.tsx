"use client";

import { useEffect } from "react";
import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay active"
      id="projectModal"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="modal-window"
        style={{ maxWidth: "680px", width: "90%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="modal-body" id="projectModalContent">
          {project.image && (
            <div
              style={{
                width: "100%",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                marginBottom: "1.5rem",
                maxHeight: "280px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
            <span className="pill-badge">{project.categoryLabel}</span>
            {project.featured && (
              <span className="pill-badge" style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}>
                Featured
              </span>
            )}
          </div>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--color-white)" }}>
            {project.title}
          </h3>

          <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            {project.fullDescription || project.summary}
          </p>

          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            {project.tags.map((t) => (
              <span key={t} className="skill-tag">
                {t}
              </span>
            ))}
          </div>

          {project.hardwareSpecs && project.hardwareSpecs.length > 0 ? (
            <div
              style={{
                marginTop: "1.5rem",
                background: "var(--color-bg-base)",
                padding: "1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>
                Hardware &amp; Technical Specifications
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {project.hardwareSpecs.map((spec, i) => (
                  <li key={i} style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--color-primary)" }}>&bull;</span> {spec}
                  </li>
                ))}
              </ul>
            </div>
          ) : project.highlights && project.highlights.length > 0 ? (
            <div
              style={{
                marginTop: "1.5rem",
                background: "var(--color-bg-base)",
                padding: "1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary)" }}>
                Project Highlights
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {project.highlights.map((h, i) => (
                  <li key={i} style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--color-primary)" }}>&bull;</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.75rem" }}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                style={{ flex: 1, justifyContent: "center" }}
              >
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                className="btn btn-outline btn-sm"
                style={{ flex: 1, justifyContent: "center" }}
              >
                <span>View Source</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
