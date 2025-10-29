import './ProductUsage.css';

const ProductUsage = ({ product }) => {
  return (
    <section className="product-usage space">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="usage-card">
              <div className="usage-header">
                <h2 className="usage-title">How to Use {product.name}</h2>
              </div>
              
              <div className="usage-content">
                <div className="usage-item">
                  <div className="usage-icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <div className="usage-text">
                    <h4>Usage Instructions</h4>
                    <p>{product.usage}</p>
                  </div>
                </div>
                
                <div className="usage-item">
                  <div className="usage-icon">
                    <i className="fas fa-box"></i>
                  </div>
                  <div className="usage-text">
                    <h4>Storage Instructions</h4>
                    <p>{product.storage}</p>
                  </div>
                </div>
              </div>
              
              <div className="usage-tip">
                <div className="tip-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <p className="tip-text">
                  <strong>Pro Tip:</strong> Always use dry spoons to maintain freshness and flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductUsage;