import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../User/Slider.css'

// import required modules
import { Pagination ,Navigation} from 'swiper/modules';


function Slider(props) {
  return (
    <div className="m-8 box-border">
    <Swiper
      slidesPerView={3} // Adjust this value as needed
      spaceBetween={20} // Adjust the spacing between slides
      navigation={true} 
      modules={[Navigation]}
      className="mySwiper"
    >
      {props.choice.map((e) => (
        <SwiperSlide className={`border-s-indigo-800`} key={e.name}>{e.name}</SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default Slider