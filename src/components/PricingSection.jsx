import React from 'react'
import { useEffect } from 'react';

function PricingSection() {

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
    <section className="pricing-section hidden-on-scroll" id="pricing">
      <div className="pricing-header">
        <span className="pricing-badge">Simple Pricing</span>
        <h2 className="pricing-title">Transparent Plans for Every Team</h2>
        <p className="pricing-desc">Choose the right plan to scale your operations. No hidden fees, cancel anytime.</p>
      </div>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3 className="plan-name">Starter</h3>
          <p className="plan-desc">For individuals and small side projects getting started.</p>
          <div className="plan-price">$29<span>/month</span></div>
          <ul className="plan-features">
            <li>✓ Up to 5 team members</li>
            <li>✓ Basic workflow automation</li>
            <li>✓ Community support</li>
            <li>✓ 7-day data retention</li>
          </ul>
          <button className="btn-plan">Get Started</button>
        </div>

        <div className="pricing-card popular">
          <div className="popular-badge">Most Popular</div>
          <h3 className="plan-name">Pro</h3>
          <p className="plan-desc">For high-growth engineering teams scaling operations.</p>
          <div className="plan-price">$79<span>/month</span></div>
          <ul className="plan-features">
            <li>✓ Up to 25 team members</li>
            <li>✓ Advanced workflow automation</li>
            <li>✓ Priority support 24/7</li>
            <li>✓ Real-time analytics & insights</li>
            <li>✓ 90-day data retention</li>
          </ul>
          <button className="btn-plan primary">Start Free Trial</button>
        </div>

        <div className="pricing-card">
          <h3 className="plan-name">Enterprise</h3>
          <p className="plan-desc">For large organizations requiring custom security and scale.</p>
          <div className="plan-price">$199<span>/month</span></div>
          <ul className="plan-features">
            <li>✓ Unlimited team members</li>
            <li>✓ Custom integrations & API</li>
            <li>✓ Dedicated account manager</li>
            <li>✓ Enterprise SLA & Security</li>
            <li>✓ Unlimited data retention</li>
          </ul>
          <button className="btn-plan">Contact Sales</button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection