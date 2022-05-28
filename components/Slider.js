import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function Slider() {
  return (
    <div className="absolute lg:bottom-0 bg-black h-[70px] lg:h-[100px] w-full">
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        className="flex justify-center items-center h-full w-full lg:w-[70%]"
      >
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor7.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor8.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full opacity-50 hover:opacity-100" src="slider/sponsor9.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[50%] mt-5 opacity-50 hover:opacity-100" src="slider/sponsor10.png" alt="" /></SwiperSlide>
      </Swiper>  
    </div>
  )
}

export default Slider