import { ContactForm } from "../sections";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Let's Build Something Amazing</h1>
          <p className="hero-subtitle">
            We're here to turn your digital vision into reality. Reach out and let's start the conversation.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container">
        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <div className="info-header">
              <h2>Get in Touch</h2>
              <p>Have a project in mind or want to discuss your website needs? We'd love to hear from you.</p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon">
                  <Mail size={24} />
                </div>
                <h3>Email Us</h3>
                <a href="mailto:Khoasehashatsi40@gmail.com">
                  Khoasehashatsi40@gmail.com
                </a>
                <p className="card-description">Drop us a line anytime</p>
              </div>

              <div className="contact-card">
                <div className="card-icon">
                  <Phone size={24} />
                </div>
                <h3>Call Us</h3>
                <a href="tel:+26662498690">
                  (266) 6249 8690
                </a>
                <p className="card-description">Mon-Fri, 9am-5pm</p>
              </div>

              <div className="contact-card">
                <div className="card-icon">
                  <MapPin size={24} />
                </div>
                <h3>Location</h3>
                <p>Maseru, Lesotho</p>
                <p className="card-description">Serving clients globally</p>
              </div>
            </div>

            <div className="cta-box">
              <Send size={32} />
              <h3>Ready to Start Your Project?</h3>
              <p>Fill out the form and we'll get back to you within 24 hours.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}