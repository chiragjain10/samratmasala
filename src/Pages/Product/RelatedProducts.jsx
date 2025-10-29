import { products } from '../../data/product';
import './RelatedProducts.css';

const RelatedProducts = ({ currentProduct }) => {
  const relatedProducts = Object.values(products).filter(
    product => product.id !== currentProduct.id
  );

  return (
    <section className="related-products space-bottom bg-smoke">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="/img/theme-img/title_icon.svg" alt="icon" />
                Explore More
              </span>
              <h2 className="sec-title">Other Premium Products</h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center gy-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6">
              <div className="related-product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-category">{product.category}</p>
                  <a href={`/products/${product.slug}`} className="th-btn btn-sm">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;