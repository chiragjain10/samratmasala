import './AboutPages.css';

const CompanyProfile = () => {
    return (
        <div className="about-page-content">
            {/* Hero Section */}
            <section className="page-hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="page-hero-content">
                                <h1 className="page-title">Company Profile</h1>
                                <p className="hero-subtitle">
                                    Since 1965, Samrat Masale has been dedicated to bringing authentic,
                                    high-quality spices to Indian kitchens.
                                </p>
                                <p className="hero-text">
                                    What started as a humble family business has grown into a trusted name
                                    in the spice industry, known for our commitment to purity and traditional
                                    grinding techniques.
                                </p>
                            </div>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <h3>55+</h3>
                                    <p>Years Experience</p>
                                </div>
                                <div className="stat-item">
                                    <h3>50K+</h3>
                                    <p>Happy Families</p>
                                </div>
                                <div className="stat-item">
                                    <h3>100%</h3>
                                    <p>Pure & Natural</p>
                                </div>
                                <div className="stat-item">
                                    <h3>4+</h3>
                                    <p>Premium Products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="page-hero-img">
                                <img src="/images/Founder3.jpg" alt="Samrat Masala Factory" />
                                <div className="experience-badge">
                                    <span>55+ Years</span>
                                    <p>Of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="content-block">
                                <h2>Our Leadership</h2>
                                <p>
                                    Under the dynamic leadership of <strong>Mr. Rajesh Vijayvargiya</strong> (Managing Director)
                                    and <strong>Mr. Anirudh Vijayvargiya</strong> (Director), Samrat Masale has expanded its
                                    reach across multiple states in India. Combining traditional wisdom with modern business
                                    acumen, our leadership team continues to uphold the legacy of quality while driving
                                    innovation and sustainable growth.
                                </p>
                            </div>
                            <div className="content-block">
                                <h2>Our Heritage</h2>
                                <p>
                                    Established in 1965, Samrat Masale was founded by Shri Shyamsundar Ji Vijayvargiya
                                    with a passion for spices and a desire to bring authentic flavors to every household.
                                    At a time when families ground their own spices at home, we pioneered the concept of
                                    ready-to-use, pure masalas without compromising on quality.
                                </p>
                            </div>

                            <div className="content-block">
                                <h2>Our Commitment</h2>
                                <p>
                                    Quality is at the heart of everything we do. We source our spices from the most
                                    fertile regions of India, ensuring only the freshest and most aromatic ingredients
                                    make their way into our products. Each spice is carefully handpicked, processed,
                                    and packaged to preserve its natural essence.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar-info">
                                <div className="info-card">
                                    <h4>Why Choose Samrat Masala?</h4>
                                    <ul className="features-list">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            <span>Traditional grinding methods</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            <span>No artificial additives</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            <span>Direct sourcing from farmers</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            <span>Hygienic processing units</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            <span>Eco-friendly packaging</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="info-card">
                                    <h4>Our Values</h4>
                                    <p>
                                        Integrity, Quality, Tradition, and Customer Satisfaction - these values
                                        guide every aspect of our business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyProfile;