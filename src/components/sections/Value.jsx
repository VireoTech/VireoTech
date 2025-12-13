import React from 'react';
import { Award, Clock, Shield, Users, Zap, TrendingUp } from 'lucide-react';


export function ValueSection() {
  const values = [
    {
      icon: <Award className="value-icon" />,
      title: 'Premium Quality',
      description: 'Every project is crafted with meticulous attention to detail and excellence in execution.',
      color: '#3b82f6'
    },
    {
      icon: <Zap className="value-icon" />,
      title: 'Lightning Fast',
      description: 'Optimized performance and efficient processes ensure rapid delivery without compromising quality.',
      color: '#f59e0b'
    },
    {
      icon: <Shield className="value-icon" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures and robust architecture for peace of mind.',
      color: '#10b981'
    },
    {
      icon: <TrendingUp className="value-icon" />,
      title: 'Growth Focused',
      description: 'Scalable solutions designed to grow with your business and adapt to future needs.',
      color: '#8b5cf6'
    },
    {
      icon: <Users className="value-icon" />,
      title: 'Collaborative Approach',
      description: 'We work as an extension of your team, ensuring clear communication and alignment.',
      color: '#ef4444'
    },
    {
      icon: <Clock className="value-icon" />,
      title: 'On-Time Delivery',
      description: 'Respect for deadlines with transparent timelines and regular progress updates.',
      color: '#06b6d4'
    }
  ];

  return (
    <section className="value-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Building Excellence, Delivering Value</h2>
          <p className="section-description">
            We combine technical expertise with business understanding to create solutions 
            that drive real results and sustainable growth.
          </p>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon-container" style={{ backgroundColor: `${value.color}15` }}>
                <div style={{ color: value.color }}>
                  {value.icon}
                </div>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <div className="value-decoration" style={{ backgroundColor: value.color }}></div>
            </div>
          ))}
        </div>
        
        <div className="value-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">85%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}