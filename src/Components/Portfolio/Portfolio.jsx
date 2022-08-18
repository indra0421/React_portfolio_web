import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'

import siderbar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'

import gym from '../../img/gym.png'
import todoapp from '../../img/todoapp.png'
import netflix_clone from '../../img/netflix_clone.png'

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
        
        breakpoints = {{
            
          480 : {
            slidesPerView : 3
          },
          0 : {
            slidesPerView : 1
          }
        }}       
        
        grabCursor = {true}
        className = 'portfolio-slider'>
           <SwiperSlide className='swiper-slide'>
             <a href="https://indra0421.github.io/netflix_clone" target='__blank'><img src={netflix_clone} alt="" /></a>
           </SwiperSlide>
           <SwiperSlide className='swiper-slide'>
             <a href=""><img src={gym} alt="" /></a>
           </SwiperSlide>
           <SwiperSlide className='swiper-slide'>
             <a href="https://indra0421.github.io/simple_todo_app" target="__blank"><img src={todoapp} alt="" /></a>
           </SwiperSlide>
           
           <SwiperSlide className='swiper-slide'>
             <a href=""><img src={siderbar} alt="" /></a>
           </SwiperSlide>  
           <SwiperSlide className='swiper-slide'>
             <a href=""><img src={musicapp} alt="" /></a>
           </SwiperSlide>  
           <SwiperSlide className='swiper-slide'>
             <a href=""><img src={hoc} alt="" /></a>
           </SwiperSlide>  
           <SwiperSlide className='swiper-slide'>
             <a href=""><img src={ecommerce} alt="" /></a>
           </SwiperSlide>  
        </Swiper>
    </div>
  )
}

