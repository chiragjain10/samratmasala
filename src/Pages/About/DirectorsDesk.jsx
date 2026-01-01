import React from 'react';
import './AboutPages.css';

const DirectorsDesk = () => {
  const directors = [
    {
      name: "Shri Shyamsundar Ji Vijayvargiya",
      position: "Founder (1965)",
      image: "/images/founder/1.jpg",
      quote: "Our rise was built on core values: hard work, dedication, and pure, unadulterated quality that rivals the freshness of home-ground blends.",
      description: "Founded Samrat Masale with a vision to bring authentic, ready-to-use spices to Indian households. His entrepreneurial spirit and commitment to quality laid the foundation for a legacy that continues to thrive."
    },
    {
      name: "Mr. Rajesh Vijayvargiya",
      position: "Managing Director",
      image: "/images/founder/2.png",
      quote: "With excellent packaging and superior quality, we expanded our reach to multiple states in India.",
      description: "Managing Director - Rajesh Vijayvargiya After completing his higher education, Mr. Rajesh Vijayvargiya, along with his father, gave the Samrat Garam Masala business a new direction and expanded its business to other states in India. With the excellent packaging and superior quality of his products, Rajesh Ji expanded his business."
    },
    {
      name: "Mr. Anirudh Vijayvargiya",
      position: "Director",
      image: "/images/founder/3.png",
      quote: "Combining traditional values with modern business acumen to revolutionize Indian retail.",
      description: "Director - Mr. Anirudh Vijayvargiya Anirudh Vijayvargiya, after completing his MBA from London, not only took over his family business but also successfully transformed it with his knowledge. Anirudh launched a new revolution in Indian retail by introducing a full range of spices."
    }
  ];

  return (
    <div className="about-page-content">
      <div className="page-hero-section">
        <div className="container">
          <h1 className="page-title text-center">Director's Desk</h1>
          <p className="hero-subtitle text-center">
            Leadership that blends tradition with innovation
          </p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="directors-grid">
            {directors.map((director, index) => (
              <div key={index} className="director-card">
                <div className="director-img">
                  <img src={director.image} alt={director.name} />
                </div>
                <div className="director-info">
                  <h4>{director.name}</h4>
                  <div className="position">{director.position}</div>
                  {/* <p className="quote">"{director.quote}"</p> */}
                  <p className="description" style={{ textAlign: "justify" }}>{director.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="content-block" style={{ marginTop: '60px' }}>
            <h2 className="text-center">Leadership Philosophy</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="info-card">
                  <h4><i className="fas fa-hands-helping"></i> Customer-Centric Approach</h4>
                  <p>
                    Every decision is made with our customers in mind. We believe that trust 
                    is earned through consistent quality and transparent practices. Our focus 
                    remains on delivering authentic flavors that families have trusted for generations.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-card">
                  <h4><i className="fas fa-seedling"></i> Sustainable Growth</h4>
                  <p>
                    Growth should never compromise quality. We focus on sustainable expansion 
                    that benefits all stakeholders - from farmers to end consumers. Our expansion 
                    to multiple states has been guided by principles of quality first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2>Message from Leadership</h2>
            <div className="message-box">
              <div className="quote-icon-large">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="message-text">
                At Samrat Masale, we are custodians of a legacy that began in 1965. Our journey 
                has been guided by one simple principle: never compromise on quality. As we move 
                forward, we remain committed to preserving the authentic taste of Indian spices 
                while embracing innovation that enhances, not replaces, tradition.
              </p>
              <p className="message-text">
                Under the leadership of Mr. Rajesh Vijayvargiya and Mr. Anirudh Vijayvargiya, 
                we have successfully combined traditional wisdom with modern business practices 
                to expand our reach while maintaining our core values of purity and authenticity.
              </p>
              <p className="message-text">
                We thank our customers for their trust over the decades and promise to continue 
                delivering the purity and flavor that has made Samrat Masale a household name 
                across India.
              </p>
              <div className="signature">
                <img src="/images/signature.png" alt="Signature" />
                <p><strong>The Samrat Masale Family</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectorsDesk;