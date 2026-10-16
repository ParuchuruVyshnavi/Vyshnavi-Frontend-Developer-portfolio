
"use client";

import { useState } from "react";

interface Experience {
    id: string;
    number: string;
    company: string;
    role: string;
    type: string;
    period: string;
    color: string;
    sticker: string;
    summary: string;
    tasks: string[];
    technologies: string[];
}

const experiences: Experience[] = [

    {
        id: "skilldzire",
        number: "01",
        company: "SkillDzire",
        role: "Frontend Development Intern",
        type: "FRONTEND DEVELOPMENT INTERNSHIP",
        period: "May 2026 – June 2026",
        color: "#d8c8ff",
        sticker: "LEARN & BUILD",
        summary:
            "Completed a frontend development internship focused on building web interfaces using HTML, CSS, JavaScript, and Web APIs.",
        tasks: [
            "Created structured web page layouts using HTML.",
            "Styled web interfaces and worked on responsive layouts using CSS.",
            "Used JavaScript to implement interactive webpage functionality.",
            "Explored Web APIs to connect frontend interfaces with browser or external API capabilities.",
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
    },


    {
        id: "inamigos",
        number: "02",
        company: "InAmigos",
        role: "Frontend Developer Intern",
        type: "FRONTEND DEVELOPMENT INTERNSHIP",
        period: "March 2026",
        color: "#b8e8dc",
        sticker: "BUILD & CREATE",
        summary:
            "Completed a frontend development internship focused on building web interfaces using HTML, CSS, and JavaScript. Developed an Emergency QR project as part of the practical work.",
        tasks: [
            "Created webpage structures using HTML.",
            "Styled the user interface using CSS.",
            "Implemented interactive functionality using JavaScript.",
            "Developed an Emergency QR project focused on making emergency-related information accessible through a QR code.",
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Emergency QR Project"],
    },

];

export default function ExperienceSection() {
    const [activeId, setActiveId] = useState<string>("skilldzire");

    const activeExperience =
        experiences.find((item) => item.id === activeId) ?? experiences[0];

    return (
        <section className="scrapbook-section" id="experience">
            <div className="scrapbook-container">
                <header className="scrapbook-heading">
                    <span className="scrapbook-eyebrow">
                        <span className="scrapbook-star">✳</span>
                        LITTLE NOTES FROM MY JOURNEY
                    </span>

                    <h2>
                        Experience <span>&</span>
                        <br />
                        Growth.
                    </h2>

                    <p>
                        Every experience leaves a mark. Here are some chapters
                        from my journey of learning, creating and growing.
                    </p>
                </header>

                <div className="scrapbook-workspace">
                    <div className="scrapbook-paper scrapbook-paper-back" />

                    <div className="scrapbook-paper scrapbook-main-paper">
                        <div className="scrapbook-paper-top">
                            <span>MY CAREER JOURNAL</span>
                            <span>VOL. 01 — 2026</span>
                        </div>

                        <div className="scrapbook-tabs" role="tablist" aria-label="Internship experiences">
                            {experiences.map((experience) => (
                                <button
                                    key={experience.id}
                                    id={`tab-${experience.id}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeId === experience.id}
                                    aria-controls="experience-entry"
                                    className={`scrapbook-tab ${activeId === experience.id ? "active" : ""
                                        }`}
                                    onClick={() => setActiveId(experience.id)}
                                >
                                    <span>{experience.number}</span>
                                    {experience.company}
                                </button>
                            ))}
                        </div>

                        <article
                            className="scrapbook-entry"
                            id="experience-entry"
                            role="tabpanel"
                            aria-labelledby={`tab-${activeExperience.id}`}
                            key={activeExperience.id}
                        >
                            <div className="scrapbook-entry-top">
                                <span className="scrapbook-entry-type">
                                    {activeExperience.type}
                                </span>
                                <span className="scrapbook-date">
                                    {activeExperience.period}
                                </span>
                            </div>

                            <div className="scrapbook-company-row">
                                <div
                                    className="scrapbook-company-mark"
                                    style={{ backgroundColor: activeExperience.color }}
                                >
                                    {activeExperience.company.slice(0, 1)}
                                </div>

                                <div className="scrapbook-company-info">
                                    <h3>{activeExperience.company}</h3>
                                    <p>{activeExperience.role}</p>
                                </div>
                            </div>

                            <div className="scrapbook-tape" aria-hidden="true" />

                            <div className="scrapbook-note">
                                <span className="scrapbook-note-label">
                                    A NOTE ABOUT THIS CHAPTER
                                </span>
                                <p>{activeExperience.summary}</p>
                            </div>

                            <div className="scrapbook-tasks">
                                <h4>THINGS I WORKED ON</h4>

                                {activeExperience.tasks.map((task, index) => (
                                    <div className="scrapbook-task" key={task}>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <p>{task}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="scrapbook-tech">
                                <span>TOOLS & TECHNOLOGIES</span>
                                <div className="scrapbook-tech-list">
                                    {activeExperience.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="scrapbook-sticker"
                                style={{ backgroundColor: activeExperience.color }}
                            >
                                <span>✳</span>
                                {activeExperience.sticker}
                            </div>
                        </article>

                        <div className="scrapbook-paper-bottom">
                            <span>MADE WITH CURIOSITY ♡</span>
                            <span>
                                PAGE {activeExperience.number} / 02
                            </span>
                        </div>
                    </div>

                    <div className="scrapbook-side-note">
                        <span className="scrapbook-side-star">✳</span>
                        <p>Small steps.</p>
                        <p>New skills.</p>
                        <p>Better ideas.</p>
                    </div>
                </div>

                <footer className="scrapbook-footer">
                    <span>THE JOURNEY CONTINUES</span>
                    <span className="scrapbook-footer-line" />
                    <span>ALWAYS LEARNING ↗</span>
                </footer>
            </div>
        </section>
    );
}
