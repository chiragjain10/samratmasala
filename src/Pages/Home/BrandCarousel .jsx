import './BrandCarousel.css';

const BrandCarousel = () => {
  const brandTags = [
    "#SamratMasala",
    "#TasteMeinBest",
    "#PureSpices", 
    "#AuthenticFlavors",
    "#TraditionalTaste",
    "#DesiMasala",
    "#KitchenKing",
    "#GrandmothersRecipes"
  ];

  return (
    <section className="brand-carousel-section">
      <div className="container-fluid">
        <div className="brand-carousel-wrapper">
          <div className="brand-carousel-track">
            {/* First set */}
            {brandTags.map((tag, index) => (
              <div key={`first-${index}`} className="brand-tag">
                <span className="tag-text">{tag}</span>
                <span className="tag-dot">•</span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brandTags.map((tag, index) => (
              <div key={`second-${index}`} className="brand-tag">
                <span className="tag-text">{tag}</span>
                <span className="tag-dot">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;