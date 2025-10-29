const About = () => {
  return (
    <section className="pt-60 pb-60" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="title-area">
              <span className="sub-title">
                <img src="/images/icons/redheart.png" alt="Icon" loading="lazy" />
                Who We Are
              </span>
              <h2 className="sec-title">Crafting Authentic Indian Flavours</h2>
            </div>
            <p>
              For years, Samrat Masala has brought the aroma and taste of authentic Indian spices to kitchens across the
              country. Sourced with care and processed with precision, our spices preserve purity, freshness, and the
              original essence of Indian cuisine.
            </p>
            <ul style={{ margin: '20px 0' }}>
              <li>Carefully selected raw ingredients</li>
              <li>Hygienic and quality-focused processing</li>
              <li>Consistent flavour, color, and aroma</li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <a href="/contact" className="th-btn">Explore Products</a>
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
