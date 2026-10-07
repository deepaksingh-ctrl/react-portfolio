import React from "react";
import { Link } from "react-router-dom";
import Servicescard from "./ServiceCard";
import "./Service.css";

function Services() {
  return (
    <section className="services-sec" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">WHAT I OFFER</span>
          <h2 className="services-heading">Specialized Web Services</h2>
          <p className="services-subheading">
            Comprehensive frontend engineering and CMS development tailored to help businesses, agencies, and creators thrive online.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="row g-4">
          {Servicescard.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="service-card">
                <div className="service-icon-box">
                  <span className="service-icon">{item.icon}</span>
                </div>

                <div className="service-content">
                  <span className="service-subtitle">{item.serviceSubtitle}</span>
                  <h3 className="service-title">{item.serviceTitle}</h3>
                  <p className="service-description">{item.serviceDescription}</p>

                  <ul className="service-features-list">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="service-feature-item">
                        <span className="feature-check">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="service-action-link">
                    <span>Discuss Project</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;