import React from 'react'
import { useState, useEffect } from 'react';

function FAQSection() {

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

      const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings with prorated billing."
    },
    {
      question: "How does the free trial work?",
      answer: "You get full access to all features for 14 days without needing a credit card. Once it ends, choose the plan that fits you best."
    },
    {
      question: "Is my data secure?",
      answer: "We use enterprise-grade encryption (SSL/TLS) and comply with strict privacy standards to keep your data safe and confidential."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. There are no long-term contracts or hidden cancellation fees. You can cancel with a single click."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section hidden-on-scroll" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-desc">Got questions? We’ve got answers.</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
                
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                    {activeIndex === index ? '−' : '+'}
                    </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default FAQSection