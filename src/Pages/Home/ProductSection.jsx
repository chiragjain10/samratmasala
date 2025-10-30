import './ProductsSection.css';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
    const products = [
        {
            id: 1,
            title: "Turmeric Powder",
            subtitle: "PURE SPICES",
            description: "Our premium turmeric powder is sourced from the finest farms, offering rich color and authentic flavor. Perfect for curries, rice dishes, and traditional Indian recipes.",
            image: "/images/turmeric.png",
            hoverImage: "/images/turmeric.png",
            bgColor: "#fef7e0",
            link: "/products/turmeric-powder"
        },
        {
            id: 2,
            title: "Red Chilli Powder",
            subtitle: "PURE SPICES",
            description: "Experience the perfect balance of heat and flavor with our carefully ground red chilli powder. Adds vibrant color and authentic spice to your dishes.",
            image: "/images/redchilli.png",
            hoverImage: "/images/redchilli.png",
            bgColor: "#ffe8e8",
            link: "/products/red-chilli-powder"
        },
        {
            id: 3,
            title: "Coriander Powder",
            subtitle: "PURE SPICES",
            description: "Freshly ground coriander powder with aromatic flavor that enhances the taste of vegetables, curries, and marinades. A must-have in every kitchen.",
            image: "/images/coriander.png",
            hoverImage: "/images/coriander.png",
            bgColor: "#f0f8e8",
            link: "/products/coriander-powder"
        },
        {
            id: 4,
            title: "Garam Masala",
            subtitle: "BLENDED SPICES",
            description: "Our special blend of aromatic spices creates the perfect garam masala. The secret behind flavorful biryanis, curries, and traditional Indian dishes.",
            image: "/images/garammasala.png",
            hoverImage: "/images/garammasala.png",
            bgColor: "#f5f0e6",
            link: "/products/garam-masala"
        }
    ];

    return (
        <section className="products-love-section space bg-smoke" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title-area text-center">
                            <span className="sub-title">
                                <img src="/images/icons/redheart.png" alt="icon" />
                                Products You Will Love
                            </span>
                            <h2 className="sec-title">Premium Quality Masalas</h2>
                        </div>
                    </div>
                </div>

                {/* <div className="row products-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`col-12 product-item ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
                        >
                            <div className="product-card mega-hover">
                                <div className="row align-items-center">
                                    
                                    <div className="col-lg-6">
                                        <div className="product-img">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="main-img"
                                            />
                                            <img
                                                src={product.hoverImage}
                                                alt={product.title}
                                                className="hover-img"
                                            />
                                            <div className="product-bg" style={{ backgroundColor: product.bgColor }}></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="product-content">
                                            <span className="product-subtitle">{product.subtitle}</span>
                                            <h3 className="product-title">{product.title}</h3>
                                            <p className="product-text">{product.description}</p>
                                            <a href={product.link} className="th-btn">
                                                View More
                                                <i className="fas fa-chevron-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="products">
                    <div className="row">
                        {products.map((product, index) => (
                            <div className="col-lg-3 col-6" key={index}>
                                <Link to={product.link}>
                                    <div className="product card p-3">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;