import { useMemo, useState } from "react";

const profile = {
  name: "Suadik Husseini",
  location: "Ghana",
  phone: "+233 257 936 341",
  email: "suadikhussein2323@email.com",
  github: "github.com/suadik-error",
  portfolio: "suadikportfolio.com",
  summary:
    "Suadik Husseini is a motivated Computer Science student and full-stack web developer with practical MERN stack experience. He currently works at Intime Innovation Enterprise as a Web Developer and Graphic Designer, contributing to web solutions and digital design work.",
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    backend: ["Node.js", "Express.js", "REST API Development"],
    database: ["MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "npm"],
    other: [
      "Graphic Design",
      "UI/UX Design",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
  experience:
    "Suadik has worked as a Web Developer and Graphic Designer at Intime Innovation Enterprise in Ghana since 2022. His responsibilities include designing responsive websites, building frontend interfaces with React and modern CSS, developing backend systems with Node.js and Express, integrating MongoDB for dynamic content, and supporting client-facing branding work.",
  education:
    "He is currently pursuing a Diploma in Computer Science at SIDEP Institute in Ghana, starting in April 2025. His coursework includes Web Development, Database Systems, and Software Development.",
  projects: [
    "an Online Shopping and Delivery Platform built with React, Node.js, Express, and MongoDB, featuring authentication, product uploads, shopping cart flow, checkout, and backend APIs",
    "a Media Upload Web Application built with Node.js, Express, and MongoDB, including registration, login, media uploads, and server-side file handling",
  ],
  certifications: [
    "Full-Stack Web Development (MERN Stack)",
    "JavaScript Programming",
  ],
  interests: [
    "Web Application Development",
    "Technology Innovation",
    "Entrepreneurship",
    "Startups and Digital Businesses",
  ],
};

const quickPrompts = [
  "Tell me about Suadik",
  "What skills does he have?",
  "Show work experience",
  "List projects",
  "How can I contact him?",
];

const defaultReply =
  "You can ask about Suadik's professional summary, technical skills, current role, education, projects, certifications, interests, or contact details.";

function buildReply(input) {
  const message = input.toLowerCase();

  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("phone")
  ) {
    return `You can reach ${profile.name} in ${profile.location} by phone at ${profile.phone}, by email at ${profile.email}, on GitHub at ${profile.github}, or through ${profile.portfolio}. He is open to internship, junior developer, and selected freelance opportunities.`;
  }

  if (
    message.includes("skill") ||
    message.includes("stack") ||
    message.includes("tech")
  ) {
    return `${profile.name}'s core strengths include frontend development with ${profile.skills.frontend.join(", ")}, backend development with ${profile.skills.backend.join(", ")}, database experience with ${profile.skills.database.join(", ")}, and workflow tools such as ${profile.skills.tools.join(", ")}. He also brings added value through ${profile.skills.other.join(", ")}.`;
  }

  if (
    message.includes("experience") ||
    message.includes("work") ||
    message.includes("job")
  ) {
    return profile.experience;
  }

  if (message.includes("project")) {
    return `Featured projects include ${profile.projects.join(
      " and "
    )}. These projects reflect his ability to work across both frontend and backend concerns in practical web applications.`;
  }

  if (
    message.includes("education") ||
    message.includes("study") ||
    message.includes("school")
  ) {
    return profile.education;
  }

  if (
    message.includes("certification") ||
    message.includes("certificate")
  ) {
    return `${profile.name} holds certifications in ${profile.certifications.join(
      " and "
    )}.`;
  }

  if (message.includes("interest")) {
    return `Current interests include ${profile.interests.join(", ")}.`;
  }

  if (message.includes("summary") || message.includes("about") || message.includes("suadik")) {
    return profile.summary;
  }

  return defaultReply;
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: `Hi, I'm the portfolio assistant. I can answer questions about ${profile.name}'s background, technical skills, work experience, projects, and contact details.`,
    },
  ]);
  const [input, setInput] = useState("");

  const visiblePrompts = useMemo(() => quickPrompts, []);

  function sendMessage(text) {
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "bot", text: buildReply(trimmed) },
    ]);
    setInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <section className="utility-card utility-card--chat">
      <p className="eyebrow">Portfolio assistant</p>
      <h2>Ask about experience, projects, strengths, education, or how to reach Suadik.</h2>
      <p className="muted">
        The replies are now written to sound more natural, professional, and
        aligned with your portfolio profile.
      </p>

      <div className="chat-preview" aria-live="polite">
        {messages.map((message, index) => (
          <div
            className={`chat-bubble ${
              message.role === "bot" ? "chat-bubble--bot" : "chat-bubble--user"
            }`}
            key={`${message.role}-${index}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-prompt-list">
        {visiblePrompts.map((prompt) => (
          <button
            className="chat-chip"
            key={prompt}
            type="button"
            onClick={() => sendMessage(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          className="chat-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask something about Suadik..."
        />
        <button className="button button--primary" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
