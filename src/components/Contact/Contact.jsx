import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Information Column */}
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h5>Location</h5>
                  <p>New Delhi, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h5>Email</h5>
                  <p>deepaksingh@example.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h5>Phone</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div>
                  <h5>Working Hours</h5>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <h3>Send a Message</h3>

              {submitted && (
                <div className="alert alert-success" role="alert">
                  Thank you! Your message has been sent successfully. I will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
