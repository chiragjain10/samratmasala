import Breadcrumbs from './Breadcrumbs';
import FounderDetails from './FounderDetails';
import OurJourney from './OurJourney';
import './About.css';

const AboutPage = () => {
  return (
    <main className="about-page">
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="bg-main-sec bg-smoke">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-hero-content">
                <span className="sub-title">
                  <img src="/img/theme-img/title_icon.svg" alt="icon" />
                  Our Journey
                </span>
                <h1 className="hero-title">The Founding Story of Samrat Masale</h1>
                <p className="hero-text">
                  The foundation of Samrat Masale was established in the year 1968 by Shri Shyamsundar Ji Vijayvergiya.
                  In 1968, the Indian spice landscape was distinctly different from today. Families often sourced whole
                  spices and ground them at home (masale ghar par taiyar kiye jate the) for maximum freshness and purity.
                  Recognizing a clear need and opportunity, Shri Shyamsundar Ji emerged as a pioneer, offering a
                  high‑quality, ready‑to‑use alternative to the laborious home‑grinding process.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3>25+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3>4</h3>
                    <p>Premium Products</p>
                  </div>
                  <div className="stat-item">
                    <h3>50K+</h3>
                    <p>Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-hero-img">
                <img src="/images/redchilli.png" alt="Samrat Masala" />
                <div className="experience-badge">
                  <span>25+ Years</span>
                  <p style={{color:"var(--white-color)"}}>Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FounderDetails />
      <OurJourney />
    </main>
  );
};

export default AboutPage;