const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Development", "Auth Flows"],
  },
  {
    title: "Data",
    items: ["MongoDB", "Data Storage", "Validation", "CRUD Systems"],
  },
  {
    title: "Tools & Design",
    items: ["Git & GitHub", "Postman", "Tailwind CSS", "Graphic Design"],
  },
];

export default function Skills() {
  return (
    <section className="section-block" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2>Technical strengths built through hands-on project work and day-to-day development practice.</h2>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
