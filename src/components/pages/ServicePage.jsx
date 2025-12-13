import React from "react";
import { Check, Code, Smartphone, ShoppingCart, Palette, Wrench, Server, Workflow, Coins, Database, ShieldCheck } from 'lucide-react';


export function ServicePage() {
  const coreServices = [
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      title: "Website Development",
      description:
        "We build custom business websites using HTML, React, or WordPress, optimized for speed, SEO, and mobile performance.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Web Systems & Applications",
      description:
        "Development of complex systems such as booking platforms, dashboards, real‑estate systems, loan apps, and multi‑vendor platforms.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-blue-600" />,
      title: "E‑commerce Development",
      description:
        "Complete online stores with payments, product management, inventory, reporting, customer accounts, and admin dashboards.",
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: "Database Architecture",
      description:
        "Structured database design using PostgreSQL, Supabase, MongoDB, or Firebase to support scalable systems.",
    },
    {
      icon: <Palette className="w-10 h-10 text-blue-600" />,
      title: "UI/UX Design",
      description:
        "Clean, modern interfaces with strong branding, accessibility, and conversion‑focused layouts.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Security & Performance Optimization",
      description:
        "We secure your system with authentication, encryption, firewalls, and high‑performance optimization.",
    },
  ];

  const pricingModels = [
    {
      name: "Basic Business Website",
      price: "R4,500 – R7,500",
      features: [
        "1–6 Pages",
        "Responsive Design",
        "Contact Form + WhatsApp CTA",
        "Basic SEO Setup",
        "Hosting & Domain Setup",
      ],
      popular: false,
    },
    {
      name: "Professional Business Website",
      price: "R9,500 – R15,000",
      features: [
        "7–15 Pages",
        "Custom UI/UX Design",
        "Blog/News System",
        "Google Analytics Setup",
        "Advanced SEO & Speed Optimization",
      ],
      popular: true,
    },
    {
      name: "E‑commerce Store",
      price: "R18,000 – R28,000",
      features: [
        "Product Management System",
        "Payment Gateway Integration",
        "Order + Inventory Dashboard",
        "Customer Accounts",
        "Email Notifications & Reports",
      ],
      popular: false,
    },
    {
      name: "Custom Web System / Web App",
      price: "R30,000 – R150,000+",
      features: [
        "API Development",
        "Admin Dashboard",
        "Secure Authentication",
        "Database Architecture",
        "Scalable Cloud Hosting",
      ],
      popular: false,
    },
  ];

  const process = [
    {
      icon: <Workflow className="w-12 h-12 text-blue-600" />,
      title: "1. Consultation & Requirements",
      text: "We meet with you to understand your business, the problem you want solved, and the features needed.",
    },
    {
      icon: <Coins className="w-12 h-12 text-blue-600" />,
      title: "2. Pricing Breakdown",
      text: "We provide a clear document showing project cost, deadlines, features, and optional add‑ons.",
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "3. Design Phase",
      text: "UI/UX wireframes and color themes are shared for approval before development.",
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "4. Development Phase",
      text: "We build the frontend, backend, database, APIs, admin panel, and system security.",
    },
    {
      icon: <Check className="w-12 h-12 text-blue-600" />,
      title: "5. Testing & Revisions",
      text: "You get 2–3 revision rounds and full testing across devices.",
    },
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: "6. Deployment & Maintenance",
      text: "We launch your website/system and offer optional monthly maintenance packages.",
    },
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance",
      price: "R250 / month",
      features: ["Monthly backups", "Security checks", "Minor content updates", "Uptime monitoring"],
      recommended: false,
    },
    {
      name: "Professional Maintenance",
      price: "R450 / month",
      features: ["Everything in Basic", "Speed optimization", "SEO tracking", "Priority support"],
      recommended: true,
    },
    {
      name: "Business Maintenance",
      price: "R750 / month",
      features: ["Full system monitoring", "Bug fixes", "Monthly analytics reports", "Content management"],
      recommended: false,
    },
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Our Services & Pricing</h1>
        <p className="hero-subtitle">
          A complete breakdown of our services, development workflow, and transparent pricing for websites and advanced systems.
        </p>
      </section>

      {/* Core Services */}
      <section className="section">
        <h2 className="section-title">What We Offer</h2>
        <div className="services-grid">
          {coreServices.map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section pricing-section">
        <h2 className="section-title text-center">Pricing Packages</h2>
        <div className="pricing-grid">
          {pricingModels.map((pkg, index) => (
            <div key={index} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="pricing-name">{pkg.name}</h3>
              <p className="pricing-price">{pkg.price}</p>
              <ul className="features-list">
                {pkg.features.map((f, i) => (
                  <li key={i} className="feature-item">
                    <Check className="w-5 h-5 text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <NavLink to="/contact" className="cta-button">
                 Get Started
              </NavLink>
             </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <h2 className="section-title text-center">How We Work</h2>
        <div className="process-grid">
          {process.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-icon">{step.icon}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="section maintenance-section">
        <h2 className="section-title text-center">Maintenance Packages</h2>
        <div className="maintenance-grid">
          {maintenancePlans.map((plan, index) => (
            <div key={index} className={`maintenance-card ${plan.recommended ? 'recommended' : ''}`}>
              {plan.recommended && <div className="recommended-badge">Recommended</div>}
              <h3 className="maintenance-name">{plan.name}</h3>
              <p className="maintenance-price">{plan.price}</p>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check className="w-5 h-5 text-green-600" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="maintenance-button">Subscribe Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-text">
            Contact us for a free consultation on your specific needs.
          </p>
          <div className="cta-buttons">
            <a
              href="tel:62498690"
              className="secondary-button"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}