import React from "react";
import skillData, { additionalTools } from "./SkillData";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-main-sec" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="skills-badge">MY EXPERTISE</span>
          <h2 className="skills-heading">Skills & Technologies</h2>
          <p className="skills-subheading">
            A comprehensive overview of my core technical stack, libraries, and tools used to build modern, high-performance web products.
          </p>
        </div>

        {/* Skills Progress Grid */}
        <div className="row g-4 mb-5">
          {skillData.map((item) => (
            <div className="col-lg-6" key={item.id}>
              <div className="skill-card">
                <div className="skills-title">
                  <div className="skill-name-wrap">
                    <span className="skill-icon">{item.icon}</span>
                    <h4 className="skill-name">{item.name}</h4>
                    <span className="skill-category">{item.category}</span>
                  </div>
                  <span className="skill-percent">{item.percentage}%</span>
                </div>

                <div className="skill-progress-bar">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools & Frameworks Pills */}
        <div className="tools-showcase text-center">
          <h4 className="tools-title">Tools & Frameworks I Work With</h4>
          <div className="tools-badge-container">
            {additionalTools.map((tool, idx) => (
              <span key={idx} className="tool-pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;