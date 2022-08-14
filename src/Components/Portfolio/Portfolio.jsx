import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'

import siderbar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'

import {themeContext} from '../../Context'
import { useContext } from 'react'


export const Portfolio = () => {

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  return (
    <div className='portfolio' id= 'Portfolio'>
        {/* heading */}
        <span  style={{color : darkMode? 'white' : 'black'}}>Recent Projects</span>
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

