
"use client";

import { useState } from "react";

const planets = [
    { name: "HTML5", symbol: "HTML", className: "planet-html", detail: "Web Structure" },
    { name: "CSS3", symbol: "CSS", className: "planet-css", detail: "Visual Design" },
    { name: "JavaScript", symbol: "JS", className: "planet-js", detail: "Interactivity" },
    { name: "React", symbol: "⚛", className: "planet-react", detail: "UI Components" },
    { name: "Next.js", symbol: "N", className: "planet-next", detail: "React Framework" },
    { name: "GitHub", symbol: "GH", className: "planet-github", detail: "Code Repositories" },
];

export default function HeroUniverse() {
    const [activePlanet, setActivePlanet] = useState("React");

    const selectedPlanet =
        planets.find((planet) => planet.name === activePlanet) ?? planets[3];

    return (
        <section className="universe-hero" id="home">
            <div className="universe-stars" aria-hidden="true" />

            <div className="universe-content">
                <div className="universe-copy">
                    <p className="universe-eyebrow">
                        <span className="status-dot" />
                        WELCOME TO MY DIGITAL UNIVERSE
                    </p>

                    <h1>
                        Hi, I&apos;m
                        <br />
                        <span>Vyshnavi </span>
                    </h1>

                    <h2 className="typing-text">
                        <span>Frontend Developer</span>
                    </h2>

                    <p className="universe-description">
                        I turn creative ideas into responsive websites
                        and interactive digital experiences.
                    </p>

                    <div className="universe-buttons">
                        <a className="universe-primary" href="#projects">
                            Explore My Work <span>↗</span>
                        </a>

                        <a className="universe-secondary" href="/frontend resume.pdf">
                            Download My RESUME
                        </a>
                    </div>

                    <div className="universe-caption">
                        <span>CREATIVE THINKING</span>
                        <span className="caption-divider">/</span>
                        <span>FRONTEND DEVELOPMENT</span>
                    </div>
                </div>

                <div className="universe-visual">
                    <div className="universe-label">
                        <span className="status-dot" />
                        INTERACTIVE SKILL SYSTEM
                    </div>

                    <div className="universe-scene">
                        <div className="universe-glow" />

                        <div className="universe-orbit orbit-a">
                            <button
                                type="button"
                                className="universe-planet planet-html"
                                onMouseEnter={() => setActivePlanet("HTML5")}
                                onFocus={() => setActivePlanet("HTML5")}
                                onClick={() => setActivePlanet("HTML5")}
                                aria-label="HTML5: Web Structure"
                            >
                                HTML
                            </button>
                        </div>

                        <div className="universe-orbit orbit-b">
                            <button
                                type="button"
                                className="universe-planet planet-css"
                                onMouseEnter={() => setActivePlanet("CSS3")}
                                onFocus={() => setActivePlanet("CSS3")}
                                onClick={() => setActivePlanet("CSS3")}
                                aria-label="CSS3: Visual Design"
                            >
                                CSS
                            </button>
                        </div>

                        <div className="universe-orbit orbit-c">
                            <button
                                type="button"
                                className="universe-planet planet-js"
                                onMouseEnter={() => setActivePlanet("JavaScript")}
                                onFocus={() => setActivePlanet("JavaScript")}
                                onClick={() => setActivePlanet("JavaScript")}
                                aria-label="JavaScript: Interactivity"
                            >
                                JS
                            </button>
                        </div>

                        <div className="universe-orbit orbit-d">
                            <button
                                type="button"
                                className="universe-planet planet-react"
                                onMouseEnter={() => setActivePlanet("React")}
                                onFocus={() => setActivePlanet("React")}
                                onClick={() => setActivePlanet("React")}
                                aria-label="React: UI Components"
                            >
                                ⚛
                            </button>
                        </div>

                        <div className="universe-orbit orbit-e">
                            <button
                                type="button"
                                className="universe-planet planet-next"
                                onMouseEnter={() => setActivePlanet("Next.js")}
                                onFocus={() => setActivePlanet("Next.js")}
                                onClick={() => setActivePlanet("Next.js")}
                                aria-label="Next.js: React Framework"
                            >
                                N
                            </button>
                        </div>

                        <div className="universe-orbit orbit-f">
                            <button
                                type="button"
                                className="universe-planet planet-github"
                                onMouseEnter={() => setActivePlanet("GitHub")}
                                onFocus={() => setActivePlanet("GitHub")}
                                onClick={() => setActivePlanet("GitHub")}
                                aria-label="GitHub: Code Repositories"
                            >
                                GH
                            </button>
                        </div>

                        <div className="universe-core">
                            <div className="core-inner">
                                <img
                                    src="/vyshnavi.jpeg"
                                    alt="Vyshnavi"
                                    className="core-photo"
                                />
                            </div>
                        </div>

                        <div className="universe-info" aria-live="polite">
                            <div>
                                <span className="info-label">SELECTED TECHNOLOGY</span>
                                <h3>{selectedPlanet.name}</h3>
                            </div>
                            <span className="info-detail">{selectedPlanet.detail}</span>
                        </div>

                        <p className="universe-hint">
                            ↗ Hover over or tap a planet to explore
                        </p>
                    </div>
                </div>

                <a className="universe-scroll" href="#about">
                    <span className="scroll-line" />
                    SCROLL TO EXPLORE
                </a>
            </div>
        </section>
    );
}
