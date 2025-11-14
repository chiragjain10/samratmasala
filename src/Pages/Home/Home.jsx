import About from './About'
import Hero from './Hero'
import ProductsSection from './ProductSection'
import BrandCarousel from './BrandCarousel '
import Testimonials from './Testimonials'
import "./Home.css"

const Home = () => {
    return (
        <>
            <Hero />
            <ProductsSection />
            <section className='banner3'>
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-6">
                            <div className="contents">
                                <h2>59+ Years of Crafting Pure Spice Excellence.</h2>
                                <p>Since 1965, spicing every Indian kitchen with tradition, where every spice reflects timeless heritage and a promise of wholesome delight.</p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>
            <About />
            <section className='banner2'>
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-6">
                            <div className="contents">
                                <h2>Samrat Masala – The Royal Taste of Tradition</h2>
                                <p>Samrat Masala welcomes you into the rich world of pure spices—a realm where authentic Indian flavours unite with holistic well-being, adding depth and harmony to every meal.</p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>
            <BrandCarousel />
            <Testimonials />
        </>
    )
}


export default Home;