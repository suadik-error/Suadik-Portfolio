export default function Project({ projects }) {
  return (
    <section className="section-block" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects framed around product clarity, maintainability, and speed.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-card__index">Case Study</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="project-card__stack" aria-label={`${project.title} tech stack`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href={project.href}>View details</a>
          </article>
        ))}
      </div>
    </section>
  );
}
