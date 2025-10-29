import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <section className="z-index-common bg-smoke2">
                <div className="container">
                    <div className="newsletter-wrap foot-top">
                    <div className="col-lg-4 text-center">
                        <i className="fa fa-phone"></i>
                        <span>DO YOU HAVE A QUESTION?</span><br />
                        <span>+91 9300688888</span>
                    </div>
                    <div className="col-lg-4 text-center">
                        <i className="fa fa-envelope"></i>
                        <span>BULK ORDER ENQUIRY?</span><br />
                        <span>info@samratmasala.com</span>
                    </div>
                    <div className="col-lg-4 text-center">
                        <i className="fa fa-check-square"></i>
                        <span>SUPPORT QUESTION?</span><br />
                        <span>+91 9300688888</span>
                    </div>
                </div>
                </div>
            </section>

            {/* Main Footer */}
            <footer className="footer-wrapper footer-layout3">
                <div className="widget-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            {/* Company Info */}
                            <div className="col-md-6 col-xl-2">
                                <div className="widget footer-widget">
                                    <div className="th-widget-about">
                                        <div className="about-logo">
                                            <img src="/img/favicons/logo.png" alt="Samrat Masala" />
                                        </div>
                                        <p className="about-text">
                                            Samrat Masala brings you the authentic taste of traditional Indian spices.
                                        </p>
                                        <div className="th-social">
                                            <Link to="https://www.facebook.com/samratmasalaIndore" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                            <Link to="https://www.instagram.com/samratmasala" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-instagram"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="col-md-6 col-xl-2">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Our Products - Only 4 as per your requirement */}
                            <div className="col-md-6 col-xl-2">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Our Products</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><Link to="/products/turmeric-powder">Turmeric Powder</Link></li>
                                            <li><Link to="/products/red-chilli-powder">Red Chilli Powder</Link></li>
                                            <li><Link to="/products/coriander-powder">Coriander Powder</Link></li>
                                            <li><Link to="/products/garam-masala">Garam Masala</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Support */}
                            <div className="col-md-6 col-xl-2">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Support</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            {/* <li><Link to="/contact">Trade Inquiry</Link></li> */}
                                            <li><Link to="/terms">Terms & Conditions</Link></li>
                                            <li><Link to="/faq">FAQ's</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="col-md-6 col-xl-2">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Contact Us</h3>
                                    <div className="th-widget-contact">
                                        <div className="info-box">
                                            <div className="info-box_icon">
                                                <i className="fas fa-location-dot"></i>
                                            </div>
                                            <p className="info-box_text">
                                                <b>Office:- </b>
                                                59/5 Pardeshi Pura, Indore
                                            </p>
                                        </div>
                                        <div className="info-box">
                                            <div className="info-box_icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <p className="info-box_text">
                                                <Link to="tel:+91 9300688888" className="info-box_link">
                                                    +91 9300688888
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="info-box">
                                            <div className="info-box_icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <p className="info-box_text">
                                                <Link to="mailto:info@samratmasala.com" className="info-box_link">
                                                    info@samratmasala.com
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="copyright-wrap">
                    <div className="container">
                        <div className="row gy-2 align-items-center">
                            <div className="col-md-8">
                                <p className="copyright-text">
                                    Copyright <i className="fal fa-copyright"></i> {new Date().getFullYear()}
                                    <Link to="/"> Samrat Masala</Link>. All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-md-4 text-center text-md-end">
                                <div className="payment-img">
                                    <img src="/img/normal/payment_methods.png" alt="Payment Methods" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;