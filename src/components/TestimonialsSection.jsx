import React from 'react'
import { useEffect } from 'react';

function TestimonialsSection() {

useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-on-scroll');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="testimonials-section hidden-on-scroll" id="insights">
      <div className="testimonials-header">
        <span className="testimonials-badge">Social Proof</span>
        <h2 className="testimonials-title">Loved by Engineering Leaders</h2>
        <p className="testimonials-desc">See how high-growth teams scale their operations and streamline workflows with FlowPilot.</p>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"FlowPilot completely transformed how our engineering team handles deployments and pipeline tracking. Absolute game-changer."</p>
          <div className="author-info">
            <div className="author-avatar">J</div>
            <div>
              <h4 className="author-name">Jessica Davis</h4>
              <p className="author-role">VP of Engineering, NexusCorp</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"The real-time analytics and command center gave us unprecedented visibility into our systems. Setup took less than an hour."</p>
          <div className="author-info">
            <div className="author-avatar">M</div>
            <div>
              <h4 className="author-name">Michael Kenway</h4>
              <p className="author-role">CTO, CloudScale</p>
            </div>
          </div>

        </div>
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">"Clean design, lightning-fast performance, and robust automation. It’s rare to find a SaaS tool that nails every single detail."</p>
          <div className="author-info">
            <div className="author-avatar">S</div>
            <div>
              <h4 className="author-name">Sarah Reynolds</h4>
              <p className="author-role">Lead DevOps, ApexLabs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection