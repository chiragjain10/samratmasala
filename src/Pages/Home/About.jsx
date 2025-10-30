import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* About Section */}
            <div className="overflow-hidden space" id="about-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 mb-30 mb-xl-0">
                            <div className="img-box1">
                                <div className="img1">
                                    <img
                                        src="/images/websiteimage/7d70f105-5a53-49dd-a96f-439fad1caa47.webp"
                                        alt="Samrat Masala Factory"
                                    />
                                </div>
                                <div className="img2">
                                    <img
                                        src="/images/turmeric.png"
                                        alt="Samrat Masala Products"
                                        style={{ width: "75%" }}
                                    />
                                </div>
                                <div className="year-counter">
                                    <div className="year-counter_number">
                                        <span className="counter-number">59</span>+
                                    </div>
                                    <p className="year-counter_text">Years Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="ps-xxl-5 ps-xl-2 ms-xl-1 text-center text-xl-start">
                                <div className="title-area mb-32" data-aos="fade-up">
                                    <span className="sub-title">
                                        <img
                                            src="/images/icons/redheart.png"
                                            alt="shape"
                                        />
                                        About Our Company
                                    </span>
                                    <h2 className="sec-title">The Founding Story of Samrat Masale</h2>
                                    <p className="sec-text">
                                        Founded in 1968, the Indian spice landscape was distinctly different from today. At that time, it was common practice for families, particularly housewives, to source whole spices and grind them at home (masale ghar par taiyar kiye jate the). This ensured maximum freshness and purity. Packaged, ready-to-use spices were not yet the norm in Indian households.
                                        It was in this market context that Shri Shyamsundar Ji Vijayvergiya recognized a clear need and opportunity. He stepped in as a pioneer, offering an alternative to the laborious home-grinding process.
                                    </p>
                                    <p className="sec-text">Shri Shyamsundar Ji's success was not an overnight feat; it was a testament to his dedication to core values:</p>
                                    <p className="sec-text">Hard Work and Dedication: He built the business from the ground up through sheer effort and unwavering commitment.</p>
                                </div>
                                <div data-aos="fade-up">
                                    <Link to="/about" className="th-btn">
                                        Know More
                                        <i className="fas fa-chevron-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            {/* <section className="features-section" data-pos-for="#shop-sec" data-sec-pos="bottom-half" data-aos="fade-in">
                <div className="container z-index-common">
                    <div className="row gy-30">
                        <div className="col-xl-6 aos-init">
                            <div
                                className="offer-card mega-hover"
                                style={{ backgroundImage: "url('/images/index/cta_bg_1_1.jpg')" }}
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <h3 className="box-title">
                                    100% Pure &<br />Natural
                                </h3>
                                <Link className="th-btn" to="/contact">
                                    Buy Now
                                    <i className="fas fa-chevron-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 aos-init">
                            <div
                                className="offer-card mega-hover"
                                style={{ backgroundImage: "url('/images/index/cta_bg_3_1.jpg')" }}
                                data-aos="zoom-in"
                                data-aos-delay="150"
                            >
                                <h3 className="box-title">
                                    No Artificial <br />Preservatives
                                </h3>
                                <Link className="th-btn" to="/contact">
                                    Buy Now
                                    <i className="fas fa-chevron-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default About;