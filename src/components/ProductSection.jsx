import React from 'react'
import { useEffect } from 'react';

function ProductSection() {

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
    <div className="product-section hidden-on-scroll" id="platform">
      <div className="product-header">
        <span className="product-badge">Powerful Capabilities</span>
        <h2 className="product-title">Engineered for Complete Control</h2>
        <p className="product-description">Everything you need to orchestrate your workflows, monitor systems, and scale operations securely.</p>
      </div>

      <div className="product-grid">
        <div className="product-card">
          <div className="product-icon"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#2a6677"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg></div>
          <h3>Workflow Automation</h3>
          <p>Automate repetitive tasks and complex pipelines with our intuitive visual builder.</p>
        </div>

        <div className="product-card">
          <div className="product-icon"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#2a6677"><path d="M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM480-160q56 0 105.5-17.5T676-227l-57-57q-29 21-64.5 32.5T480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 39-12 75t-33 65l57 57q32-41 50-91t18-106q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-160q22 0 42.5-5.5T561-342l-61-61q-5 2-10 2.5t-10 .5q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 6-.5 11.5T557-458l60 60q11-18 17-38.5t6-43.5q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/></svg></div>
          <h3>Command Center</h3>
          <p>Centralize your team operations and get a unified view of all active projects.</p>
        </div>

        <div className="product-card">
          <div className="product-icon"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#2a6677"><path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56Zm-96 200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg></div>
          <h3>Real-time Analytics</h3>
          <p>Make data-driven decisions with live performance metrics and deep operational insights.</p>
        </div>

        <div className="product-card">
          <div className="product-icon"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#2a6677"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg></div>
          <h3>Cloud Infrastructure Management</h3>
          <p>Manage, scale, and secure your entire cloud infrastructure from a single, unified dashboard.</p>
        </div>

        <div className="product-card">
          <div className="product-icon"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#2a6677"><path d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg></div>
          <h3>Global Compliance Engine</h3>
          <p>Automate compliance reporting and enforce regulatory standards across all global operations.</p>
        </div>

        <div className="product-card">
          <div className="product-icon"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#2a6677"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg></div>
          <h3>Intelligent Security Orchestration</h3>
          <p>Streamline security incident response and proactively defend against threats with automated workflows.</p>
        </div>
      </div>
      </div>
  )
}

export default ProductSection