const focusAreas = [
  "Responsive interfaces",
  "MERN application development",
  "API and database integration",
];

export default function Hero() {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <p className="eyebrow">Based in Ghana | Computer Science Student | Full-Stack Developer</p>
        <h1>Developing modern web applications with strong frontend execution and reliable backend foundations.</h1>
        <p className="hero-text">
          I am a motivated Computer Science student and MERN stack developer
          with practical experience building responsive interfaces, backend
          systems, and portfolio-ready digital products. I currently work at
          Intime Innovation Enterprise, where I contribute as a Web Developer
          and Graphic Designer.
        </p>

        <div className="hero-actions">
          <a className="button button--primary" href="#projects">
            Explore Projects
          </a>
          <a className="button button--secondary" href="#contact">
            Start a Conversation
          </a>
        </div>

        <ul className="hero-tags" aria-label="Focus areas">
          {focusAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <aside className="hero-card">
        <p className="hero-card__label">Professional profile</p>
        <div className="hero-card__grid">
          <div>
            <span>Frontend expertise</span>
            <strong>React, JavaScript, Tailwind CSS, Responsive UI</strong>
          </div>
          <div>
            <span>Backend development</span>
            <strong>Node.js, Express, REST API workflows</strong>
          </div>
          <div>
            <span>Database focus</span>
            <strong>MongoDB integration and dynamic data handling</strong>
          </div>
          <div>
            <span>Working style</span>
            <strong>Practical, collaborative, detail-oriented</strong>
          </div>
        </div>
      </aside>
    </section>
  );
}
