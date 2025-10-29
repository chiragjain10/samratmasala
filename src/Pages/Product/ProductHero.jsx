import './ProductHero.css';

const ProductHero = ({ product }) => {
  return (
    <section className="product-hero bg-main-sec bg-smoke">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="product-hero-content">
              <span className="sub-title">
                <img src="/img/theme-img/title_icon.svg" alt="icon" />
                {product.category}
              </span>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description">{product.description}</p>
              
              <div className="product-meta">
                <div className="meta-item">
                  <span className="meta-label">Available In:</span>
                  <div className="meta-values">
                    {product.availableIn.map((size, index) => (
                      <span key={index} className="size-badge">{size}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="product-actions">
                <a href="/contact" className="th-btn btn-primary">
                  <i className="fas fa-phone me-2"></i>
                  Enquire Now
                </a>
                <a href="/" className="th-btn btn-outline">
                  <i className="fas fa-arrow-left me-2"></i>
                  Back
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-hero-image">
              <img src={product.image} alt={product.name} />
              <div className="product-badge">
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;