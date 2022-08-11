import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import leetcode from '../../img/leetCode.png'

import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import {FloatingDiv} from '../FloatingDiv/FloatingDiv'

export const Intro = () => {
  return (
    <div className='intro'>
        <div className="i_left">
            <div className="i_name">
                <span>Hi! I Am</span>
                <span>Indranil Naskar</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo alias esse neque iusto veritatis iste corporis beatae vero magnam vitae. Non praesentium eius optio eveniet!</span>
            </div>
            <button className="i_button">Hire Me</button>
            
            <div className="i_icons">
                <a href='https://github.com/indra0421'>
                <img src={Github} alt="" />
                </a>
                <a href=''>
                <img src={Instagram} alt=""/>
                </a>
                <a href='https://www.linkedin.com/in/indranil-naskar-296a94203'>
                <img src={Linkedin} alt="" />
                </a>
            </div>

        </div>
        <div className="i_right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'6%', left :'62%'}}>
                <FloatingDiv image ={Crown} tex1 ="Web" tex2 ="Developer"/>
            </div>
            <div style={{top:'20rem' , left:'0rem'}}>
                <FloatingDiv image ={thumbup} tex1 ="Best Design" tex2 ="Award"/>
            </div>
            {/* blur divs */}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{background: "#C1F5FF",
            top : '17rem',
            width :'21rem',
            height: '11rem',
            left: '-9rem'
            }}></div>
        </div>
    </div>
  )
}

