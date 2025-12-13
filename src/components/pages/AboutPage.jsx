import { NavLink } from "react-router-dom";
import { Award, Clock, Users, Target, Shield, Lightbulb } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: <Shield className="value-icon" />,
      title: "Professional Integrity",
      description: "I conduct all client interactions with honesty, transparency, and respect, delivering work that exceeds expectations."
    },
    {
      icon: <Clock className="value-icon" />,
      title: "Commitment to Deadlines",
      description: "I honor all timelines and keep you informed throughout the process, ensuring your project launches on time."
    },
    {
      icon: <Lightbulb className="value-icon" />,
      title: "Fresh Perspective",
      description: "I bring modern web development practices and the latest technologies to create innovative solutions."
    },
    {
      icon: <Users className="value-icon" />,
      title: "Client-Focused Approach",
      description: "Your success is my priority. I work closely with you to understand and deliver exactly what you need."
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "12hr", label: "Response Time" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2+ Years", label: "Development Experience" }

  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "I start by understanding your business goals, target audience, and project requirements through detailed consultation."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "I create wireframes, designs, and develop your solution using modern technologies and industry best practices."
    },
    {
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Thorough testing ensures your website or application works perfectly across all devices and browsers."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "I handle the launch process and provide ongoing support to ensure your digital presence continues to perform optimally."
    }
  ];

  return (
    <div className="about-page" id="about">
      <div className="container">
        {/* Hero Section */}
        <h1>About Vireotech</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              Vireotech is a modern web and systems development company focused on creating
              clean, fast, and high-performing digital solutions. I specialize in helping
              individuals, small businesses, and growing brands establish a strong, reliable
              online presence.
            </p>

            <p>
              My work combines technical expertise, problem-solving, and a deep understanding
              of what makes a digital product succeed. Over the years, I’ve built websites,
              systems, dashboards, and applications that are not only visually appealing but
              also functional, scalable, and optimized for real business use.
            </p>

            <p>
              Using frameworks like React, Next.js, Node.js, Django, and modern CSS tools,
              I deliver solutions that are fast, secure, and tailored to each client’s goals.
              Each project is approached with professionalism, transparency, and a commitment
              to long-term value.
            </p>
          </div>
          <div className="about-image">
            <div className="why-choose-card">
              <h3>Why Choose Vireotech?</h3>
              <ul>
                <li>
                  <Award className="icon" />
                  Skilled developer with modern technical expertise
                </li>
                <li>
                  <Target className="icon" />
                  Focused on your business goals
                </li>
                <li>
                  <Shield className="icon" />
                  Transparent & honest communication
                </li>
                <li>
                  <Clock className="icon" />
                  Quick turnaround times
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="section">
          <h2>My Core Values</h2>
          <p className="section-subtitle">The principles that guide everything I do</p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon-container">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="section">
          <h2>My Development Process</h2>
          <p className="section-subtitle">How I turn your ideas into reality</p>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Clients */}
        <div className="section clients-section">
          <h2>Who I Serve</h2>
          <p className="section-subtitle">Specialized solutions for diverse business needs</p>
          <div className="clients-grid">
            <div className="client-card">
              <div className="client-emoji">🏢</div>
              <h3>Small Businesses</h3>
              <p>Professional websites that establish credibility and attract customers</p>
            </div>
            <div className="client-card">
              <div className="client-emoji">🚀</div>
              <h3>Startups</h3>
              <p>Scalable web applications and MVP development for growing companies</p>
            </div>
            <div className="client-card">
              <div className="client-emoji">🛒</div>
              <h3>E-commerce Brands</h3>
              <p>Complete online stores with payment processing and inventory management</p>
            </div>
            <div className="client-card">
              <div className="client-emoji">🏪</div>
              <h3>Local Services</h3>
              <p>Custom solutions for restaurants, salons, and service-based businesses</p>
            </div>
          </div>
        </div>

        {/* Graduate Advantage */}
        <div className="section advantage-section">
          <h2>The Vireotech Advantage</h2>
          <div className="advantage-grid">
            <div className="advantage-card">
              <div className="advantage-emoji">⚡</div>
              <h3>Modern Technologies</h3>
              <p>
                I use the latest tools, frameworks, and best practices to create fast,
                responsive, and future-proof digital products.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-emoji">💡</div>
              <h3>Innovation-Driven</h3>
              <p>
                Every project is designed with creativity and forward-thinking solutions
                that help your business stand out.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-emoji">🤝</div>
              <h3>Fair & Transparent Pricing</h3>
              <p>
                Flexible, affordable pricing designed to give you exceptional value without
                compromising quality.
              </p>
            </div>
        </div>

        </div>

        {/* CTA */}
        <div className="cta-section">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how I can help bring your digital vision to life</p>
          <NavLink to="/contact" className="cta-button">
            Start Your Project
          </NavLink>
        </div>
      </div>
    </div>
  );
}