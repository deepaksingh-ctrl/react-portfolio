import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Servicescard from "./ServiceCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Service.css";

function Services() {
  return (
    <section className="services-sec" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header-wrapper">
          <div className="section-header text-center">
            <span className="section-badge">WHAT I OFFER</span>
            <h2 className="services-heading">Specialized Web Services</h2>
            <p className="services-subheading">
              Comprehensive frontend engineering and CMS development tailored to help businesses, agencies, and creators thrive online.
            </p>
          </div>

          {/* Slider Navigation Controls Header */}
          <div className="services-slider-controls">
            <button
              className="services-nav-btn services-prev-btn"
              aria-label="Previous service"
              title="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <button
              className="services-nav-btn services-next-btn"
              aria-label="Next service"
              title="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Services Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".services-prev-btn",
            nextEl: ".services-next-btn",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="services-swiper"
        >
          {Servicescard.map((item) => (
            <SwiperSlide key={item.id} className="service-swiper-slide">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Services;