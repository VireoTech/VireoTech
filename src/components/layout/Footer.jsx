import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, ArrowUp } from "lucide-react";
import { NavLink } from "react-router-dom";


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollButton = document.querySelector('.scroll-top');
      if (scrollButton) {
        if (scrollTop > 300) {
          scrollButton.classList.add('show');
        } else {
          scrollButton.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      {/* Decorative Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="url(#gradient)"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="logo-icon">V</div>
                <h3>Vireotech</h3>
              </div>
              <p className="brand-description">
                Crafting digital experiences that elevate your brand and engage your audience. 
                Let's build something extraordinary together.
              </p>
              <div className="brand-badge">
                <span>🚀 Trusted by businesses worldwide</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/service">Service</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li>
                  <NavLink 
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive ? "footer-link active" : "footer-link"
                    }
                  >
                    Web Designs
                  </NavLink>
                </li>

                <li>
                  <NavLink 
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? "footer-link active" : "footer-link"
                    }
                  >
                    Development
                  </NavLink>
                </li>

                <li>
                  <NavLink 
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? "footer-link active" : "footer-link"
                    }
                  >
                    Branding
                  </NavLink>
                </li>

                <li>
                  <NavLink 
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "footer-link active" : "footer-link"
                    }
                  >
                    Consulting
                  </NavLink>
                </li>
              </ul>
            </div>


            {/* Contact Info */}
            <div className="footer-section footer-contact">
              <h4>Get in Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={18} />
                  <a href="mailto:khoasehashatsi40@gmail.com">khoasehashatsi40@gmail.com</a>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <a href="tel:+26662498690">(266) 6249 8690</a>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>Maseru, Lesotho</span>
                </div>
              </div>
              
              <div className="social-section">
                <p className="social-title">Follow Us</p>
                <div className="social-links">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                    <Instagram size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Vireotech. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}