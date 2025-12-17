import React from 'react';
import './AboutPages.css';

const Infrastructure = () => {
  const facilities = [
    {
      title: "Modern Processing Unit",
      description: "State-of-the-art facilities with hygiene-first approach",
      features: ["ISO certified", "HACCP compliant", "Regular quality checks"]
    },
    {
      title: "Quality Control Lab",
      description: "In-house laboratory for rigorous testing",
      features: ["Microbiological testing", "Purity analysis", "Shelf-life studies"]
    },
    {
      title: "Storage Facilities",
      description: "Climate-controlled warehouses",
      features: ["Temperature monitoring", "Pest control", "Batch tracking"]
    },
    {
      title: "Packaging Unit",
      description: "Eco-friendly and hygienic packaging",
      features: ["Food-grade materials", "Airtight sealing", "Sustainable options"]
    }
  ];

  return (
    <div className="about-page-content">
      <div className="page-hero-section">
        <div className="container">
          <h1 className="page-title text-center">Our Infrastructure</h1>
          <p className="hero-subtitle text-center">
            Modern facilities with traditional values
          </p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="row align-items-center mb-60">
            <div className="col-lg-6">
              <div className="content-block">
                <h2>State-of-the-Art Facilities</h2>
                <p>
                  Samrat Masale combines traditional grinding techniques with modern 
                  infrastructure to ensure the highest standards of quality and hygiene. 
                  Our facilities are designed to preserve the natural aroma and potency 
                  of spices while maintaining strict quality control.
                </p>
                <p>
                  From sourcing to packaging, every step is monitored by our quality 
                  assurance team to deliver products that meet both national and 
                  international standards.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="page-hero-img">
                <img src="/images/infrastructure/factory.jpg" alt="Our Factory" />
              </div>
            </div>
          </div>

          {/* Facilities Grid */}
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-number">{index + 1}</div>
                <h3>{facility.title}</h3>
                <p className="facility-desc">{facility.description}</p>
                <ul className="facility-features">
                  {facility.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="content-block" style={{ marginTop: '60px' }}>
            <h2 className="text-center">Quality Assurance Process</h2>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-icon">1</div>
                <h4>Sourcing</h4>
                <p>Direct procurement from trusted farmers</p>
              </div>
              <div className="process-step">
                <div className="step-icon">2</div>
                <h4>Cleaning</h4>
                <p>Thorough removal of impurities</p>
              </div>
              <div className="process-step">
                <div className="step-icon">3</div>
                <h4>Processing</h4>
                <p>Traditional grinding methods</p>
              </div>
              <div className="process-step">
                <div className="step-icon">4</div>
                <h4>Testing</h4>
                <p>Laboratory quality checks</p>
              </div>
              <div className="process-step">
                <div className="step-icon">5</div>
                <h4>Packaging</h4>
                <p>Hygienic, airtight sealing</p>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="certificates-section">
              <h2>Certifications & Compliance</h2>
              <div className="certificates-grid">
                <div className="certificate">
                  <i className="fas fa-certificate"></i>
                  <h4>ISO Certified</h4>
                  <p>Quality management systems</p>
                </div>
                <div className="certificate">
                  <i className="fas fa-utensils"></i>
                  <h4>FSSAI Approved</h4>
                  <p>Food safety standards</p>
                </div>
                <div className="certificate">
                  <i className="fas fa-leaf"></i>
                  <h4>Organic Options</h4>
                  <p>Certified organic products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;