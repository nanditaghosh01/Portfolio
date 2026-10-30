export interface Project {
  id: string;
  title: string;
  category: 'web' | 'interactive' | 'hardware';
  categoryLabel: string;
  summary: string;
  fullDescription: string;
  tags: string[];
  image: string | null;
  imageGradient: string;
  icon: string;
  demoUrl: string | null;
  repoUrl: string | null;
  highlights?: string[];
  hardwareSpecs?: string[];
  featured: boolean;
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "shms",
    title: "LUMORA — Smart Hotel Management System (SHMS)",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Luxury hospitality and intelligent hotel operations platform combining effortless guest booking with cutting-edge management workflows for staff, reception, and administrators.",
    fullDescription: "LUMORA (Smart Hotel Management System) is an enterprise-grade hospitality management web platform engineered with React 19, TypeScript, and Vite. Designed with an editorial luxury aesthetic, the system provides AI-powered room recommendations, multi-tier booking and checkout workflows, live inventory and maintenance tracking, staff scheduling, and interactive analytics dashboards powered by Recharts.",
    tags: ["React 19", "TypeScript", "Next.js", "Tailwind CSS", "Recharts", "Hotel Ops", "UI/UX"],
    image: "/assets/images/projects/shms.png",
    imageGradient: "linear-gradient(135deg, #1C1C19 0%, #935542 60%, #C2755E 100%)",
    icon: "code",
    demoUrl: "https://shms-bbzy.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/SHMS",
    highlights: [
      "Built with modern React 19 + TypeScript + Vite stack",
      "Interactive multi-role dashboards (Admin, Manager, Staff)",
      "Real-time room availability, maintenance & analytics tracking"
    ],
    featured: true
  },
  {
    id: "conceptflow",
    title: "ConceptFlow — Number Conversion Platform",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Interactive visual number systems laboratory featuring a tactile 8-bit switchboard, 4-way synchronized radix matrix, mathematical division ladders, and gamified practice challenges.",
    fullDescription: "ConceptFlow is an interactive educational web platform engineered with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Designed around a curated Noguchi Blue Beige palette, it transforms number-system conversions into an intuitive, tactile playground—featuring an 8-bit interactive switchboard with live audio and bitwise telemetry, step-by-step division ladders with reverse readout, 4-way synchronized matrix, and gamified practice challenges with active streak tracking.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Algorithms", "Vercel"],
    image: "/assets/images/projects/conceptflow.png",
    imageGradient: "linear-gradient(135deg, #1C1C19 0%, #935542 60%, #C2755E 100%)",
    icon: "code",
    demoUrl: "https://concept-flow-dusky.vercel.app/",
    repoUrl: "https://github.com/nanditaghosh01/ConceptFlow",
    highlights: [
      "Built with modern Next.js 16 + React 19 + Tailwind CSS stack",
      "Interactive 8-bit switchboard with live bitwise telemetry",
      "Step-by-step division ladders & gamified practice lab"
    ],
    featured: true
  },
  {
    id: "iq-tester",
    title: "IQ Tester — Logic & Aptitude Quiz Platform",
    category: "interactive",
    categoryLabel: "Games & Logic",
    summary: "Engaging quiz platform with diverse questions spanning pattern recognition, numerical reasoning, and logical deduction with automated scoring.",
    fullDescription: "A browser-based quiz and aptitude testing web application featuring curated logic puzzles, pattern sequences, and mathematical riddles. Evaluates user responses dynamically, enforces time limits, and calculates comprehensive aptitude scores with instant diagnostic feedback.",
    tags: ["JavaScript", "TypeScript", "React", "CSS3", "Scoring Engine", "Vercel"],
    image: "/assets/images/projects/iq-tester.png",
    imageGradient: "linear-gradient(135deg, #935542 0%, #C2755E 60%, #E6B959 100%)",
    icon: "brain",
    demoUrl: "https://iq-tester-sand.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/IQ-Tester",
    highlights: [
      "Dynamic question randomized sequencing",
      "Timed test progression with score calculation",
      "Instant score feedback"
    ],
    featured: true
  },
  {
    id: "habit-tracker",
    title: "HabitTracker — Daily Routine & Streak Monitor",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Modern personal productivity web application built with React and Vite for tracking daily routines, habit streaks, completion logs, and motivation progress.",
    fullDescription: "A focused daily habit tracker built using React and modern JavaScript. Helps users build positive routines through streak counters, daily checklists, interactive toggle actions, and local persistent storage. Designed with clean minimal cards and rewarding completion feedback.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "LocalStorage", "UI/UX", "Vercel"],
    image: "/assets/images/projects/habit-tracker.png",
    imageGradient: "linear-gradient(135deg, #1C1C19 0%, #2A2A25 50%, #935542 100%)",
    icon: "check-circle",
    demoUrl: "https://habit-tracker-five-taupe-61.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/HabitTracker",
    highlights: [
      "Built with React + Vite development stack",
      "Persistent habit status with streak tracking",
      "Fast, responsive mobile-first UI"
    ],
    featured: true
  },
  {
    id: "code-escape",
    title: "CodeEscape — Interactive Coding Puzzle Game",
    category: "interactive",
    categoryLabel: "Games & Logic",
    summary: "Gamified browser puzzle challenge where players solve programming riddles, algorithm logic, and syntactic clues to escape sequentially unlocking rooms.",
    fullDescription: "An interactive coding challenge experience wrapped in an escape-room game narrative. Players encounter logical conundrums, debugging prompts, and coding challenges that must be resolved against an countdown timer to unlock next rooms.",
    tags: ["JavaScript", "HTML5", "CSS3", "Game Mechanics", "Vercel"],
    image: "/assets/images/projects/code-escape.png",
    imageGradient: "linear-gradient(135deg, #935542 0%, #1C1C19 60%, #C2755E 100%)",
    icon: "gamepad",
    demoUrl: "https://code-escape-ivory.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/CodeEscape",
    highlights: [
      "Sequential multi-room puzzle progression",
      "Timer pressure & instant solution verification",
      "Creative game mechanics implemented in vanilla JS"
    ],
    featured: true
  },
  {
    id: "news-dashboard",
    title: "News Dashboard — Live Topical News Portal",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Responsive news aggregator application created with React and Vite featuring category filtering, search capabilities, and dynamic headline card layouts.",
    fullDescription: "A clean modern news browsing application providing categorized headline digests across technology, science, sports, and general news. Engineered with modular React components, responsive grids, and asynchronous data fetching patterns.",
    tags: ["React.js", "Vite", "JavaScript", "Asynchronous API", "Vercel"],
    image: "/assets/images/projects/news-dashboard.png",
    imageGradient: "linear-gradient(135deg, #1C1C19 0%, #935542 50%, #E6B959 100%)",
    icon: "newspaper",
    demoUrl: "https://news-dashboard-two-sigma.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/news-dashboard",
    highlights: [
      "React component hierarchy & Vite build toolchain",
      "Category-based filtering & dynamic card layout",
      "Seamless responsive typography and reading view"
    ],
    featured: false
  },
  {
    id: "minesweeper",
    title: "Minesweeper Game — Classic Browser Recreation",
    category: "interactive",
    categoryLabel: "Games & Logic",
    summary: "Faithful browser recreation of the iconic Minesweeper game featuring dynamic grid generation, recursive zero-tile clearing, flagging, and timer.",
    fullDescription: "A complete implementation of the timeless puzzle game built purely with JavaScript, HTML, and CSS. Includes custom grid generation, random mine distribution, recursive reveal for zero-adjacent tiles, right-click flag marking, move counter, and game win/loss state management.",
    tags: ["JavaScript", "CSS3", "Algorithms", "Game Logic", "Vercel"],
    image: "/assets/images/projects/minesweeper.png",
    imageGradient: "linear-gradient(135deg, #2A2A25 0%, #1C1C19 50%, #935542 100%)",
    icon: "bomb",
    demoUrl: "https://minesweeper-game-beryl.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/Minesweeper-Game",
    highlights: [
      "Recursive flood-fill reveal algorithm",
      "Right-click flagging & mine counter",
      "Clean modern arcade styling"
    ],
    featured: false
  },
  {
    id: "beauty-salon",
    title: "Beauty Salon Shop — Service Showcase & Booking UI",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Elegant responsive frontend website and service catalog for a beauty salon featuring modern typography, service tiers, and customer contact interface.",
    fullDescription: "A chic, mobile-friendly multi-section promotional and booking showcase designed for salon and wellness services. Features categorized service pricing cards, treatment spotlights, customer testimonials, and an accessible booking consultation form.",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Vercel"],
    image: "/assets/images/projects/beauty-salon.png",
    imageGradient: "linear-gradient(135deg, #935542 0%, #C2755E 100%)",
    icon: "sparkles",
    demoUrl: "https://beauty-salonshop.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/Beauty-Salon-Shop",
    highlights: [
      "Polished aesthetic with responsive service cards",
      "Interactive consultation request form",
      "Fast loading static frontend architecture"
    ],
    featured: false
  },
  {
    id: "electronics-shop",
    title: "Electronics Shop — E-Commerce Storefront UI",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Responsive e-commerce storefront for electronics and digital gadgets with product category browsing, price highlights, and cart drawer preview.",
    fullDescription: "A clean modern e-commerce storefront UI tailored for tech gadgets and accessories. Provides product showcases, price badge indicators, category navigation, and responsive grid layouts designed to provide a smooth retail customer journey.",
    tags: ["HTML5", "CSS3", "JavaScript", "E-Commerce UI", "Vercel"],
    image: "/assets/images/projects/electronics-shop.png",
    imageGradient: "linear-gradient(135deg, #1C1C19 0%, #935542 60%, #E6B959 100%)",
    icon: "shopping-bag",
    demoUrl: "https://electronics-shop-sage.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/Electronics-Shop",
    highlights: [
      "Grid-based product catalog layout",
      "Interactive hover previews & promotional banners",
      "Cross-browser and mobile responsive styling"
    ],
    featured: false
  },
  {
    id: "login-reg-system",
    title: "Login & Registration System",
    category: "web",
    categoryLabel: "Web Applications",
    summary: "Authentication user interface and backend architecture foundation featuring form validation, secure credential handling concepts, and account access views.",
    fullDescription: "An authentication template providing structured user registration and login workflows. Implements thorough client-side validation, password visibility toggling, error state feedback, and clean modular code structured for backend database connectivity.",
    tags: ["Java", "JavaScript", "CSS3", "Form Validation", "Vercel"],
    image: "/assets/images/projects/login-reg-system.png",
    imageGradient: "linear-gradient(135deg, #1C1C19 0%, #2A2A25 60%, #C2755E 100%)",
    icon: "lock",
    demoUrl: "https://login-registration-system-gamma.vercel.app",
    repoUrl: "https://github.com/nanditaghosh01/LoginRegistrationSystem",
    highlights: [
      "Comprehensive form validation & security rules",
      "Smooth state transitions between Login & Sign Up",
      "Java backend architectural readiness"
    ],
    featured: false
  },
  {
    id: "vacuum-x",
    title: "VACUUM-X — Smart Autonomous Vacuum",
    category: "hardware",
    categoryLabel: "IoT & Robotics",
    summary: "Autonomous robotic vacuum cleaner prototype featuring ultrasonic obstacle avoidance, intelligent dust detection sensors, smartphone app interaction, and custom LED indicators.",
    fullDescription: "A collaborative robotics engineering project creating a low-cost, smart autonomous vacuum cleaner. Engineered with ultrasonic obstacle detection sensors, motor drivers, and a suction collection subsystem, VACUUM-X connects to a mobile companion app for manual direction control, telemetry, and automated cleaning routines. The chassis features custom status LED rings indicating power and cleaning modes.",
    tags: ["Arduino", "Ultrasonic Sensors", "Motor Drivers", "IoT App Control", "C/C++", "Hardware Design"],
    image: null,
    imageGradient: "linear-gradient(135deg, #1C1C19 0%, #2A2A25 50%, #935542 100%)",
    icon: "bot",
    demoUrl: null,
    repoUrl: null,
    hardwareSpecs: [
      "Ultrasonic Distance Sensors (HC-SR04)",
      "L298N High-Power Dual H-Bridge Motor Driver",
      "Optical Dust & Particle Sensor Unit",
      "Bluetooth / Wireless Telemetry Subsystem",
      "Approximate build budget: ₹4,000–₹5,000"
    ],
    featured: false
  },
  {
    id: "smart-helmet",
    title: "Smart Helmet — Accident Detection & Emergency Alert",
    category: "hardware",
    categoryLabel: "IoT & Hardware",
    summary: "Life-saving smart rider helmet utilizing multi-axis accelerometer and gyroscope motion data combined with GPS to detect crashes and dispatch instant emergency alerts.",
    fullDescription: "An intelligent protective helmet system designed to minimize emergency response times for motorcycle riders. The embedded electronics monitor sudden deceleration, angular velocity changes, and impact forces using an MPU-6050 6-axis IMU. To prevent false alarms (such as dropped helmets), the firmware implements validation thresholds before triggering SMS/location notifications to pre-configured emergency contacts via GPS and cellular communication.",
    tags: ["Embedded C", "Accelerometer (MPU-6050)", "Gyroscope", "GPS Module", "GSM Alert", "Arduino"],
    image: null,
    imageGradient: "linear-gradient(135deg, #935542 0%, #1C1C19 60%, #C2755E 100%)",
    icon: "shield",
    demoUrl: null,
    repoUrl: null,
    hardwareSpecs: [
      "MPU-6050 3-Axis Gyroscope & Accelerometer",
      "SIM800L / GSM Emergency Transmission Module",
      "NEO-6M Precision GPS Tracking Module",
      "False-trigger suppression & crash angle algorithm",
      "Resilient low-connectivity emergency protocol"
    ],
    featured: false
  }
];

