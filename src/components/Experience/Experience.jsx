import React from "react";
import ExperienceData from "./ExperienceData";
import "./Experience.css";

function Experience() {
  return (
    <section className="portfolio-journey" id="experience">
      <div className="container journey-container">
        {/* Section Header */}
        <div className="journey-heading text-center">
          <span className="section-badge">MY CAREER PATH</span>
          <h2 className="experience-main-title">Experience & Education</h2>
          <p className="experience-sub-text">
            A chronological timeline of my professional work experience, academic background, and the milestones achieved along the way.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="journey-timeline">
          {ExperienceData.map((item, index) => (
            <div
              className={`journey-item ${
                index % 2 === 0 ? "journey-left" : "journey-right"
              }`}
              key={item.id}
            >
              <div className="journey-card">
                <div className="journey-header">
                  <span className="journey-date">{item.year}</span>
                  <span className="journey-type">{item.exporedu}</span>
                </div>

                <h3 className="journey-profile">{item.profile}</h3>
                <h4 className="journey-company">{item.companyname}</h4>

                <p className="journey-desc">{item.description}</p>

                <div className="journey-tags">
                  {item.jobtags.map((tag, idx) => (
                    <span key={idx} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;