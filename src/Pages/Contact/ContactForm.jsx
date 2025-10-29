import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-form space bg-smoke2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="form-content">
              <span className="sub-title">
                <img src="/img/theme-img/title_icon.svg" alt="icon" />
                Send Message
              </span>
              <h2 className="sec-title">Get In Touch With Us</h2>
              <p className="sec-text">
                Have questions about our premium masalas or want to discuss bulk orders? 
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="form-features">
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Quick Response within 24 hours</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Expert guidance on product selection</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check"></i>
                  <span>Best prices for bulk orders</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="th-btn btn-primary w-100">
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;