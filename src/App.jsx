import { useEffect, useState } from "react";
import "./App.css";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import DeveloperGlobe from "./components/DeveloperGlobe";
import GithubActivity from "./components/GithubActivity";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Terminal from "./components/Terminal";
import ThemeToggle from "./components/ThemeToggle";

const projectList = [
  {
    title: "Online Shopping & Delivery Platform",
    description:
      "A full-stack e-commerce solution built around authentication, product uploads, shopping cart flow, checkout behavior, and backend APIs for managing users and products.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    href: "https://e-commerce-1-5umj.onrender.com",
  },
  {
    title: "Media Upload Web Application",
    description:
      "A media management application that supports registration, login, and image or video uploads, with server-side storage handling and MongoDB-backed content management.",
    stack: ["Node.js", "Express", "MongoDB", "Auth"],
    href: "#projects",
  },
  {
    title: "Portfolio Assistant Experience",
    description:
      "An interactive portfolio experience designed to present technical skills, project work, and professional background in a clearer and more engaging way.",
    stack: ["React", "Vite", "CSS", "UI Design"],
    href: "#contact",
  },
];

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app-shell">
      <div className="app-background" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">SH</span>
          <span className="brand-copy">
            <strong>Suadik Husseini</strong>
            <span>Full Stack Developer</span>
          </span>
        </a>

        <nav className="topnav" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <ThemeToggle
          theme={theme}
          onToggle={() =>
            setTheme((currentTheme) =>
              currentTheme === "dark" ? "light" : "dark"
            )
          }
        />
      </header>

      <main className="page-layout" id="home">
        <Hero />

        <section className="section-grid" aria-label="Highlights">
          <Terminal />
          <DeveloperGlobe />
        </section>

        <Skills />

        <Project projects={projectList} />

        <section className="section-grid section-grid--secondary">
          <GithubActivity />
          <Chatbot />
        </section>

        <Contact />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <span className="site-footer__eyebrow">Suadik Husseini</span>
            <h2>Full-Stack Developer building practical web experiences with React, Node.js, and MongoDB.</h2>
          </div>

          <div className="site-footer__links">
            <div className="footer-column">
              <span className="footer-column__title">Navigation</span>
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <span className="footer-column__title">Connect</span>
              <a href="mailto:suadikhussein2323@email.com">suadikhussein2323@email.com</a>
              <a href="tel:+233257936341">+233 257 936 341</a>
              <a href="https://github.com/suadik-error" target="_blank" rel="noreferrer">
                github.com/suadik-error
              </a>
              <a href="https://suadikportfolio.com" target="_blank" rel="noreferrer">
                suadikportfolio.com
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>Based in Ghana</span>
          <span>Open to internship, junior developer, and freelance opportunities</span>
        </div>
      </footer>
    </div>
  );
}
