import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import avatar from "../../assets/images/Avatar.png"
import 'swiper/css';
import 'swiper/css/navigation';
import '../../Styles/Home/Testimonial.css';
import webflowIcon from "../../assets/images/webflowImg.png";


const Testimonial = () => {
  const testimonials = [
    {
      quote: '"Working with Pakholding has transformed our business approach. Their insights and dedication are unmatched!"',
      image: '/path/to/image1.jpg',
      name: 'John Doe',
      position: 'CEO, Retail Inc.'
    },
    {
      quote: '"Another amazing testimonial about how great Pakholding is for business growth."',
      image: '/path/to/image2.jpg',
      name: 'Jane Smith',
      position: 'CTO, Tech Corp'
    }
  ];

  return (
    <div className="testimonial-section">
      <div className="weblogo-container">
        <img src={webflowIcon} alt="Webflow Logo" className="webflow-logo" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-content">
              <p className="testimonial-quote">{testimonial.quote}</p>
              
              <div className="testimonial-image-container">
                {testimonial.image && (
                  <img
                    src={avatar}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                )}
              </div>
              
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-position">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default Testimonial;