import './FAQ.css'

const FAQ = () => {
  return (
    <section className="FAQSec">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12" data-aos="fade-up">
            <div className="title-area">
              <span className="sub-title">
                <img src="/images/icons/redheart.png" alt="Icon" loading="lazy" />
                Our Journey
              </span>
              <h2 className="sec-title">The Founding Story of Samrat Masale</h2>
            </div>
          </div>

          <div className="col-12 col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <p>
              The foundation of Samrat Masale was established in the year 1965 by Shri Shyamsundar Ji Vijayvargiya.
            </p>

            <h5 className="faq-subtitle">A Pioneer in Packaged Spices</h5>
            <p>
              In 1965, the Indian spice landscape was distinctly different from today. At that time, it was common practice
              for families, particularly housewives, to source whole spices and grind them at home (masale ghar par taiyar
              kiye jate the). This ensured maximum freshness and purity. Packaged, ready-to-use spices were not yet the norm
              in Indian households. It was in this market context that Shri Shyamsundar Ji Vijayvargiya recognized a clear
              need and opportunity. He stepped in as a pioneer, offering an alternative to the laborious home-grinding process.
            </p>

            <h5 className="faq-subtitle">The Rise to Prominence</h5>
            <p>
              Shri Shyamsundar Ji's success was not an overnight feat; it was a testament to his dedication to core values:
            </p>
            <ul className="faq-list">
              <li>
                <strong>Hard Work and Dedication:</strong> He built the business from the ground up through sheer effort and
                unwavering commitment.
              </li>
              <li>
                <strong>Pure and Unadulterated Quality:</strong> Crucially, he maintained the pure quality and authentic
                flavor of his spices, ensuring that his product rivaled the freshness and taste of home-ground blends. This
                focus on purity was essential to gain the trust of a consumer base accustomed to preparing spices themselves.
              </li>
            </ul>
            <p>
              By upholding these principles, Shri Shyamsundar Ji gradually overcame initial skepticism and competition,
              beginning to make a name for Samrat Masale in homes across the region. His efforts effectively started to
              transition the market, making high-quality, pre-packaged spices a trusted staple in the Indian kitchen. The
              legacy he established in 1965 laid the groundwork for Samrat Masale's eventual growth and expansion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
