import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Samrat Masala ke products
    const products = [
        { name: "Turmeric Powder", path: "/products/turmeric-powder" },
        { name: "Coriander Powder", path: "/products/coriander-powder" },
        { name: "Garam Masala", path: "/products/garam-masala" },
        { name: "Red Chilli Powder", path: "/products/red-chilli-powder" }
    ];

    const location = useLocation();
    const isActive = (path, exact = false) => (exact ? location.pathname === path : location.pathname.startsWith(path));

    return (
        <>
            {/* Mobile Menu */}
            <div className={`th-menu-wrapper ${isMobileMenuOpen ? 'th-body-visible' : ''}`}>
                <div className="th-menu-area text-center">
                    <button className="th-menu-toggle" onClick={toggleMobileMenu}>
                        <i className="fal fa-times"></i>
                    </button>
                    <div className="mobile-logo">
                        <Link to="/">
                            <img src="/img/favicons/logo.png" alt="Samrat Masala" loading="lazy" />
                        </Link>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li className={`${isActive('/', true) ? 'nav-active' : ''}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={`${isActive('/about', true) ? 'nav-active' : ''}`}>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className={`menu-item-has-children ${isActive('/products') ? 'nav-active' : ''}`}>
                                <Link to="/contact">Products</Link>
                                <ul className="sub-menu">
                                    {products.map((product, index) => (
                                        <li key={index}>
                                            <Link to={product.path}>{product.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className={`${isActive('/contact', true) ? 'nav-active' : ''}`}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="th-header header-layout2">
                <div className="sticky-wrapper">
                    <div className="container">
                        <div className="z-index-common">
                            {/* Top Header */}
                            <div className="header-top">
                                <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                                    <div className="col-auto d-none d-lg-block">
                                        <i className="fal fa-phone text-white" style={{marginRight:"6px"}}></i>
                                        <a href="tel:+91 9300688888" className="text-white pe-2 mobile-no-1">
                                            +91 9300688888
                                        </a>

                                        <i
                                            className="fal fa-envelope text-white"
                                            style={{ borderLeft: '2px solid #fff', paddingLeft: '10px', marginRight:"6px" }}
                                        ></i>
                                        <a href="mailto:info@samratmasala.com" className="text-white email-id">
                                            info@samratmasala.com
                                        </a>
                                    </div>
                                    <div className="col-auto">
                                        <div className="header-links">
                                            <ul>
                                                <li className="d-none d-xxl-inline-block">
                                                    <i className="fal fa-location-dot"></i>
                                                    <a>
                                                        <b>Office </b>
                                                        59/5 Pardeshi Pura, Indore
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="social-links">
                                                        <a href="https://www.facebook.com/samratmasalaindore" target="_blank" rel="noopener noreferrer">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                        <a href="https://www.instagram.com/samratmasala" target="_blank" rel="noopener noreferrer">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Mobile Header Buttons */}
                                    <div className="col-auto d-md-none d-xs-block ms-auto">
                                        <Link to="/contact" className="th-btn mobile">
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Main Navigation */}
                            <div className="menu-area">
                                <div className="logo-bg"></div>
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-auto">
                                        <div className="header-logo">
                                            <Link to="/">
                                                <img src="/img/favicons/logo.png" alt="Samrat Masala" loading="lazy" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <nav className="main-menu d-none d-lg-inline-block">
                                            <ul>
                                                <li className={`${isActive('/', true) ? 'nav-active' : ''}`}>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li className={`${isActive('/about', true) ? 'nav-active' : ''}`}>
                                                    <Link to="/about">About Us</Link>
                                                </li>
                                                <li className={`menu-item-has-children ${isActive('/products') ? 'nav-active' : ''}`}>
                                                    <Link to="/contact">Products</Link>
                                                    <ul className="sub-menu">
                                                        {products.map((product, index) => (
                                                            <li key={index}>
                                                                <Link to={product.path}>{product.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className={`${isActive('/contact', true) ? 'nav-active' : ''}`}>
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                        <button
                                            type="button"
                                            className="th-menu-toggle d-block d-lg-none"
                                            onClick={toggleMobileMenu}
                                        >
                                            <i className="far fa-bars"></i>
                                        </button>
                                    </div>
                                    <div className="col-auto d-none d-xl-block ms-auto">
                                        <Link to="/contact" className="th-btn">
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;