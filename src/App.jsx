import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";

const pages = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const services = [
  {
    title: "Full-stack web development",
    summary:
      "Responsive React and Next.js interfaces backed by Node.js, Express, REST APIs, and database-driven workflows.",
    details: ["React / Next.js", "Node.js / Express", "MongoDB / PostgreSQL"],
  },
  {
    title: "Mobile application support",
    summary:
      "React Native app development support, APK packaging, and release preparation for Android and app store workflows.",
    details: ["React Native", "APK builds", "Store deployment prep"],
  },
  {
    title: "Graphic design",
    summary:
      "Digital branding assets, product visuals, social graphics, and client-facing materials that support clear presentation.",
    details: ["Brand assets", "Social designs", "Product graphics"],
  },
  {
    title: "Documentation (Microsoft Office)",
    summary:
      "Well-structured Word documents, Excel trackers, PowerPoint decks, and polished PDF-ready business documents.",
    details: ["Microsoft Word", "Excel", "PowerPoint"],
  },
  {
    title: "Software installation",
    summary:
      "Setup support for productivity tools, developer environments, office software, and basic system configuration.",
    details: ["App setup", "Dev tools", "IT basics"],
  },
  {
    title: "Hosting and deployment",
    summary:
      "Deployment workflows across Vercel, Render, Netlify, GitHub Pages, and CI/CD pipelines for smoother releases.",
    details: ["Vercel", "Render", "CI/CD"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Server-side development"],
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "Prisma", "MongoDB GridFS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "npm", "Postman", "VS Code", "CI/CD pipelines"],
  },
];

const projects = [
  {
    title: "Online Shopping and Delivery Platform",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    summary:
      "A full-featured e-commerce platform with JWT authentication, product management, cart workflows, checkout interactions, and Render/Vercel deployment.",
    href: "https://e-commerce-1-5umj.onrender.com",
  },
  {
    title: "Media Upload Web and Mobile Application",
    stack: ["Node.js", "Express.js", "MongoDB", "React Native", "APK"],
    summary:
      "A secure upload, storage, and sharing system for images and videos, including authentication, MongoDB GridFS storage, and mobile release preparation.",
  },
  {
    title: "E-Commerce Mobile App for University Students",
    stack: ["React Native", "Mobile commerce", "Product flows"],
    summary:
      "A campus-focused mobile commerce experience supporting product discovery, ordering, and practical buying and selling workflows for students.",
  },
  {
    title: "Social Media Multi-Upload Web System",
    stack: ["Web app", "Dashboard", "Workflow automation"],
    summary:
      "A web dashboard that helps users upload and manage content across multiple social media platforms from one interface.",
  },
];

const experience = [
  {
    role: "Software Development Intern",
    company: "Kredibble IT Limited",
    period: "February 2026 - June 2026",
    points: [
      "Assisted with an e-commerce mobile application for university students.",
      "Contributed to a web-based social media management system for multi-platform publishing.",
      "Supported feature implementation, testing, debugging, and usability improvements.",
    ],
  },
  {
    role: "Web Developer & Graphic Designer",
    company: "Intime Innovation Enterprise, Ghana",
    period: "2022 - Present",
    points: [
      "Design and develop responsive web applications with React, Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS.",
      "Build and maintain backend systems with Node.js, Express.js, MongoDB, and Prisma.",
      "Create digital branding assets and graphic materials for product presentation and client communication.",
    ],
  },
];

const education = [
  {
    title: "Diploma in Computer Science",
    body: "Paragon Executive Institute, Ghana. Graduated October 2025.",
  },
  {
    title: "Full-Stack Web Development",
    body: "SPtech Coders Academy. Certificate issued September 2025.",
  },
  {
    title: "JavaScript Programming",
    body: "Self-paced online course.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "suadikhussein2323@gmail.com",
    href: "mailto:suadikhussein2323@gmail.com",
  },
  {
    label: "Phone",
    value: "+233 257 936 341",
    href: "tel:+233257936341",
  },
  {
    label: "GitHub",
    value: "github.com/suadikhussein",
    href: "https://github.com/suadikhussein",
  },
  {
    label: "Portfolio",
    value: "suadik-portfolio.onrender.com",
    href: "https://suadik-portfolio.onrender.com",
  },
];

const stats = [
  { value: "2022", label: "Started professional design and web work" },
  { value: "MERN", label: "Core full-stack development focus" },
  { value: "Mobile", label: "React Native and APK workflow experience" },
];

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");
  return pages.some((page) => page.id === hash) ? hash : "home";
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [activePage, setActivePage] = useState(getInitialPage);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const handleLocationChange = () => setActivePage(getInitialPage());
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const activeLabel = useMemo(
    () => pages.find((page) => page.id === activePage)?.label ?? "Home",
    [activePage]
  );

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.history.pushState(null, "", `#${pageId}`);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" type="button" onClick={() => navigateTo("home")}>
          <span className="brand-mark">SH</span>
          <span className="brand-copy">
            <strong>Suadik Husseini</strong>
            <span>Full-Stack Web & Mobile Developer</span>
          </span>
        </button>

        <nav className="topnav" aria-label="Portfolio pages">
          {pages.map((page) => (
            <button
              className={page.id === activePage ? "topnav__item is-active" : "topnav__item"}
              key={page.id}
              type="button"
              onClick={() => navigateTo(page.id)}
              aria-current={page.id === activePage ? "page" : undefined}
            >
              {page.label}
            </button>
          ))}
        </nav>

        <ThemeToggle
          theme={theme}
          onToggle={() =>
            setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
          }
        />
      </header>

      <main className="page-layout" aria-labelledby="page-title">
        <p className="page-kicker">{activeLabel}</p>
        {activePage === "home" && <HomePage />}
        {activePage === "services" && <ServicesPage />}
        {activePage === "projects" && <ProjectsPage />}
        {activePage === "experience" && <ExperiencePage />}
        {activePage === "contact" && <ContactPage />}
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <section className="hero-view">
      <div className="hero-copy">
        <p className="eyebrow">Ghana-based developer, designer, and IT support provider</p>
        <h1 id="page-title">Building practical web, mobile, and design solutions from idea to deployment.</h1>
        <p className="hero-text">
          I am a results-driven Full-Stack Web and Mobile Developer with experience building
          responsive applications, RESTful APIs, authentication systems, database-driven products,
          deployment workflows, and client-facing graphic materials.
        </p>

        <div className="hero-actions">
          <button className="button button--primary" type="button" onClick={() => setHashPage("services")}>
            View Services
          </button>
          <a className="button button--secondary" href="/suadik-husseini-cv.pdf" download>
            Download CV
          </a>
        </div>

        <div className="stats-grid" aria-label="Profile highlights">
          {stats.map((item) => (
            <div className="stat-card" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="portrait-panel" aria-label="Portrait and profile summary">
        <img src="/suadik-profile.jpeg" alt="Portrait of Suadik Husseini" />
        <div className="portrait-panel__body">
          <span>Available for</span>
          <strong>Web apps, mobile app support, graphic design, documentation, and software setup.</strong>
        </div>
      </aside>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="content-view">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h1 id="page-title">A practical service mix for businesses, students, and growing digital products.</h1>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <ul>
              {service.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="capability-panel">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2>Technical skills from the CV</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(", ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <section className="content-view">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h1 id="page-title">Selected work across commerce, media uploads, mobile apps, and workflow dashboards.</h1>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
            <ul className="tag-list" aria-label={`${project.title} technologies`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.href && (
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                Open live project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperiencePage() {
  return (
    <section className="content-view">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h1 id="page-title">Development, design, and deployment work grounded in real project delivery.</h1>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-card" key={`${item.role}-${item.company}`}>
            <div className="timeline-card__meta">
              <span>{item.period}</span>
              <strong>{item.company}</strong>
            </div>
            <div>
              <h2>{item.role}</h2>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contact-view">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h1 id="page-title">Have a project, document, design, or setup task? Let's make it concrete.</h1>
        <p className="muted">
          I am available for internship, junior developer, freelance, design, documentation,
          and software installation opportunities.
        </p>
      </div>

      <div className="contact-grid">
        {contactLinks.map((item) => (
          <a className="contact-link" href={item.href} target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"} rel={item.label === "Email" || item.label === "Phone" ? undefined : "noreferrer"} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </a>
        ))}
      </div>

      <div className="contact-actions">
        <a className="button button--primary" href="mailto:suadikhussein2323@gmail.com">
          Send Email
        </a>
        <a className="button button--secondary" href="/suadik-husseini-cv.pdf" target="_blank" rel="noreferrer">
          View CV
        </a>
      </div>
    </section>
  );
}

function setHashPage(pageId) {
  window.history.pushState(null, "", `#${pageId}`);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
