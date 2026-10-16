"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer" id="footer">
      <div className="footer-glow" />

      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Vyshnavi<span>.</span>
          </a>

          <h2>
            Building the <span>digital future.</span>
          </h2>

          <p>
            Frontend Developer passionate about creating
            beautiful, responsive, and user-friendly web
            experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-connect">
          <h3>Connect with me</h3>
          <p>Have an idea or an opportunity? Let's connect.</p>

          <a
            href="mailto:paruchuruvyshnavi87@gmail.com"
            className="footer-email"
          >
            Email Me ↗
          </a>

          <div className="footer-socials">
            <a
              href="https://github.com/paruchuruvyshnavi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/paruchuru-vyshnavi-583a47340?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year??"2026"} Vyshnavi. All rights reserved.
        </p>

        <p className="footer-built">
          Designed with <span>♥</span> & built with Next.js
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}