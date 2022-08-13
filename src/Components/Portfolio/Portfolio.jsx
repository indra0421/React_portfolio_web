import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'

import siderbar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'


export const Portfolio = () => {
  return (
    <div className='portfolio'>
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor = {true}
        className = 'portfolio-slider'>
           
           <SwiperSlide className='swiper-slide'>
             <img src={siderbar} alt="" />
           </SwiperSlide>  
           <SwiperSlide className='swiper-slide'>
             <img src={musicapp} alt="" />
           </SwiperSlide>  
           <SwiperSlide className='swiper-slide'>
             <img src={hoc} alt="" />
           </SwiperSlide>  
           <SwiperSlide className='swiper-slide'>
             <img src={ecommerce} alt="" />
           </SwiperSlide>  
        </Swiper>
    </div>
  )
}

