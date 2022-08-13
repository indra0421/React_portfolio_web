import React from 'react'
import './Testimonials.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Pagination} from 'swiper'
import 'swiper/css/pagination'

import Clients from './Clients'

export const Testimonials =()=> {
   

  return (
    <div className='t_wrapper'>
        <div className="t_heading">
            <span>Clients always get </span>
            <span> Exceptional Work </span>
            <span> from me...</span>
            <div className="blur t_blur1" style={{background: "rgb(238 210 255)"}}></div> 
            <div className="blur t_blur2" style={{background: "skyblue"}}></div> 

        </div>
     {/* slider  */}
      <Swiper

      modules={[Pagination]}
      slidesPerView = {1}
      pagination= {{clickable: true}}
      className = 'swiper'
     >
         {Clients.map((client,index)=>{
            return(
                <SwiperSlide key={index} className ='swiper_slide'>
                <div className="testimonial">
                    <img src={client.img} alt="" />
                     <span>{client.review}</span>
                </div>
               </SwiperSlide>
            )
         })}

      </Swiper>
    </div>
  )
}

