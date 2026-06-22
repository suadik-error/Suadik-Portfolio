export default function Contact() {
  return (
    <section className="contact-panel" id="contact">
      <div className="section-heading section-heading--compact">
        <p className="eyebrow">Contact</p>
        <h2>Need a frontend refresh or a full stack build? Let's make the scope concrete.</h2>
        <p className="muted">
          Based in Ghana and available for junior developer, and selected freelance opportunities.
        </p>
      </div>

      <div className="contact-grid">
        <a className="contact-link" href="mailto:suadikhussein2323@email.com">
          <span>Email</span>
          <strong>suadikhussein2323@email.com</strong>
        </a>

        <a
          className="contact-link"
          href="https://github.com/suadik-error"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <strong>github.com/suadik-error</strong>
        </a>

        <a className="contact-link" href="tel:+233257936341">
          <span>Phone</span>
          <strong>+233 257 936 341</strong>
        </a>

        <a
          className="contact-link"
          href="https://suadikportfolio.com"
          target="_blank"
          rel="noreferrer"
        >
          <span>Portfolio</span>
          <strong>suadikportfolio.com</strong>
        </a>
      </div>
    </section>
  );
}
