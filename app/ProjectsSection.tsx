"use client";

import { useEffect, useState } from "react";
import "./projects.css";

type Project = {
  title: string;
  description: string;
  category: "Web Apps" | "UI Design" | "Mini Projects";
  tech: string[];
  repo: string;
  demo?: string;
  icon: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Emergency QR System",
    description: "Quick access to emergency contacts and important information through a QR code.",
    category: "Web Apps",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "emergency_qr-ui",
    demo:"https://vyshu-emergency-qr.netlify.app/",
    icon: "🆘",
    featured: true,
  },
  {
  title: "Music Player",
  description: "A browser-based music player interface.",
  category: "Mini Projects",
  tech: ["HTML", "CSS", "JavaScript"],
  repo: "music-player",
  demo:"https://music-player-two-eosin.vercel.app/",
  icon: "🎵",
},
{
  title: "Stopwatch",
  description: "A stopwatch with start, pause and reset controls.",
  category: "Mini Projects",
  tech: ["HTML", "CSS", "JavaScript"],
  repo: "Stop-watch-web-application",
  demo:"https://vyshnavi-stop-watch-web-application.vercel.app/",
  icon: "⏱️",
},
{
  title: "Login Page UI",
  description: "A login page interface with a clean layout.",
  category: "UI Design",
  tech: ["HTML", "CSS", "JavaScript"],
  repo: "login_page-ui",
  demo:"https://vyshnavi-login-page-ui.netlify.app/",
  icon: "🔐",
},
{
  title: "Blood Page UI",
  description: "A UI concept for blood donation-related information.",
  category: "UI Design",
  tech: ["HTML", "CSS", "JavaScript"],
  repo: "blood-page-ui",
  demo:"https://vyshnavi-blood-page-ui.vercel.app/",
  icon: "🩸",
},
{
  title: "CSK IPL Team UI",
  description: "A cricket team-themed web interface.",
  category: "UI Design",
  tech: ["HTML", "CSS", "JavaScript"],
  repo: "csk_ipl_team-ui",
  demo:"https://vyshnavi-csk-ipl-team-ui.netlify.app/",
  icon: "🏏",
},
{
  title: "Profile Card",
  description: "A compact profile card interface.",
  category: "UI Design",
  tech: ["HTML", "CSS"],
  repo: "profile-card",
  demo:"https://vyshnavi-profile-card.netlify.app/",
  icon: "👤",
},
{
  title: "Quiz Game",
  description: "An interactive quiz game.",
  category: "Mini Projects",
  tech: ["HTML", "CSS", "JavaScript"],
  repo: "Quiz-Game-Application",
  demo:"https://vyshnavi-quiz-game-application.vercel.app/",
  icon: "❓",
},
{
  title: "Tic-Tac-Toe",
  description: "A classic two-player browser game.",
  category: "Mini Projects",
  tech: ["HTML", "CSS", "JavaScript"],
  repo: "TIC-TAC-TOE-web-application",
  demo:"https://vyshnavi-tic-tac-toe-web-applicatio.vercel.app/",
  icon: "⭕",
},
{
  title: "Content Writer Portfolio",
  description: "A portfolio for showcasing writing and content work.",
  category: "UI Design",
  tech: ["HTML", "CSS", "JavaScript"],
  repo: "content-writer-portfolio",
  demo:"https://vyshnavi-content-portfolio.netlify.app/",
  icon: "✍️",
},
  {
    title: "Voice Translator",
    description: "A voice translation interface for communicating across languages.",
    category: "Web Apps",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "voice-translator",
    demo:"https://voice-translator-weld.vercel.app/",
    icon: "🎙️",
    featured: true,
  },
  {
    title: "College Timetable Generator",
    description: "A project for generating and organizing college timetables.",
    category: "Web Apps",
    tech: ["JavaScript", "CSS"],
    repo: "automatic-college-timetable-generator",
    demo:"https://vyshu-automatic-college-timetable-g.vercel.app/",
    icon: "📅",
    featured: true,
  },
  {
    title: "AgriConnect",
    description: "An agriculture-focused project connecting users with farming resources.",
    category: "Web Apps",
    tech: ["React", "JavaScript"],
    repo: "AgriConnect",
    demo:"https://agriconnect-vyshnavi.netlify.app/",
    icon: "🌱",
    featured: true,
  },
  {
    title: "Weather App",
    description: "A weather interface for checking conditions and forecasts.",
    category: "Web Apps",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "Weather-app",
    demo:"https://weather-app-pi-steel-60.vercel.app/",
    icon: "🌦️",
  },
 
  
  {
    title: "Dental Clinic Website",
    description: "A clinic website concept focused on services and a clean user experience.",
    category: "UI Design",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "client_project",
    demo:"https://vyshuclientproject.netlify.app/",
    icon: "🦷",
  },
  {
    title: "Portfolio Website",
    description: "A personal website for presenting skills and projects.",
    category: "UI Design",
    tech: ["Next.js", "CSS"],
    repo: "portfolio-website-6rbg",
    demo:"https://portfolio-website-6rbg.vercel.app/",
    icon: "💻",
  },
  {
    title: "Calculator",
    description: "A simple interactive calculator.",
    category: "Mini Projects",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "calculator-web-application",
    demo:"https://vyshnavi-calculator-web-application.vercel.app/",
    icon: "🧮",
  },
  {
    title: "To-Do List",
    description: "A small task-management application.",
    category: "Mini Projects",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "personal-to-do-list",
    demo:"https://vyshu-personal-to-do-list.vercel.app/",
    icon: "✅",
  },
  {
    title: "Typing Speed Test",
    description: "A typing practice interface to test speed and accuracy.",
    category: "Mini Projects",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "typing-speed-test",
    demo:"https://typing-speed-test-roan.vercel.app/",
    icon: "⌨️",
  },
  {
    title: "Snake Game",
    description: "A classic snake game built for the browser.",
    category: "Mini Projects",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "snake-game",
    demo:"https://snake-game-mocha-gamma.vercel.app/",
    icon: "🐍",
  },
  {
    title: "Rock Paper Scissors",
    description: "A quick interactive game against the computer.",
    category: "Mini Projects",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "rock-paper-scissor-game",
    demo:"https://rock-paper-scissor-game-one-coral.vercel.app/",
    icon: "✊",
  },
  {
    title: "Quote App",
    description: "A small app for displaying inspirational quotes.",
    category: "Mini Projects",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "Quote_app_web-application",
    demo:"https://vyshu-quote-app-web-application.vercel.app/",
    icon: "💬",
  },
  {
    title: "Alarm Clock",
    description: "A browser-based clock and alarm interface.",
    category: "Mini Projects",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "Alaram_clock_app",
    demo:"https://vyshu-alaram-clock.vercel.app/",
    icon: "⏰",
  },
];

const categories = ["All", "Featured", "Web Apps", "UI Design", "Mini Projects"];

function GitHubLink (repo: string ) {
  

  return `https://github.com/paruchuruvyshnavi/${repo}`;
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="project-actions">
      <a
        className="project-github"
        href={GitHubLink(project.repo)}
        target="_blank"
        rel=" noopener noreferrer"
      >
        GitHub ↗
      </a>

      {project.demo ? (
        <a
          className="project-demo"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo ↗
        </a>
      ) : (
        <span className="demo-pending">Demo URL not added</span>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [category, setCategory] = useState("All");
  const [slide, setSlide] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const webApps = projects.filter((p) => p.category === "Web Apps");
  const uiProjects = projects.filter((p) => p.category === "UI Design");
  const miniProjects = projects.filter((p) => p.category === "Mini Projects");

  useEffect(() => {
    if (category !== "All" || selected) return;

    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % featured.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [category, selected, featured.length]);

  const active = featured[slide];

  function showCategory(next: string) {
    setCategory(next);
    setSelected(null);
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-heading">
          <span className="projects-eyebrow">SELECTED WORK / 2026</span>
          <h2>
            Projects<span>.</span>
          </h2>
          <p>Ideas, experiments, and digital experiences I have built.</p>
        </header>

        <nav className="project-filters" aria-label="Project categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "filter-button active" : "filter-button"}
              onClick={() => showCategory(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* ALL: cinematic carousel */}
        {category === "All" && !selected && (
          <>
            <div className="hero-project">
              <div className="hero-art">
                <div className="hero-orbit orbit-one" />
                <div className="hero-orbit orbit-two" />
                <div className="hero-project-icon">{active.icon}</div>
                <span className="hero-index">
                  0{slide + 1} / 0{featured.length}
                </span>
              </div>

              <div className="hero-copy">
                <span className="project-label">FEATURED PROJECT</span>
                <h3>{active.title}</h3>
                <p>{active.description}</p>

                <div className="tech-tags">
                  {active.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <ProjectActions project={active} />

                <div className="slide-controls">
                  <button
                    aria-label="Previous project"
                    onClick={() =>
                      setSlide((slide - 1 + featured.length) % featured.length)
                    }
                  >
                    ←
                  </button>
                  <div className="slide-dots">
                    {featured.map((project, index) => (
                      <button
                        key={project.title}
                        aria-label={`Show ${project.title}`}
                        className={slide === index ? "slide-dot active" : "slide-dot"}
                        onClick={() => setSlide(index)}
                      />
                    ))}
                  </div>
                  <button
                    aria-label="Next project"
                    onClick={() => setSlide((slide + 1) % featured.length)}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            <button
              className="explore-button"
              onClick={() => showCategory("Explore")}
            >
              Explore More Projects <span>↗</span>
            </button>
          </>
        )}

        {/* EXPLORE: interactive constellation */}
        {category === "Explore" && !selected && (
          <div className="constellation-layout">
            <div className="constellation">
              <button
                className="galaxy-center"
                onClick={() => showCategory("All")}
              >
                <span>✦</span>
                <strong>MY WORK</strong>
                <small>{projects.length} projects</small>
              </button>

              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={`galaxy-node node-${index % 8}`}
                  style={{
                    left: `${50 + 40 * Math.cos((index / projects.length) * Math.PI * 2)}%`,
                    top: `${50 + 39 * Math.sin((index / projects.length) * Math.PI * 2)}%`,
                  }}
                  onClick={() => setSelected(project)}
                  title={project.title}
                >
                  <span>{project.icon}</span>
                  <small>{project.title}</small>
                </button>
              ))}
            </div>
            <aside className="constellation-hint">
              <span>INTERACTIVE PROJECT MAP</span>
              <h3>Explore my universe.</h3>
              <p>Select any node to view its details, tech stack, and repository.</p>
              <p className="map-count">{projects.length} projects · 3 categories</p>
            </aside>
          </div>
        )}

        {/* FEATURED: large showcase cards */}
        {category === "Featured" && !selected && (
          <div className="featured-grid">
            {featured.map((project, index) => (
              <article className={`featured-card featured-card-${index}`} key={project.title}>
                <button className="featured-art" onClick={() => setSelected(project)}>
                  <span>{project.icon}</span>
                  <small>FEATURED / 0{index + 1}</small>
                </button>
                <div className="featured-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <ProjectActions project={project} />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* WEB APPS: sidebar and browser-style preview */}
        {category === "Web Apps" && (
          <div className="webapp-layout">
            <aside className="webapp-sidebar">
              <span>APP DIRECTORY</span>
              {webApps.map((project) => (
                <button
                  key={project.title}
                  onClick={() => setSelected(project)}
                >
                  <span>{project.icon}</span>
                  {project.title}
                  <b>↗</b>
                </button>
              ))}
            </aside>

            <div className="webapp-preview">
              <div className="browser-bar">
                <i /><i /><i />
                <span>PROJECT_PREVIEW.exe</span>
              </div>
              <div className="browser-content">
                <span className="preview-icon">
                  {selected?.icon ?? "▣"}
                </span>
                <span className="project-label">WEB APPLICATION</span>
                <h3>{selected?.title ?? "Choose an application"}</h3>
                <p>
                  {selected?.description ??
                    "Select a project from the directory to inspect its details."}
                </p>
                {selected && (
                  <>
                    <div className="tech-tags">
                      {selected.tech.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                    <ProjectActions project={selected} />
                    <button className="text-button" onClick={() => setSelected(null)}>
                      ← Back to directory
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* UI DESIGN: image-led gallery */}
        {category === "UI Design" && !selected && (
          <div className="design-gallery">
            {uiProjects.map((project, index) => (
              <button
                key={project.title}
                className={`design-tile design-tile-${index % 3}`}
                onClick={() => setSelected(project)}
              >
                <span className="design-art">{project.icon}</span>
                <span className="design-info">
                  <small>INTERFACE STUDY / 0{index + 1}</small>
                  <strong>{project.title}</strong>
                  <span>{project.tech.join(" · ")}</span>
                </span>
                <span className="design-arrow">↗</span>
              </button>
            ))}
          </div>
        )}

        {/* MINI PROJECTS: compact icon tiles */}
        {category === "Mini Projects" && !selected && (
          <div className="mini-grid">
            {miniProjects.map((project, index) => (
              <button
                className={`mini-tile mini-color-${index % 6}`}
                key={project.title}
                onClick={() => setSelected(project)}
              >
                <span className="mini-icon">{project.icon}</span>
                <span className="mini-info">
                  <strong>{project.title}</strong>
                  <small>{project.tech.join(" / ")}</small>
                </span>
                <span className="mini-arrow">↗</span>
              </button>
            ))}
          </div>
        )}

        {/* Explore selected project detail */}
        {category === "Explore" && selected && (
          <div className="selected-project">
            <button className="text-button" onClick={() => setSelected(null)}>
              ← Back to constellation
            </button>
            <span className="selected-icon">{selected.icon}</span>
            <span className="project-label">{selected.category.toUpperCase()}</span>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <div className="tech-tags">
              {selected.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <ProjectActions project={selected} />
          </div>
        )}

        {/* Other category project detail */}
        {category !== "All" && category !== "Explore" && category !== "Web Apps" && selected && (
          <div className="selected-project">
            <button className="text-button" onClick={() => setSelected(null)}>
              ← Back to {category}
            </button>
            <span className="selected-icon">{selected.icon}</span>
            <span className="project-label">{selected.category.toUpperCase()}</span>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <div className="tech-tags">
              {selected.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <ProjectActions project={selected} />
          </div>
        )}

        <footer className="projects-footer">
          <span>END OF COLLECTION</span>
          <a
            href="https://github.com/paruchuruvyshnavi"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub ↗
          </a>
        </footer>
      </div>
    </section>
  );
}