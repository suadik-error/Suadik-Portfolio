const stats = [
  { value: "2022", label: "Started professional client work" },
  { value: "2", label: "Featured portfolio projects" },
  { value: "MERN", label: "Primary application stack" },
];

export default function GithubActivity() {
  return (
    <section className="utility-card">
      <p className="eyebrow">Career snapshot</p>
      <h2>Early-stage developer with practical experience, active project work, and a clear full-stack direction.</h2>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
