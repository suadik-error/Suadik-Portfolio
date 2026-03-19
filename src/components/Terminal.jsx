const commands = [
  "$ profile --summary",
  "Computer Science student and MERN stack developer",
  "$ role --current",
  "Web Developer and Graphic Designer at Intime Innovation Enterprise",
  "$ target --next",
  "Internship and junior developer opportunities",
];

export default function Terminal() {
  return (
    <section className="utility-card utility-card--terminal" aria-label="Developer terminal">
      <div className="utility-card__header">
        <span />
        <span />
        <span />
      </div>

      <div className="terminal-lines">
        {commands.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
