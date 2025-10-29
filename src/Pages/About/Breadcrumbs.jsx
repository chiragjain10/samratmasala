import './Breadcrumbs.css';

const Breadcrumbs = () => {
  return (
    <section className="breadcrumb-area">
      <div className="container">
        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">About Us</h1>
          <nav className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="divider">/</span>
            <span className="current">About Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;