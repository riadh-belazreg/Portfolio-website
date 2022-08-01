import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'proxym-IT',
    review: "This post summarizes my approach to preparing for and delivering performance reviews that are fair, build trust and motivate people."
  },
  {
    avatar: AVTR2,
    name: 'ISimm',
    review: "This post summarizes my approach to preparing for and delivering performance reviews that are fair, build trust and motivate people."
  },
  {
    avatar: AVTR3,
    name: 'Esprit',
    review: "This post summarizes my approach to preparing for and delivering performance reviews that are fair, build trust and motivate people."
  },
  {
    avatar: AVTR4,
    name: 'Esprit',
    review: "This post summarizes my approach to preparing for and delivering performance reviews that are fair, build trust and motivate people."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials