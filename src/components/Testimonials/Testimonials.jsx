import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './Testimonials.css';
import { Data } from './Data';

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
        <h2 className="section__title">Testimonials</h2>
        <span className="section__subtitle">What My Clients Say</span>        

        {/* <Swiper className="testimonial__container container grid"> */}
        <Swiper className="testimonial__container"
          
          // slidesPerView={1}
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
            // 1024: {
            //   slidesPerView: 5,
            //   spaceBetween: 50,
            // },
          }}
          modules={[Pagination]}
        >
          {Data.map(({id, name, image, review}, index) => {
            return (
              <SwiperSlide className="testimonial__card swiper-slide" key={`testimonial-${index}`}>
                
                <img src={image} alt="testimonial" className="testimonial__img" />
                <h3 className="testimonial__name">{name}</h3>
                <p className="testimonial__description">{review}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>

        
    </section>
  )
}

export default Testimonials;