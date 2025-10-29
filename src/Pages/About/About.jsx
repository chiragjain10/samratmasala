const About = () => {
  return (
    <section className="pt-60 pb-60" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="title-area">
              <span className="sub-title">
                <img src="/images/icons/redheart.png" alt="Icon" loading="lazy" />
                Our Journey
              </span>
              <h2 className="sec-title">The Founding Story of Samrat Masale</h2>
            </div>
            <p>
              The foundation of Samrat Masale was established in the year 1968 by Shri Shyamsundar Ji Vijayvergiya.
            </p>
            <h3 style={{ fontSize: 20, marginTop: 16 }}>A Pioneer in Packaged Spices</h3>
            <p>
              In 1968, the Indian spice landscape was distinctly different from today. At that time, it was common practice for
              families, particularly housewives, to source whole spices and grind them at home (masale ghar par taiyar kiye
              jate the). This ensured maximum freshness and purity. Packaged, ready-to-use spices were not yet the norm in
              Indian households. It was in this market context that Shri Shyamsundar Ji Vijayvergiya recognized a clear need
              and opportunity. He stepped in as a pioneer, offering an alternative to the laborious home-grinding process.
            </p>
            <h3 style={{ fontSize: 20, marginTop: 16 }}>The Rise to Prominence</h3>
            <p>
              Shri Shyamsundar Ji's success was not an overnight feat; it was a testament to his dedication to core values:
            </p>
            <ul style={{ margin: '12px 0 20px' }}>
              <li>
                <strong>Hard Work and Dedication:</strong> He built the business from the ground up through sheer effort and
                unwavering commitment.
              </li>
              <li>
                <strong>Pure and Unadulterated Quality:</strong> Crucially, he maintained the pure quality and authentic flavor
                of his spices, ensuring that his product rivaled the freshness and taste of home-ground blends. This focus on
                purity was essential to gain the trust of a consumer base accustomed to preparing spices themselves.
              </li>
            </ul>
            <p>
              By upholding these principles, Shri Shyamsundar Ji gradually overcame initial skepticism and competition, beginning
              to make a name for Samrat Masale in homes across the region. His efforts effectively started to transition the
              market, making high-quality, pre-packaged spices a trusted staple in the Indian kitchen. The legacy he
              established in 1968 laid the groundwork for Samrat Masale's eventual growth and expansion.
            </p>
            <div style={{ marginTop: 20 }}>
              <a href="/contact" className="th-btn">Contact Us</a>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <img
              src="/images/index/side-sketch-1.jpg"
              alt="Samrat Masala"
              loading="lazy"
              style={{ width: '100%', borderRadius: '10px', height:"500px", objectFit:"cover " }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
