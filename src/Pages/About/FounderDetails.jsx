import './FounderDetails.css';

const FounderDetails = () => {
  return (
    <section className="founder-section space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="founder-img">
              <img src="/images/Founder2.jpg" alt="Founder" />
              {/* <div className="founder-signature">
                <img src="/images/about/signature.png" alt="Signature" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-6" style={{marginTop: "30px"}}>
            <div className="founder-content">
              <span className="sub-title">
                <img src="/img/theme-img/title_icon.svg" alt="icon" />
                Our Founder
              </span>
              <h2 className="sec-title" data-aos="fade-up">The Founding Story of Samrat Masale</h2>
              <p className="sec-text" data-aos="fade-up">The foundation of Samrat Masale was established in 1965 by Shri Shyamsundar Ji Vijayvergiya. At that time,
                Indian households typically sourced whole spices and ground them at home (masale ghar par taiyar kiye jate the)
                to ensure freshness and purity. Recognizing a clear need and opportunity, he pioneered a high‑quality,
                ready‑to‑use alternative to the laborious home‑grinding process.
              </p>
              
              <div className="founder-quote" data-aos="fade-up">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="quote-text">
                  "Our rise was built on core values: hard work and dedication, and pure, unadulterated quality that rivals
                  the freshness and taste of home‑ground blends."
                </p>
              </div>

              <div className="founder-info" data-aos="fade-up">
                <h4 className="founder-name">Shri Shyamsundar Ji Vijayvergiya</h4>
                <p className="founder-position">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderDetails;