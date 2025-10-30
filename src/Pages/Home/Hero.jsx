import "./Hero.css";

const Hero = () => {
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      {/* Slider markup commented out intentionally */}
      <div className="hero-video">
        <img src="/images/Banner_vid.gif" alt="Samrat Masala" />
      </div>

      <div className="hero-content" data-aos="fade-up">
        <div className="hero-content__inner">
          <h1 className="hero-title">Add color to your life, with our premium spices.</h1>
          <p className="hero-subtitle">Step into our world, where classic Indian taste meets nourishing goodness in each aromatic blend, perfect for your kitchen and wellbeing.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;