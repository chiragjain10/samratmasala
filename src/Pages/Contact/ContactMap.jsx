import './ContactMap.css';

const ContactMap = () => {
  return (
    <section className="contact-map space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area text-center">
              <h2 className="sec-title" data-aos="fade-down">Find Us Here</h2>
              <p className="sec-text" data-aos="fade-down">
                Visit our manufacturing unit or get in touch with us for any queries
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="map-container">
              {/* You can embed Google Maps here */}
              <div className="map-placeholder">
                <div className="map-content" data-aos="fade-down">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Our Location</h4>
                  <p>59/5 Pardeshi Pura, Indore</p>
                  <a 
                    href="https://maps.google.com/?q=59/5 Pardeshi Pura, Indore" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="th-btn"
                  >
                    <i className="fas fa-directions me-2"></i>
                    Get Directions
                  </a>
                </div>
              </div>
              
              {/* Alternative: Actual Google Maps Embed */}
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.87623456789!2d77.12345678901234!3d28.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU5JzE1LjYiTiA3N8KwMDcnMjEuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;