"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import CvPreviewModal from "../components/CvPreviewModal";
import { Project } from "../data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main id="mainContent">
        <Hero onPreviewCv={() => setIsCvOpen(true)} />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Services />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* CV Preview Modal */}
      <CvPreviewModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />
    </>
  );
}
