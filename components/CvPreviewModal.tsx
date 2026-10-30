"use client";

import { useEffect, useState } from "react";

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvPreviewModal({ isOpen, onClose }: CvPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<"pdf" | "structured">("pdf");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop active"
      id="cvModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cvModalHeading"
      onClick={onClose}
    >
      <div
        className="modal-window"
        style={{ maxWidth: "880px", width: "95%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close CV modal"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-content-pad">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1.25rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div>
              <h2
                id="cvModalHeading"
                style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--color-white)" }}
              >
                Curriculum Vitae
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--color-silver-muted)" }}>
                Nandita Ghosh &bull; B.Tech CSE Student &bull; Adamas University
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <a
                href="/assets/docs/Nandita_Ghosh_Resume.pdf"
                download="Nandita_Ghosh_Resume.pdf"
                className="btn btn-primary btn-sm"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download PDF</span>
              </a>

              <a
                href="/assets/docs/Nandita_Ghosh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Open PDF</span>
              </a>

              <a
                href="/assets/docs/Nandita_Ghosh_CV.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                Full Page CV
              </a>
            </div>
          </div>

          {/* View Switcher Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <button
              type="button"
              onClick={() => setActiveTab("pdf")}
              className={`btn btn-sm ${activeTab === "pdf" ? "btn-primary" : "btn-outline"}`}
              style={{ borderRadius: "var(--radius-full)", padding: "0.4rem 1.1rem", fontSize: "0.825rem" }}
            >
              Official PDF Document
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("structured")}
              className={`btn btn-sm ${activeTab === "structured" ? "btn-primary" : "btn-outline"}`}
              style={{ borderRadius: "var(--radius-full)", padding: "0.4rem 1.1rem", fontSize: "0.825rem" }}
            >
              Interactive HTML CV
            </button>
          </div>

          {/* Pane 1: Official Embedded PDF Document */}
          {activeTab === "pdf" ? (
            <div
              style={{
                width: "100%",
                height: "620px",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                background: "#0a0e1a",
              }}
            >
              <iframe
                src="/assets/docs/Nandita_Ghosh_Resume.pdf#toolbar=1"
                width="100%"
                height="100%"
                style={{ border: "none", display: "block" }}
                title="Official Resume PDF of Nandita Ghosh"
              />
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                height: "620px",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-base)",
              }}
            >
              <iframe
                src="/assets/docs/Nandita_Ghosh_CV.html"
                width="100%"
                height="100%"
                style={{ border: "none", display: "block" }}
                title="Printable CV of Nandita Ghosh"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

