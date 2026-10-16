
"use client";

import { useState } from "react";
import "./certificate.css";

const certificates = [
  {
    id: "01",
    name: "GitHub Workflow Mastery",
    organization: "Unstop",
    category: "Development",
    symbol: "GH",
  },
  {
    id: "02",
    name: "Java (Basic)",
    organization: "HackerRank",
    category: "Development",
    symbol: "J",
  },
  {
    id: "03",
    name: "National Cloud & AI Innovation Challenge — Season 2",
    organization: "3SVK",
    category: "Achievements",
    symbol: "AI",
  },
  {
    id: "04",
    name: "Infosys Certification Program",
    organization: "PrepInsta",
    category: "Development",
    symbol: "I",
  },
  {
    id: "05",
    name: "Getting Started with Full Stack Java Development",
    organization: "Simplilearn SkillUp",
    category: "Development",
    symbol: "S",
  },
  {
    id: "06",
    name: "Learning Data Analytics: 1 Foundations",
    organization: "LinkedIn Learning",
    category: "Data",
    symbol: "DA",
  },
  {
    id: "07",
    name: "Ignite India Program",
    organization: "Wadhwani Foundation",
    category: "Achievements",
    symbol: "W",
  },
];

const categories = ["All", "Development", "Data", "Achievements"];

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState("01");

  const filteredCertificates = certificates.filter(
    (certificate) =>
      activeCategory === "All" ||
      certificate.category === activeCategory
  );

  const selectedCertificate =
    filteredCertificates.find((certificate) => certificate.id === selectedId) ??
    filteredCertificates[0];

  return (
    <section className="credential-section" id="certificates">
      <div className="credential-container">
        <header className="credential-heading">
          <span className="credential-eyebrow">
            <span className="credential-dot" />
            LEARNING & ACHIEVEMENTS
          </span>

          <h2>
            My Credential
            <span> Archive.</span>
          </h2>

          <p>
            A collection of certifications and learning milestones
            from my development journey.
          </p>
        </header>

        <div className="credential-workspace">
          <aside className="credential-sidebar">
            <div className="credential-sidebar-top">
              <span>ARCHIVE DIRECTORY</span>
              <span>{String(filteredCertificates.length).padStart(2, "0")}</span>
            </div>

            <div className="credential-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "credential-filter active"
                      : "credential-filter"
                  }
                  onClick={() => {
                    setActiveCategory(category);
                    const first = certificates.find(
                      (certificate) =>
                        category === "All" ||
                        certificate.category === category
                    );
                    if (first) setSelectedId(first.id);
                  }}
                >
                  <span>{category}</span>
                  <span>
                    {String(
                      category === "All"
                        ? certificates.length
                        : certificates.filter(
                            (certificate) =>
                              certificate.category === category
                          ).length
                    ).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>

            <div className="credential-sidebar-note">
              <span className="credential-note-icon">✳</span>
              <p>Every milestone is part of the journey.</p>
            </div>
          </aside>

          <div className="credential-records">
            <div className="credential-records-top">
              <span>AVAILABLE RECORDS</span>
              <span>SELECT A RECORD ↗</span>
            </div>

            {filteredCertificates.map((certificate) => (
              <button
                key={certificate.id}
                type="button"
                className={
                  selectedCertificate?.id === certificate.id
                    ? "credential-record selected"
                    : "credential-record"
                }
                onClick={() => setSelectedId(certificate.id)}
                aria-pressed={selectedCertificate?.id === certificate.id}
              >
                <span className="credential-record-number">
                  {certificate.id}
                </span>

                <span className="credential-record-symbol">
                  {certificate.symbol}
                </span>

                <span className="credential-record-copy">
                  <span className="credential-record-name">
                    {certificate.name}
                  </span>
                  <span className="credential-record-org">
                    {certificate.organization}
                  </span>
                </span>

                <span className="credential-record-arrow">↗</span>
              </button>
            ))}
          </div>
        </div>

        {selectedCertificate && (
          <div className="credential-detail" aria-live="polite">
            <div className="credential-detail-symbol">
              {selectedCertificate.symbol}
            </div>

            <div className="credential-detail-copy">
              <span className="credential-detail-label">
                SELECTED CREDENTIAL / {selectedCertificate.id}
              </span>

              <h3>{selectedCertificate.name}</h3>

              <p>{selectedCertificate.organization}</p>
            </div>

            <span className="credential-detail-category">
              {selectedCertificate.category}
            </span>
          </div>
        )}

        <div className="credential-footer-line">
          <span>END OF ARCHIVE</span>
          <span>CONTINUOUSLY LEARNING <span className="credential-footer-star">✳</span></span>
        </div>
      </div>
    </section>
  );
}
