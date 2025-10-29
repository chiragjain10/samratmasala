import './ProductFeatures.css';

const ProductFeatures = ({ product }) => {
  return (
    <section className="product-features space bg-smoke2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="features-content">
              <span className="sub-title">
                <img src="/img/theme-img/title_icon.svg" alt="icon" />
                Why Choose {product.name}?
              </span>
              <h2 className="sec-title">Key Features & Benefits</h2>
              
              <div className="features-list">
                {product.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="benefits-content">
              <h3 className="benefits-title">Health Benefits</h3>
              <div className="benefits-list">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    <span className="benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;