/**
 * Nandita Ghosh - Portfolio Main Logic
 * Comprehensive Animation Enhancement Suite
 * Smooth, natural, lightweight, accessible, and responsive interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPageEntrance();
  initThemeToggle();
  initNavbar();
  initScrollProgressBar();
  initAmbientCanvas();
  initTypewriter();
  initProjects();
  initContactForm();
  initCopyActions();
  initModals();
  initBackToTop();
  initMetricCounters();
  initScrollReveal();
  initCardTiltAndSpotlight();
  initHeroInteractivity();
});

/* ==========================================================================
   0. Page Load Entrance Sequence
   ========================================================================== */
function initPageEntrance() {
  requestAnimationFrame(() => {
    document.body.classList.add('page-loaded');
  });
}

/* ==========================================================================
   1. Theme Switcher (Dark & Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const toggleIcon = document.getElementById('themeToggleIcon');
  if (!toggleBtn || !toggleIcon) return;

  const SUN_SVG = `
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  `;

  const MOON_SVG = `
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  `;

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch (e) {}

    if (theme === 'light') {
      toggleIcon.innerHTML = MOON_SVG;
      toggleBtn.setAttribute('title', 'Switch to Dark Mode');
      toggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      toggleIcon.innerHTML = SUN_SVG;
      toggleBtn.setAttribute('title', 'Switch to Light Mode');
      toggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }

  let initialTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  try {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'light' || saved === 'dark') {
      initialTheme = saved;
    }
  } catch (e) {}

  setTheme(initialTheme);

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.add('theme-animating');
    document.documentElement.classList.add('theme-transitioning');
    setTimeout(() => toggleBtn.classList.remove('theme-animating'), 700);
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 450);

    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

/* ==========================================================================
   2. Navigation Bar & Scroll Spy
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  // Sticky header transition on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Mobile menu toggle
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      const icon = toggleBtn.querySelector('svg');
      if (icon) {
        if (isOpen) {
          icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
        } else {
          icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      }
    });

    // Close mobile menu when a nav link is clicked
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('svg');
        if (icon) {
          icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      });
    });

    // Close mobile menu when tapping anywhere outside the drawer
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
        navLinks.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('svg');
        if (icon) {
          icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      }
    });
  }

  // ScrollSpy with IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   3. Projects Showcase & Silky Category Filtering
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!grid || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  let isFiltering = false;

  function renderProjects(filter = 'all', animate = true) {
    if (isFiltering) return;

    function applyRender() {
      grid.innerHTML = '';

      const filtered = filter === 'all'
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem;">
            <p style="color: var(--color-text-muted); font-size: 1.05rem;">No projects found in this category.</p>
          </div>
        `;
        grid.classList.remove('is-filtering');
        isFiltering = false;
        return;
      }

      filtered.forEach((project, index) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.setAttribute('data-id', project.id);
        card.style.animationDelay = `${index * 0.06}s`;

        // Media / Thumbnail
        let mediaHtml = '';
        if (project.image) {
          mediaHtml = `
            <div class="project-thumb">
              <span class="project-category-badge">${project.categoryLabel}</span>
              <img src="${project.image}" alt="${project.title}" loading="lazy" />
            </div>
          `;
        } else {
          const gradient = project.imageGradient || 'linear-gradient(135deg, #1C1C19 0%, #935542 50%, #C2755E 100%)';
          const iconSvg = getProjectIconSvg(project.icon || 'code');
          mediaHtml = `
            <div class="project-thumb" style="background: ${gradient};">
              <span class="project-category-badge">${project.categoryLabel}</span>
              <div class="project-thumb-fallback">
                ${iconSvg}
                <span style="font-size: 0.85rem; font-weight: 600; opacity: 0.9;">${project.tags[0] || 'Web'} Project</span>
              </div>
            </div>
          `;
        }

        // Tech tags
        const tagsHtml = project.tags
          .slice(0, 3)
          .map(tag => `<span class="project-tech-tag">${tag}</span>`)
          .join('');

        // Action links
        let actionsHtml = '';
        if (project.demoUrl) {
          actionsHtml += `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link primary" title="View Live Demo">
              <span>Demo</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          `;
        }

        if (project.repoUrl) {
          actionsHtml += `
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link secondary" title="View Source Code">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>Code</span>
            </a>
          `;
        }

        // Circular Arrow Button
        const circleArrowBtn = `
          <button class="circle-arrow-btn view-details-trigger" data-project-id="${project.id}" title="View Details & Specs" aria-label="View Project Details">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        `;

        card.innerHTML = `
          ${mediaHtml}
          <div class="project-body">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-summary">${project.summary}</p>
            <div class="project-tags-list">
              ${tagsHtml}
            </div>
            <div class="project-footer">
              <div class="project-links-group">
                ${actionsHtml}
              </div>
              ${circleArrowBtn}
            </div>
          </div>
        `;

        grid.appendChild(card);
      });

      // Rebind detail clicks
      grid.querySelectorAll('.view-details-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-project-id');
          openProjectModal(id);
        });
      });

      // Rebind spotlight & 3D tilt
      if (window.attachCardSpotlight) {
        window.attachCardSpotlight();
      }

      grid.classList.remove('is-filtering');
      isFiltering = false;
    }

    if (animate && grid.children.length > 0) {
      isFiltering = true;
      grid.classList.add('is-filtering');
      const currentCards = grid.querySelectorAll('.project-card');
      currentCards.forEach(c => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(12px) scale(0.96)';
        c.style.transition = 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)';
      });
      setTimeout(applyRender, 180);
    } else {
      applyRender();
    }
  }

  // Filter button click events
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter, true);
    });
  });

  // Initial render
  renderProjects('all', false);
}

function getProjectIconSvg(iconName) {
  switch (iconName) {
    case 'bot':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>`;
    case 'shield':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
    case 'cpu':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    case 'brain':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path></svg>`;
    case 'check-circle':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    case 'gamepad':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="6"></rect></svg>`;
    case 'newspaper':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>`;
    case 'bomb':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="13" r="8"></circle><path d="m19.5 4.5-2.5 2.5"></path><path d="m17 7 1-1"></path><path d="m21.5 2.5-1.5 1.5"></path></svg>`;
    case 'sparkles':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`;
    case 'shopping-bag':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;
    case 'lock':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
  }
}

/* ==========================================================================
   4. Project Details Modal
   ========================================================================== */
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('projectModalContent');
  if (!modal || !modalBody || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  let mediaSection = '';
  if (project.image) {
    mediaSection = `
      <div style="width: 100%; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 1.5rem; max-height: 280px;">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
    `;
  }

  let specsSection = '';
  if (project.hardwareSpecs && project.hardwareSpecs.length > 0) {
    specsSection = `
      <div style="margin-top: 1.5rem; background: var(--color-bg-base); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--color-primary);">Hardware & Technical Specifications</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem;">
          ${project.hardwareSpecs.map(spec => `
            <li style="font-size: 0.875rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: var(--color-primary);">&bull;</span> ${spec}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  } else if (project.highlights && project.highlights.length > 0) {
    specsSection = `
      <div style="margin-top: 1.5rem; background: var(--color-bg-base); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--color-primary);">Project Highlights</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem;">
          ${project.highlights.map(item => `
            <li style="font-size: 0.875rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: var(--color-primary);">&bull;</span> ${item}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  const tagsList = project.tags
    .map(tag => `<span class="project-tech-tag" style="background-color: var(--color-primary-light); color: var(--color-primary);">${tag}</span>`)
    .join('');

  let actionButtons = '';
  if (project.demoUrl) {
    actionButtons += `
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <span>Open Live App</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    `;
  }

  if (project.repoUrl) {
    actionButtons += `
      <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
        <span>GitHub Repository</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
    `;
  }

  modalBody.innerHTML = `
    ${mediaSection}
    <div style="margin-bottom: 0.5rem;">
      <span class="pill-badge" style="font-size: 0.75rem;">${project.categoryLabel}</span>
    </div>
    <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem;">${project.title}</h3>
    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-text-muted); margin-bottom: 1.25rem;">
      ${project.fullDescription}
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
      ${tagsList}
    </div>
    ${specsSection}
    <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--color-border);">
      ${actionButtons}
      <button class="btn btn-secondary btn-sm" onclick="closeAllModals()">Close</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   5. Modals Management (CV & Project)
   ========================================================================== */
function initModals() {
  const cvTriggers = document.querySelectorAll('.cv-modal-trigger');
  const cvModal = document.getElementById('cvModal');

  cvTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cvModal) {
        if (window.innerWidth < 768) {
          toggleModalCvView('themed');
        } else {
          toggleModalCvView('pdf');
        }
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal via backdrop click or escape key
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

function toggleModalCvView(view) {
  const pdfPane = document.getElementById('modalPdfPane');
  const themedPane = document.getElementById('modalThemedPane');
  const btnPdf = document.getElementById('modalBtnPdf');
  const btnThemed = document.getElementById('modalBtnThemed');

  if (view === 'themed') {
    if (pdfPane) pdfPane.style.display = 'none';
    if (themedPane) {
      themedPane.style.display = 'block';
      themedPane.style.animation = 'fadeInPane 0.3s ease both';
    }
    if (btnPdf) btnPdf.classList.remove('active');
    if (btnThemed) btnThemed.classList.add('active');
  } else {
    if (pdfPane) {
      pdfPane.style.display = 'block';
      pdfPane.style.animation = 'fadeInPane 0.3s ease both';
    }
    if (themedPane) themedPane.style.display = 'none';
    if (btnPdf) btnPdf.classList.add('active');
    if (btnThemed) btnThemed.classList.remove('active');
  }
}
window.toggleModalCvView = toggleModalCvView;
window.closeAllModals = closeAllModals;

/* ==========================================================================
   6. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const submitBtnText = document.getElementById('submitBtnText');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = (subjectInput ? subjectInput.value.trim() : '') || 'Portfolio Inquiry';
    const message = messageInput.value.trim();

    // Validation
    if (!name || !email || !message) {
      if (alertBox) {
        alertBox.className = 'form-alert error';
        alertBox.innerHTML = '<strong>Please complete all required fields:</strong> Name, Email, and Message are required.';
      }
      showToast('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (alertBox) {
        alertBox.className = 'form-alert error';
        alertBox.innerHTML = '<strong>Invalid Email:</strong> Please enter a valid email address.';
      }
      showToast('Please enter a valid email address.');
      return;
    }

    const endpoint = form.getAttribute('action') || 'https://formspree.io/f/YOUR_FORM_ID';

    // If still using placeholder, guide user and provide direct mailto option
    if (endpoint.includes('YOUR_FORM_ID')) {
      const mailtoFallback = `mailto:nanditaghosh632@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\n" + message)}`;
      if (alertBox) {
        alertBox.className = 'form-alert error';
        alertBox.innerHTML = `
          <strong>Formspree Endpoint Pending:</strong> Please replace <code>YOUR_FORM_ID</code> in <code>index.html</code> with your Formspree form ID.
          <div style="margin-top: 0.65rem;">
            In the meantime, you can send this message directly via your email app:
            <a href="${mailtoFallback}" class="btn btn-primary btn-sm" style="margin-top: 0.5rem; display: inline-flex;">Send Email Now</a>
          </div>
        `;
      }
      showToast('Formspree form ID needs to be configured.');
      return;
    }

    // Set Loading State
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.textContent = 'Sending Message...';
    if (alertBox) {
      alertBox.className = 'form-alert loading';
      alertBox.innerHTML = 'Sending your message to Nandita via Formspree...';
    }

    try {
      const formData = new FormData(form);
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        if (alertBox) {
          alertBox.className = 'form-alert success';
          alertBox.innerHTML = `
            <strong>Thank You, ${name}!</strong> Your message has been sent successfully. I'll get back to you shortly at <strong>${email}</strong>.
          `;
        }
        form.reset();
        showToast('Message sent successfully!');
      } else {
        const data = await response.json().catch(() => ({}));
        let errorMsg = 'Failed to send message via Formspree. Please try again or write directly to nanditaghosh632@gmail.com.';
        if (data && data.errors && data.errors.length) {
          errorMsg = data.errors.map(err => err.message).join(', ');
        }
        if (alertBox) {
          alertBox.className = 'form-alert error';
          alertBox.innerHTML = `
            <strong>Submission Error:</strong> ${errorMsg}
            <div style="margin-top: 0.5rem;">
              <a href="mailto:nanditaghosh632@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}" style="color: var(--color-primary); text-decoration: underline; font-weight: 600;">Click here to send directly to nanditaghosh632@gmail.com</a>
            </div>
          `;
        }
        showToast('Failed to send message.');
      }
    } catch (err) {
      if (alertBox) {
        alertBox.className = 'form-alert error';
        alertBox.innerHTML = `
          <strong>Network Error:</strong> Unable to reach Formspree. Please check your internet connection or email directly to <a href="mailto:nanditaghosh632@gmail.com" style="color: var(--color-primary); font-weight: 600;">nanditaghosh632@gmail.com</a>.
        `;
      }
      showToast('Network error occurred.');
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = 'Send Message';
    }
  });
}

/* ==========================================================================
   7. Copy to Clipboard Actions & Toast
   ========================================================================== */
function initCopyActions() {
  const copyButtons = document.querySelectorAll('.copy-trigger');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || 'Text';

      if (!textToCopy) return;

      const originalHtml = btn.innerHTML;

      function onCopied() {
        showToast(`Copied ${label} to clipboard.`);
        btn.classList.add('copied');
        btn.innerHTML = `
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Copied!
        `;
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalHtml;
        }, 2200);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(onCopied).catch(() => {
          fallbackCopy(textToCopy);
          onCopied();
        });
      } else {
        fallbackCopy(textToCopy);
        onCopied();
      }
    });
  });

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (e) {}
    document.body.removeChild(textarea);
  }
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => toast.remove(), 320);
  }, 3000);
}

/* ==========================================================================
   8. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backBtn = document.getElementById('backToTopBtn');
  if (!backBtn) return;

  let ticking = false;
  function checkScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 300) {
          backBtn.classList.add('visible');
        } else {
          backBtn.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   9. Animated Metric Counters
   ========================================================================== */
function initMetricCounters() {
  const metricElements = document.querySelectorAll('.hero-metrics [data-counter]');
  if (!metricElements.length) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let hasAnimated = false;

  function runCounters() {
    if (hasAnimated) return;
    hasAnimated = true;

    metricElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-counter'));
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';

      if (isReducedMotion) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
      }

      const start = parseFloat(el.getAttribute('data-start') || '0');
      const duration = 1600;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Exponential ease-out curve
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = start + (target - start) * ease;

        el.textContent = current.toFixed(decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target.toFixed(decimals) + suffix;
        }
      }

      requestAnimationFrame(update);
    });
  }

  // Trigger when metrics row is scrolled into view or after slight delay on load
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(runCounters, 200);
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  const metricsContainer = document.querySelector('.hero-metrics');
  if (metricsContainer) {
    observer.observe(metricsContainer);
  } else {
    runCounters();
  }
}

/* ==========================================================================
   10. Comprehensive Viewport Scroll Reveal System
   ========================================================================== */
function initScrollReveal() {
  // Check reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-zoom-in').forEach(el => {
      el.classList.add('is-revealed');
    });
    return;
  }

  const targets = document.querySelectorAll(`
    .section-header,
    .tools-strip-header,
    .tool-capsule-card,
    .about-lead-box,
    .interest-item,
    .highlight-card,
    .principles-header,
    .principle-card,
    .editorial-quote-strip,
    .education-featured-card,
    .edu-card-compact,
    .timeline-item,
    .skill-category-card,
    .service-card,
    .cert-card,
    .languages-card,
    .work-together-wrap,
    .contact-headline,
    .contact-intro,
    .contact-item-card,
    .contact-form-card,
    .site-footer .footer-top,
    .site-footer .footer-bottom
  `);

  if (!targets.length) return;

  targets.forEach((el) => {
    if (!el.classList.contains('reveal-on-scroll') &&
        !el.classList.contains('reveal-fade-left') &&
        !el.classList.contains('reveal-fade-right') &&
        !el.classList.contains('reveal-zoom-in')) {
      el.classList.add('reveal-on-scroll');
    }

    // Auto-calculate cascading staggered delays for card siblings
    const parent = el.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter(child =>
        child.matches && (
          child.matches('.tool-capsule-card') ||
          child.matches('.interest-item') ||
          child.matches('.highlight-card') ||
          child.matches('.principle-card') ||
          child.matches('.edu-card-compact') ||
          child.matches('.timeline-item') ||
          child.matches('.skill-category-card') ||
          child.matches('.service-card') ||
          child.matches('.cert-card') ||
          child.matches('.contact-item-card')
        )
      );
      if (siblings.length > 1) {
        const index = siblings.indexOf(el);
        if (index > 0) {
          el.style.setProperty('--stagger-delay', `${Math.min(index * 0.08, 0.48)}s`);
        }
      }
    }
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ==========================================================================
   11. Reading Scroll Progress Bar
   ========================================================================== */
function initScrollProgressBar() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  let ticking = false;
  function update() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

/* ==========================================================================
   12. Ambient Interactive Particle Canvas
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: -1000, y: -1000, radius: 130 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    }, 150);
  });

  // Calculate particle count: max 18 on small devices, max 38 on desktop
  function getOptimalCount() {
    if (window.innerWidth < 768) {
      return 18;
    }
    return Math.min(Math.floor((width * height) / 36000), 38);
  }

  let particles = [];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = initial ? Math.random() * width : Math.random() < 0.5 ? 0 : width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.38;
      this.vy = (Math.random() - 0.5) * 0.38;
      this.size = Math.random() * 2 + 1;
      this.isGold = Math.random() > 0.65;
      this.baseAlpha = Math.random() * 0.3 + 0.16;
      this.alpha = this.baseAlpha;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Subtle mouse repulsion
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (1 - dist / mouse.radius) * 1.4;
        this.x -= (dx / dist) * force;
        this.y -= (dy / dist) * force;
        this.alpha = Math.min(this.baseAlpha + 0.3, 0.85);
      } else {
        this.alpha = this.baseAlpha;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.isGold
        ? `rgba(230, 185, 89, ${this.alpha})`
        : `rgba(194, 117, 94, ${this.alpha})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = getOptimalCount();
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  initParticles();

  let isRunning = true;
  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
    if (isRunning) requestAnimationFrame(loop);
  });

  function loop() {
    if (!isRunning) return;
    ctx.clearRect(0, 0, width, height);

    // Connecting delicate filaments
    const maxDist = 110;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(194, 117, 94, ${0.1 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

/* ==========================================================================
   13. Hero Role Typewriter (Smooth & Stable)
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typingRole');
  if (!el) return;

  const roles = [
    'Full-Stack Web Developer',
    'Software Engineer',
    'AI & ML Enthusiast',
    'Robotics & IoT Builder',
    'Algorithmic Problem Solver'
  ];

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let isDeleting = true;
  let typingSpeed = 65;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = currentRole.substring(0, charIndex);
      typingSpeed = 32;
    } else {
      charIndex++;
      el.textContent = currentRole.substring(0, charIndex);
      typingSpeed = 70;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2200; // Hold full word for 2.2s
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 380; // Brief pause before starting next word
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 2200);
}

/* ==========================================================================
   14. Card Spotlight & Subtle Tilt
   ========================================================================== */
function initCardTiltAndSpotlight() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selector = `
    .project-card,
    .service-card,
    .tool-capsule-card,
    .highlight-card,
    .principle-card,
    .cert-card,
    .contact-item-card,
    .education-featured-card,
    .edu-card-compact,
    .languages-card
  `;

  function attachToCard(card) {
    if (card._hasTiltAttached) return;
    card._hasTiltAttached = true;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = x / rect.width;
      const yPct = y / rect.height;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty('--mouse-x-pct', xPct);
      card.style.setProperty('--mouse-y-pct', yPct);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '-1000px');
      card.style.setProperty('--mouse-y', '-1000px');
      card.style.removeProperty('--mouse-x-pct');
      card.style.removeProperty('--mouse-y-pct');
    });
  }

  document.querySelectorAll(selector).forEach(attachToCard);

  window.attachCardSpotlight = () => {
    document.querySelectorAll(selector).forEach(attachToCard);
  };
}

/* ==========================================================================
   15. Hero Portrait Desktop 3D Tilt (Subtle & Professional)
   ========================================================================== */
function initHeroInteractivity() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const portrait = document.querySelector('.circle-portrait-wrapper');
  if (!portrait) return;

  portrait.addEventListener('mousemove', (e) => {
    const rect = portrait.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    // Subtly tilt up to 3.5 degrees max (restrained for clean professional feel)
    portrait.style.transform = `perspective(800px) rotateY(${deltaX * 3.5}deg) rotateX(${-deltaY * 3.5}deg) translateY(-4px)`;
  });

  portrait.addEventListener('mouseleave', () => {
    portrait.style.transform = '';
  });
}
