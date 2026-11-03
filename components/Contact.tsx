"use client";

import { useState } from "react";

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertState, setAlertState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }).catch(() => {});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setAlertState({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);
    setAlertState(null);

    try {
      const response = await fetch("https://formspree.io/f/mnppjedw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setAlertState({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I will get back to you soon."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setAlertState({
          type: "error",
          message: "Oops! There was an issue submitting your message. Please email me directly."
        });
      }
    } catch {
      setAlertState({
        type: "error",
        message: "Network error. Please try again or email me directly at nanditaghosh632@gmail.com."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Main Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Say Hello</span>
            <h2 className="section-title">Let’s Connect &amp; Collaborate</h2>
            <p className="section-subtitle">
              Open for internship opportunities, project collaborations, and software engineering roles.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left Column: Direct Contact Info */}
            <div className="contact-info-panel">
              <h3 className="contact-headline">Reach Out Directly</h3>
              <p className="contact-intro">
                Feel free to send a message or connect directly through any channel below.
              </p>

              <div className="contact-items-stack">
                {/* Email */}
                <div className="contact-item-card">
                  <div className="contact-item-left">
                    <div className="contact-icon-bubble">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="contact-item-details">
                      <span className="contact-item-label">Email Address</span>
                      <a href="mailto:nanditaghosh632@gmail.com" className="contact-item-value" title="Send email">
                        nanditaghosh632@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="contact-item-action copy-trigger"
                    onClick={() => copyToClipboard("nanditaghosh632@gmail.com", "email")}
                  >
                    {copiedKey === "email" ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Phone */}
                <div className="contact-item-card">
                  <div className="contact-item-left">
                    <div className="contact-icon-bubble">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="contact-item-details">
                      <span className="contact-item-label">Phone &amp; WhatsApp</span>
                      <a href="tel:+917063019482" className="contact-item-value">
                        +91 7063019482
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="contact-item-action copy-trigger"
                    onClick={() => copyToClipboard("+917063019482", "phone")}
                  >
                    {copiedKey === "phone" ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="contact-item-card">
                  <div className="contact-item-left">
                    <div className="contact-icon-bubble">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="contact-item-details">
                      <span className="contact-item-label">LinkedIn Profile</span>
                      <a href="https://www.linkedin.com/in/nandita-ghosh-828a96327/" target="_blank" rel="noopener noreferrer" className="contact-item-value">
                        linkedin.com/in/nandita-ghosh
                      </a>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                    <button
                      type="button"
                      className="contact-item-action copy-trigger"
                      onClick={() => copyToClipboard("https://www.linkedin.com/in/nandita-ghosh-828a96327/", "linkedin")}
                    >
                      {copiedKey === "linkedin" ? "Copied!" : "Copy"}
                    </button>
                    <a
                      href="https://www.linkedin.com/in/nandita-ghosh-828a96327/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item-action"
                    >
                      Visit &rarr;
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="contact-item-card">
                  <div className="contact-item-left">
                    <div className="contact-icon-bubble">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                    <div className="contact-item-details">
                      <span className="contact-item-label">GitHub Profile</span>
                      <a href="https://github.com/nanditaghosh01" target="_blank" rel="noopener noreferrer" className="contact-item-value">
                        github.com/nanditaghosh01
                      </a>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                    <button
                      type="button"
                      className="contact-item-action copy-trigger"
                      onClick={() => copyToClipboard("https://github.com/nanditaghosh01", "github")}
                    >
                      {copiedKey === "github" ? "Copied!" : "Copy"}
                    </button>
                    <a
                      href="https://github.com/nanditaghosh01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item-action"
                    >
                      Visit &rarr;
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-item-card">
                  <div className="contact-item-left">
                    <div className="contact-icon-bubble">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="contact-item-details">
                      <span className="contact-item-label">Location</span>
                      <span className="contact-item-value">
                        Barasat, North 24 Parganas, West Bengal, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-card">
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-white)" }}>
                Send a Message
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-silver-muted)", marginBottom: "1.75rem" }}>
                Send a message and I'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contactName" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    placeholder="e.g. Aditi Sharma"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactEmail" className="form-label">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    placeholder="e.g. aditi@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactSubject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contactSubject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactMessage" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                    placeholder="Hi Nandita, I checked out your portfolio and would love to connect..."
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>

                {alertState && (
                  <div
                    className={`form-alert ${alertState.type}`}
                    style={{
                      marginTop: "1rem",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "0.9rem",
                      background: alertState.type === "success" ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
                      color: alertState.type === "success" ? "#10B981" : "#EF4444",
                      border: `1px solid ${alertState.type === "success" ? "#10B981" : "#EF4444"}`
                    }}
                  >
                    {alertState.message}
                  </div>
                )}

                <p className="form-notice">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--color-primary)" }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>
                    Delivered directly to Nandita&apos;s inbox, or email at{" "}
                    <a href="mailto:nanditaghosh632@gmail.com" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                      nanditaghosh632@gmail.com
                    </a>.
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

