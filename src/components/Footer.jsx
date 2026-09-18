import React from 'react'
import { useEffect } from 'react';

function Footer() {

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

    <footer className="footer-section hidden-on-scroll">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>FlowPilot</h3>
          <p>Empowering teams to build better workflows and scale effortlessly.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#insights">Testimonials</a>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#blog">Blog</a>
            <a href="#guides">Documentation</a>
            <a href="#support">Support</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>

        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FlowPilot. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
