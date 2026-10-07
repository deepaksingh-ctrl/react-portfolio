import React, { useState, useEffect } from "react";
import ProjectsData from "./Projects";
import "./Project.css";

function ProjectCard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "React", "WordPress", "Web App"];

  const filteredProjects =
    activeFilter === "All"
      ? ProjectsData
      : ProjectsData.filter((item) => item.category === activeFilter);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">PORTFOLIO</span>
          <h2 className="projects-heading">Featured Projects</h2>
          <p className="projects-subheading">
            A showcase of modern web applications, custom themes, and digital solutions crafted with clean code and modern aesthetics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-container">
          <div className="filter-tabs">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? ProjectsData.length
                  : ProjectsData.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  <span>{cat}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="project-card">
                {/* Image & Overlay */}
                <div
                  className="project-image-wrapper"
                  onClick={() => setSelectedProject(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <button
                      className="overlay-btn view-details-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(item);
                      }}
                      title="View Details"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      <span>Preview</span>
                    </button>
                  </div>
                  <span className="project-category-badge">{item.category}</span>
                </div>

                {/* Card Body */}
                <div className="project-body">
                  <div className="project-tags">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="project-title"
                    onClick={() => setSelectedProject(item)}
                  >
                    {item.title}
                  </h3>

                  <p className="project-description">{item.description}</p>

                  <div className="project-actions">
                    <button
                      className="btn-details-link"
                      onClick={() => setSelectedProject(item)}
                    >
                      <span>View Details</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link-btn"
                      title="GitHub Repository"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="lightbox-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="lightbox-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="lightbox-image-wrap">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lightbox-img"
                />
                <span className="lightbox-cat-badge">
                  {selectedProject.category}
                </span>
              </div>

              <div className="lightbox-details">
                <div className="lightbox-tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="lightbox-title">{selectedProject.title}</h3>

                <p className="lightbox-desc">{selectedProject.description}</p>

                <div className="lightbox-footer-actions">
                  <a
                    href={selectedProject.demoUrl}
                    className="modal-action-btn primary-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    className="modal-action-btn secondary-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectCard;