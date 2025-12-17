import React from 'react';
import './AboutPages.css';

const HistoryMissionVision = () => {
    const milestones = [
        { year: "1965", title: "Foundation", description: "Samrat Masale was founded by Shri Shyamsundar Ji Vijayvargiya" },
        { year: "1970s", title: "Early Growth", description: "Established reputation for pure, home-style spices" },
        { year: "1980s", title: "Expansion", description: "Modernized processing while maintaining traditional methods" },
        { year: "2000s", title: "Innovation", description: "Introduced new blends and improved packaging" },
        { year: "Present", title: "Leadership", description: "Trusted by generations of Indian families" }
    ];

    return (
        <div className="about-page-content">
            <div className="page-hero-section">
                <div className="container">
                    <h1 className="page-title text-center">History, Mission & Vision</h1>
                    <p className="hero-subtitle text-center">
                        Our journey through decades of dedication to authentic Indian flavors
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <section className="content-section bg-white">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card">
                            <div className="card-icon">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To become India's most trusted and preferred spice brand, bringing authentic, hygienically processed, and consistently high‑quality masalas from our kitchen to every household in India and across the globe.
                            </p>
                            <p>
                                To preserve and elevate the true flavours of Indian cuisine by combining traditional wisdom with modern food‑grade manufacturing, so every dish made with Samrat Masala feels homely, pure, and memorable.
                            </p>
                        </div>

                        <div className="vision-card">
                            <div className="card-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3>Our Mission</h3>

                            <h4 style={{ fontSize: '18px', margin: '15px 0 10px', color: 'var(--title-color)' }}>Quality & Excellence</h4>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> To source the finest raw spices from reliable farmers and certified vendors, ensuring purity, freshness, and adherence to strict food safety standards in every batch.</li>
                                <li><i className="fas fa-check"></i> To maintain in‑house, hygienic, and technology‑driven processing and packaging that lock in natural oils, aroma, and authentic taste without compromising on quality.</li>
                            </ul>

                            <h4 style={{ fontSize: '18px', margin: '20px 0 10px', color: 'var(--title-color)' }}>Customer and Community Focus</h4>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> To delight customers by offering a wide range of everyday and specialty spice blends that make cooking easier while retaining traditional flavours and regional authenticity.</li>
                                <li><i className="fas fa-check"></i> To build long‑term trust through transparency, ethical practices, and responsive customer service, treating every household and retailer as a valued partner in our growth.</li>
                            </ul>

                            <h4 style={{ fontSize: '18px', margin: '20px 0 10px', color: 'var(--title-color)' }}>Innovation and Sustainability</h4>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> To continuously innovate in products, blends, and packaging, adapting to evolving tastes while staying rooted in Indian culinary heritage.</li>
                                <li><i className="fas fa-check"></i> To operate responsibly by minimizing waste, supporting local communities, and promoting sustainable sourcing practices wherever possible.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-block" style={{ marginTop: '60px' }}>
                        <h2>Core Values</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="info-card">
                                    <h4><i className="fas fa-gem"></i> Authenticity</h4>
                                    <p>Staying true to traditional recipes and methods passed down through generations.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info-card">
                                    <h4><i className="fas fa-heart"></i> Purity</h4>
                                    <p>No additives, no preservatives - just pure, natural spices in their authentic form.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info-card">
                                    <h4><i className="fas fa-handshake"></i> Trust</h4>
                                    <p>Building relationships with customers that span generations, based on reliability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block text-center history-timeline">
                                <h2>Our History</h2>
                                <p className="text-center mx-auto" style={{ maxWidth: '800px' }}>
                                    For over 55 years, Samrat Masale has been a household name, evolving from a small
                                    family business to a respected brand while staying true to our roots of purity and
                                    authenticity.
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="timeline-container">
                                {milestones.map((item, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-year">{item.year}</div>
                                        <div className="timeline-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HistoryMissionVision;