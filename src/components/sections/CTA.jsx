import { NavLink } from "react-router-dom";


export function CTA() {
  return (
    <section className="cta">
      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Contact us for a free consultation and discuss your project requirements
        </p>

        <div className="cta-buttons">
          <NavLink
            to="/contact"
            className="cta-button primary"
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/portfolio"
            className="cta-button secondary"
          >
            View Portfolio
          </NavLink>
        </div>
      </div>
    </section>
  );
}
