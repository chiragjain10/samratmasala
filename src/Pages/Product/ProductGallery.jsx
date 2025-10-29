import { useState } from 'react';
import './ProductGallery.css';

const ProductGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image);

  return (
    <section className="product-gallery space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area text-center">
              <h2 className="sec-title">Product Gallery</h2>
            </div>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="main-gallery-image">
              <img src={mainImage} alt={product.name} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="gallery-thumbnails">
              <div 
                className={`thumbnail-item ${mainImage === product.image ? 'active' : ''}`}
                onClick={() => setMainImage(product.image)}
              >
                <img src={product.image} alt={product.name} />
              </div>
              {product.gallery.map((image, index) => (
                <div 
                  key={index}
                  className={`thumbnail-item ${mainImage === image ? 'active' : ''}`}
                  onClick={() => setMainImage(image)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;