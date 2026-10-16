
"use client";


const mindNodes = [
  {
    id: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive web experiences.",
    icon: "⌘",
    className: "mind-frontend",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    id: "02",
    title: "Creative Thinking",
    description: "Turning ideas into engaging digital experiences.",
    icon: "✳",
    className: "mind-creative",
    tags: ["UI Design", "Visuals", "Innovation"],
  },
  {
    id: "03",
    title: "Problem Solving",
    description: "Breaking challenges into practical solutions.",
    icon: "⌘",
    className: "mind-problem",
    tags: ["Logic", "Debugging", "Learning"],
  },
  {
    id: "04",
    title: "Continuous Learning",
    description: "Exploring modern tools and improving every day.",
    icon: "↗",
    className: "mind-learning",
    tags: ["Projects", "Experimenting", "Growth"],
  },
];

export default function AboutSection() {
  return (
    <section className="mind-about" id="about">
      <div className="mind-about-container">
        <div className="mind-heading">
          <span className="mind-eyebrow">
            <span className="mind-live-dot" />
            BEYOND THE CODE
          </span>

          <h2>
            A mind full of ideas.
            <br />
            <span>A world built with code.</span>
          </h2>

          <p>
            Get to know the ideas, skills, and curiosity
            behind my digital journey.
          </p>
        </div>

        <div className="mind-map">
          <svg
            className="mind-connections"
            viewBox="0 0 800 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="mindLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#67e8f9" />
              </linearGradient>
            </defs>

            <path d="M400 250 L205 115" />
            <path d="M400 250 L595 115" />
            <path d="M400 250 L205 385" />
            <path d="M400 250 L595 385" />

            <circle cx="205" cy="115" r="4" />
            <circle cx="595" cy="115" r="4" />
            <circle cx="205" cy="385" r="4" />
            <circle cx="595" cy="385" r="4" />
          </svg>

          <div className="mind-center">
            <div className="mind-center-ring">
              <div className="mind-center-core">
                <span className="mind-avatar-symbol">V.</span>
              </div>
            </div>

            <span className="mind-center-status">
              <span className="mind-live-dot" />
              DEVELOPER PROFILE
            </span>

            <h3>Vyshnavi</h3>
            <p>Frontend Developer</p>
            <span className="mind-center-code">
              {"<"} ideas → interfaces {"/>"}
            </span>
          </div>

          {mindNodes.map((node) => (
            <article
              key={node.id}
              className={`mind-node ${node.className}`}
            >
              <div className="mind-node-top">
                <span className="mind-node-icon">{node.icon}</span>
                <span className="mind-node-id">{node.id} / 04</span>
              </div>

              <h3>{node.title}</h3>
              <p>{node.description}</p>

              <div className="mind-tags">
                {node.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mind-bottom">
          <span className="mind-bottom-mark">✳</span>
          <p>
            Curious by nature. Creative by choice.
            <span> Always building, always learning.</span>
          </p>
          <a href="#projects">
            Explore my projects <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
