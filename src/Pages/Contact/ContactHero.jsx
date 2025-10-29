import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero breadcrumb-area">
      <div className="container">
        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">Contact Us</h1>
          <nav className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="divider">/</span>
            <span className="current">Contact Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;