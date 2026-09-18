import React from 'react'
import { useEffect, useState } from 'react';

function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  useEffect(() => {
        const handleOutsideClick = (e) => {
            if (e.target.closest('.nav-links a')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            window.addEventListener('click', handleOutsideClick);
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isMenuOpen]);
    
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

    <div className="hero-section hidden-on-scroll">
        {/* Navbar */}
        <nav className="navbar">
            <div className="logo-area">
                <div className="logo">
                    <img src="/logo.png" type="logo" alt="logo"/>
                </div>
                <span>FlowPilot</span>
            </div>

            

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}>
              
                <div className="nav-item dropdown" onClick={() => setIsMenuOpen(false)}>
                    <a href="#" className="dropdown-toggle" onClick={() => setIsMenuOpen(false)}> 
                        Platform <span><i className="fa-solid fa-angle-down"></i></span>
                    </a>
                <div className="dropdown-menu" onClick={() => setIsMenuOpen(false)}>
                    <a href="#workflow">Workflow Automation</a>
                    <a href="#command">Command Center</a>
                    <a href="#analytics">Real-time Analytics</a>
                </div>
            </div>

            <div className="nav-item dropdown" onClick={() => setIsMenuOpen(false)}>
                <a href="#solutions" className="dropdown-toggle">
                     Solutions <span><i className="fa-solid fa-angle-down"></i></span>
                </a>
            <div className="dropdown-menu" onClick={() => setIsMenuOpen(false)}>
                <a href="#enterprise">Enterprise</a>
                <a href="#teams">Remote Teams</a>
                <a href="#security">Security & Compliance</a>
                </div>
            </div>

          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#insights" onClick={() => setIsMenuOpen(false)}>Insights</a>
          <a href="#connect" onClick={() => setIsMenuOpen(false)}>Connect</a>

            </div>


            <div className="nav-actions">
                <button className="btn-enterprise">Enterprise <i className="fa-solid fa-magnifying-glass"></i></button>
                <button className="btn-quote">Request a Quote</button>

                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            
            </div>
        </nav>

        {/* Hero Content */}
        <main className="hero-content">
            <div className="hero">
                <div className="custom-radio-container">
                    <div className="custom-radio-dot"></div>
                </div> 
                Achieve Unprecedented Operational Clarity
            </div>

            <h1 className="hero-title"> <span className='gradient-text'>
                Orchestrate, Automate, and Grow.<br/>
                The Unified Command Center for Digital Enterprises.
                </span>
            </h1>
            <p className="hero-description">
                Connect distributed teams, automate complex workflows, and gain real-time visibility across your entire technology stack. FlowPilot empowers data-driven decisions.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Start Free Trial</button>

              <button className="btn-secondary">
                <span className="play-icon"><i className="fa-regular fa-circle-play"></i></span> View Demo Video
             </button>
        </div>
        </main>


        <div className="stats-section">
            <div className="stats-container">
                <div className="stat-item">
                    <h3 className="stat-number">10k+</h3>
                    <p className="stat-label">Active users</p>
                </div>

            <div className="stat-item">
                <h3 className="stat-number">99.9%</h3>
                <p className="stat-label">Uptime SLA</p>
            </div>

        <div className="stat-item">
          <h3 className="stat-number">50+</h3>
          <p className="stat-label">Integrations</p>
        </div>

        <div className="stat-item">
          <h3 className="stat-number">4.9<span className="star-icon">★</span></h3>
          <p className="stat-label">User rating</p>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default HeroSection