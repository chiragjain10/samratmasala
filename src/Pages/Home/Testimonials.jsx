import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.css';

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Samrat Masala have truly elevated my cooking. The flavors are rich and authentic, reminding me of my grandmother's kitchen. I wouldn't use any other brand!",
      name: "Amit Khurana",
      image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
    },
    {
      id: 2,
      text: "As a chef, I always trust quality ingredients, and Samrat Masala never lets me down. Their spices are fresh, full of flavor, and add the perfect touch to every dish.",
      name: "Priya Verma", 
      image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
    },
    {
      id: 3,
      text: "The aroma and taste of Samrat Garam Masala is unmatched. It brings out the authentic Indian flavor in all my recipes. Highly recommended!",
      name: "Rajesh Kumar",
      image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
    },
    {
      id: 4,
      text: "I've been using Samrat Masala for years. Their Turmeric Powder gives the perfect color and their Red Chilli Powder has just the right heat. Best in quality!",
      name: "Sunita Patel",
      image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
    }
  ];

  return (
    <section className="overflow-hidden bg-smoke2" id="testi-sec">
      <div className="shape-mockup testi-shape1" data-top="0" data-left="0">
        {/* <img src="/images/index/testimonial.png" alt="testimonial" loading="lazy" /> */}
      </div>
      <div className="shape-mockup" data-bottom="0" data-right="0">
        <img  
          src="/images/index/testimonial.png" 
          alt="shape" 
          loading="lazy" 
        />
      </div>
      
      <div className="container">
        <div className="testi-card-area">
          <div className="title-area" data-aos="fade-up">
            <span className="sub-title">
              <img src="/images/icons/redheart.png" alt="Icon" loading="lazy" />
              Testimonials
            </span>
            <h2 className="sec-title">Our Customer Feedback</h2>
          </div>
          
          <div className="testi-card-slide">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={800}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                }
              }}
              onSwiper={(swiper) => {
                // Delay navigation update
                setTimeout(() => {
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testi-card" data-aos="fade-up" data-aos-delay="150">
                    <p className="testi-card_text">
                      {testimonial.text}
                    </p>
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          loading="lazy" 
                        />
                      </div>
                      <div className="testi-card_content">
                        <h3 className="testi-card_name">{testimonial.name}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="icon-box">
              <button ref={prevRef} className="slider-arrow default">
                <i className="far fa-arrow-left"></i>
              </button>
              <button ref={nextRef} className="slider-arrow default">
                <i className="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;