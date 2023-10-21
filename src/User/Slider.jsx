import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../User/Slider.css'

// import required modules
import { Pagination } from 'swiper/modules';


function Slider(props) {
  return (
    <div className="m-8">
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >

        {props.choice.map((e)=>(
            <SwiperSlide>{e.name}</SwiperSlide>
        ))}

 
     
    </Swiper>
  </div>
  )
}

export default Slider