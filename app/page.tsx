import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import HeroUniverse from "./HeroUniverse";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import CertificatesSection from "./CertificatesSection";
const projects = [
  {
    number: "01",
    title: "Emergency QR System",
    description: "A quick-access emergency information experience.",
    stack: "Web Development",
  },
  {
    number: "02",
    title: "Voice Translator",
    description: "A voice translation interface designed for accessibility.",
    stack: "JavaScript · APIs",
  },
  {
    number: "03",
    title: "College Timetable Generator",
    description: "A web experience for generating and viewing class schedules.",
    stack: "Web Development",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Responsive Design",
  "Git",
  "GitHub",
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#home">
          Vyshnavi<span>.</span>
        </a>
        <div className="navlinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">
          Let&apos;s connect ↗
        </a>
      </nav>

      <HeroUniverse />

     <AboutSection />
    
    <SkillsSection />

      
         
<ExperienceSection />

<ProjectsSection/>

<CertificatesSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
