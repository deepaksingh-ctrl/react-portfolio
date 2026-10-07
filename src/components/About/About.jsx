import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../../assets/about-images/about.jpg";
import "./About.css";

const achievements = [
  {
    id: 1,
    number: "2+",
    label: "Years of Experience",
    sublabel: "Frontend & CMS"
  },
  {
    id: 2,
    number: "30+",
    label: "Projects Completed",
    sublabel: "React & WordPress"
  },
  {
    id: 3,
    number: "100%",
    label: "Client Satisfaction",
    sublabel: "Dedicated Support"
  }
];

const highlights = [
  "Modern Single Page Applications (React)",
  "Custom WordPress Themes & Gutenberg",
  "Performance & Core Web Vitals Optimization",
  "Responsive, Mobile-First Web Architecture"
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column: Image with Experience Badge */}
          <div className="col-lg-6">
            <div className="about-image-container">
              <div className="about-image-card">
                <img
                  src={AboutImg}
                  alt="Deepak Singh - Frontend Developer"
                  className="about-img"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="experience-floating-badge">
                <div className="badge-icon">💼</div>
                <div>
                  <span className="badge-years">2+ Years</span>
                  <span className="badge-text">Frontend Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Achievements */}
          <div className="col-lg-6">
            <div className="about-content">
              <span className="section-badge">ABOUT ME</span>
              <h2 className="about-heading">
                Crafting Modern Web Experiences with Code & Creativity
              </h2>
              <h3 className="about-role">Frontend & WordPress Developer</h3>

              <p className="about-text">
                I am a dedicated frontend developer passionate about building interactive, 
                high-performance web applications using modern <strong>React</strong> and 
                robust <strong>WordPress</strong> platforms. I transform complex workflows 
                into intuitive, user-friendly digital products.
              </p>

              {/* Core Strengths Checklist */}
              <div className="about-highlights-grid">
                {highlights.map((item, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Achievement Statistics */}
              <div className="achievement-grid">
                {achievements.map((item) => (
                  <div key={item.id} className="achievement-box">
                    <span className="achievement-number">{item.number}</span>
                    <h4 className="achievement-label">{item.label}</h4>
                    <span className="achievement-sublabel">{item.sublabel}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="about-cta-group">
                <Link to="/contact" className="about-btn primary">
                  <span>Contact Me</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <a href="#projects" className="about-btn secondary">
                  <span>View Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;