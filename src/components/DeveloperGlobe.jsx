const regions = [
  {
    name: "Practical development mindset",
    detail: "Builds features with attention to usability, maintainability, and clean structure.",
  },
  {
    name: "Design and code crossover",
    detail: "Brings both graphic design awareness and frontend implementation into the same workflow.",
  },
  {
    name: "Growth-oriented execution",
    detail: "Focused on building real experience through projects, collaboration, and delivery.",
  },
];

export default function DeveloperGlobe() {
  return (
    <section className="utility-card utility-card--globe" aria-label="Developer profile">
      <div className="globe-visual" aria-hidden="true">
        <div className="globe-visual__ring globe-visual__ring--outer" />
        <div className="globe-visual__ring globe-visual__ring--inner" />
        <div className="globe-visual__core" />
      </div>

      <div className="globe-copy">
        <p className="eyebrow">How I work</p>
        <h2>Combining design awareness with full-stack implementation to deliver useful digital products.</h2>

        <ul className="signal-list">
          {regions.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
