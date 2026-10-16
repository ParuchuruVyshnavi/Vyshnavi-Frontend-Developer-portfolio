
"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

interface Skill {
  id: string;
  name: string;
  short: string;
  x: number;
  y: number;
  category: string;
  description: string;
  details: string;
  applications: string[];
  color: string;
}

type Connection = [number, number];

interface NodeStyle extends CSSProperties {
  "--node-color": string;
}

const skills: Skill[] = [
  {
    id: "html",
    name: "HTML5",
    short: "HTML",
    x: 12,
    y: 22,
    category: "STRUCTURE & SEMANTICS",
    description:
      "The foundation of modern web pages, used to structure meaningful and accessible content.",
    details:
      "HTML5 provides semantic elements that organize content clearly for browsers, users, and search engines. It supports forms, multimedia, links, tables, and accessible page structures.",
    applications: [
      "Semantic HTML elements",
      "Forms and input validation",
      "Accessible page structure",
      "Images, links and multimedia",
    ],
    color: "#fb923c",
  },
  {
    id: "css",
    name: "CSS3",
    short: "CSS",
    x: 33,
    y: 12,
    category: "STYLING & ANIMATIONS",
    description:
      "Transforms structured HTML into attractive, responsive and visually engaging interfaces.",
    details:
      "CSS controls layouts, colors, typography, spacing, transitions and animations. Flexbox and Grid help create layouts that adapt to different screen sizes.",
    applications: [
      "Flexbox and CSS Grid",
      "Responsive layouts",
      "Transitions and keyframe animations",
      "Custom themes and visual effects",
    ],
    color: "#60a5fa",
  },
  {
    id: "js",
    name: "JavaScript",
    short: "JS",
    x: 53,
    y: 22,
    category: "LOGIC & INTERACTIVITY",
    description:
      "Brings websites to life with dynamic behavior, user interactions and application logic.",
    details:
      "JavaScript enables interactive components, event handling, DOM manipulation, asynchronous operations and API integration. It is also the programming foundation for React and many modern web frameworks.",
    applications: [
      "DOM manipulation and events",
      "Functions, arrays and objects",
      "Promises and async/await",
      "Fetching and displaying API data",
    ],
    color: "#facc15",
  },
  {
    id: "typescript",
    name: "TypeScript",
    short: "TS",
    x: 76,
    y: 37,
    category: "TYPED JAVASCRIPT",
    description:
      "Enhances JavaScript with static typing to build more reliable and maintainable frontend applications.",
    details:
      "TypeScript adds a type system to JavaScript. Interfaces, type aliases, generics and type inference help catch type-related errors during development and make component props, application data and reusable code easier to maintain.",
    applications: [
      "Interfaces and type aliases",
      "Typing React props and state",
      "Type checking and type inference",
      "Safer React and Next.js development",
    ],
    color: "#60a5fa",
  },
  {
    id: "react",
    name: "React.js",
    short: "R",
    x: 79,
    y: 12,
    category: "COMPONENT-BASED UI",
    description:
      "A JavaScript library for building reusable components and interactive user interfaces.",
    details:
      "React organizes interfaces into reusable components. Props pass data between components, while state helps update the interface when data changes. Hooks such as useState and useEffect support interactive behavior and side effects.",
    applications: [
      "Reusable functional components",
      "Props and state management",
      "React Hooks",
      "Interactive single-page interfaces",
    ],
    color: "#22d3ee",
  },
  {
    id: "next",
    name: "Next.js",
    short: "N",
    x: 85,
    y: 65,
    category: "REACT WEB FRAMEWORK",
    description:
      "A React framework for building web applications with routing and flexible rendering options.",
    details:
      "Next.js adds file-based routing, layouts, server rendering options, static generation and server-side capabilities to React. Its App Router organizes pages and layouts using the app directory.",
    applications: [
      "App Router and layouts",
      "File-based navigation",
      "Server and client components",
      "Rendering and performance optimization",
    ],
    color: "#e9d5ff",
  },
  {
    id: "git",
    name: "Git & GitHub",
    short: "GH",
    x: 61,
    y: 82,
    category: "VERSION CONTROL",
    description:
      "Tools for tracking code changes, managing projects and sharing repositories.",
    details:
      "Git records changes in a codebase and helps developers work with branches and commits. GitHub hosts Git repositories and supports collaboration through pull requests, issues and project workflows.",
    applications: [
      "Repositories and commits",
      "Branches and merging",
      "GitHub project collaboration",
      "Publishing portfolio projects",
    ],
    color: "#c084fc",
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    short: "UX",
    x: 34,
    y: 72,
    category: "USER EXPERIENCE",
    description:
      "Combines visual interface design with usability to make digital products intuitive and accessible.",
    details:
      "UI design focuses on the visual elements people interact with, while UX focuses on the overall user journey. Wireframes, prototypes, consistent design systems and usability testing help improve digital experiences.",
    applications: [
      "Wireframes and prototypes",
      "Typography and color systems",
      "Visual hierarchy",
      "Usability and accessibility principles",
    ],
    color: "#f472b6",
  },
  {
    id: "responsive",
    name: "Responsive Design",
    short: "RWD",
    x: 12,
    y: 49,
    category: "MULTI-DEVICE DESIGN",
    description:
      "Ensures websites remain usable and visually consistent across mobile, tablet and desktop screens.",
    details:
      "Responsive design uses flexible layouts, relative sizing, responsive images and CSS media queries to adapt interfaces to different viewports. A mobile-first approach helps prioritize essential content on smaller screens.",
    applications: [
      "Mobile-first development",
      "CSS media queries",
      "Flexible grids and images",
      "Cross-device testing",
    ],
    color: "#34d399",
  },
];

const connections: Connection[] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 0],
  [0, 6],
  [1, 7],
  [2, 6],
  [2, 4],
  [3, 5],
  [4, 3],
];

export default function SkillsSection() {
  const [activeId, setActiveId] = useState<string>("typescript");

  const activeIndex = skills.findIndex(
    (skill: Skill) => skill.id === activeId
  );

  const activeSkill: Skill = skills[activeIndex] ?? skills[3];

  return (
    <section className="constellation-section" id="skills">
      <div className="constellation-container">
        <div className="constellation-heading">
          <span className="constellation-eyebrow">
            <span className="constellation-live-dot" />
            EXPLORING MY UNIVERSE
          </span>

          <h2>
            My Skills<span>.</span>
          </h2>

          <p>
            Every technology connects to an idea. Explore my interactive
            skill network to discover the technologies, frameworks and
            design principles behind my web development journey.
          </p>
        </div>

        <div className="constellation-layout">
          <div className="constellation-map">
            <div className="constellation-map-label">
              <span>SKILL NETWORK</span>
              <span>
                {String(skills.length).padStart(2, "0")} NODES DETECTED
              </span>
            </div>

            <div className="constellation-canvas">
              <div className="constellation-nebula nebula-one" />
              <div className="constellation-nebula nebula-two" />

              <svg
                className="constellation-lines"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {connections.map(
                  ([from, to]: Connection, index: number) => (
                    <line
                      key={index}
                      x1={skills[from].x}
                      y1={skills[from].y}
                      x2={skills[to].x}
                      y2={skills[to].y}
                      className={
                        skills[from].id === activeId ||
                        skills[to].id === activeId
                          ? "constellation-line is-connected"
                          : "constellation-line"
                      }
                    />
                  )
                )}

                {skills.map((skill: Skill) => (
                  <circle
                    key={skill.id}
                    cx={skill.x}
                    cy={skill.y}
                    r="0.7"
                    className="constellation-line-point"
                  />
                ))}
              </svg>

              {skills.map((skill: Skill, index: number) => (
                <button
                  key={skill.id}
                  type="button"
                  className={`constellation-node node-${index} ${
                    activeId === skill.id ? "is-active" : ""
                  }`}
                  style={
                    {
                      left: `${skill.x}%`,
                      top: `${skill.y}%`,
                      "--node-color": skill.color,
                    } as NodeStyle
                  }
                  onClick={() => setActiveId(skill.id)}
                  aria-pressed={activeId === skill.id}
                  aria-label={`Explore ${skill.name}`}
                >
                  <span className="constellation-node-halo" />
                  <span className="constellation-node-core">
                    {skill.short}
                  </span>
                  <span className="constellation-node-name">
                    {skill.name}
                  </span>
                </button>
              ))}

              <div
                className="constellation-center-mark"
                aria-hidden="true"
              >
                <span>V</span>
                <i />
              </div>
            </div>

            <div className="constellation-map-footer">
              <span>
                <i className="map-legend-dot" /> CONNECTED TECHNOLOGIES
              </span>
              <span>SELECT A NODE ↗</span>
            </div>
          </div>

          <aside className="constellation-details" aria-live="polite">
            <div className="details-topline">
              <span>NODE DETAILS</span>
              <span className="details-index">
                {String(activeIndex + 1).padStart(2, "0")}
                {" / "}
                {String(skills.length).padStart(2, "0")}
              </span>
            </div>

            <div
              key={`${activeSkill.id}-symbol`}
              className="details-symbol"
              style={
                { "--node-color": activeSkill.color } as NodeStyle
              }
            >
              {activeSkill.short}
            </div>

            <span className="details-category">
              {activeSkill.category}
            </span>

            <h3 key={`${activeSkill.id}-title`}>
              {activeSkill.name}
            </h3>

            <p key={`${activeSkill.id}-description`}>
              {activeSkill.description}
            </p>

            <div className="details-expanded">
              <p key={`${activeSkill.id}-details`}>
                {activeSkill.details}
              </p>

              <span className="details-applications-title">
                WHAT IT ENABLES
              </span>

              <ul
                className="details-applications"
                key={activeSkill.id}
              >
                {activeSkill.applications.map((item: string) => (
                  <li key={item}>
                    <span>↗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="details-connection">
              <span className="details-connection-dot" />
              <span>CONNECTED TO MY TOOLKIT</span>
            </div>

            <div className="details-navigation">
              {skills.map((skill: Skill) => (
                <button
                  key={skill.id}
                  type="button"
                  className={`details-nav-dot ${
                    activeId === skill.id ? "is-active" : ""
                  }`}
                  style={
                    { "--node-color": skill.color } as NodeStyle
                  }
                  onClick={() => setActiveId(skill.id)}
                  aria-label={`Select ${skill.name}`}
                  title={skill.name}
                />
              ))}
            </div>
          </aside>
        </div>

        <div className="constellation-bottom">
          <span>CREATIVITY</span>
          <span className="constellation-bottom-line" />
          <span>CODE</span>
          <span className="constellation-bottom-line" />
          <span>EXPERIENCE</span>
        </div>
      </div>
    </section>
  );
}
