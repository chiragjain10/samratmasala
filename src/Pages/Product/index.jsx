import { useParams } from 'react-router-dom';
import { products } from '../../data/product';
import ProductHero from './ProductHero';
import ProductGallery from './ProductGallery';
import ProductFeatures from './ProductFeatures';
import ProductUsage from './ProductUsage';
import RelatedProducts from './RelatedProducts';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productSlug } = useParams();
  const product = products[productSlug];

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h2>Product Not Found</h2>
          <a href="/contact" className="th-btn">Back to Products</a>
        </div>
      </div>
    );
  }

  return (
    <main className="product-details-page">
      <ProductHero product={product} />
      {/* <ProductGallery product={product} /> */}
      <ProductUsage product={product} />
      <ProductFeatures product={product} />
      <RelatedProducts currentProduct={product} />
    </main>
  );
};

export default ProductDetails;