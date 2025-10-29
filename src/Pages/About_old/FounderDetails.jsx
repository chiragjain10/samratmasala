const FounderDetails = () => {
  return (
    <section className="bg-smoke2" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-5" data-aos="fade-right">
            <img
              src="/images/index/circle.png"
              alt="Founder"
              loading="lazy"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <div className="title-area">
              <span className="sub-title">
                <img src="/images/icons/redheart.png" alt="Icon" loading="lazy" />
                Our Founder
              </span>
              <h2 className="sec-title">Passion For Purity & Flavour</h2>
            </div>
            <p>
              Samrat Masala was built on a simple belief — authentic taste comes from uncompromised quality. From
              selecting the finest raw spices to ensuring careful processing, our founder envisioned a brand trusted by
              every kitchen for its consistent flavour and aroma.
            </p>
            <p>
              Today, that vision continues to guide us as we bring the true essence of Indian spices to your plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderDetails
