import React from 'react'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import {Card} from '../Card/Card'
import './Services.css'
import Resume from './Resume.pdf'

export const Services = ()=> {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo quos modi error neque porro!</span>
            <a href={Resume} download>
            <button className="button s_button">Donwload CV</button>
            </a>
            
            <div className="blur s_blur1" style={{background: "skyblue"}}></div> 
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left:'14rem'}}>
              <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma,sketh,phtoshop,adobe xd"}
              />
            </div>
            {/* second card  */}
            <div style={{top:'12rem',left:'-4rem'}}>
              <Card
                emoji = {Glasses}
                heading = {'Developement'}
                detail = {"HtTML,CSS,JAVASCRIPT,REACT"}
              />
            </div>
            {/* third card  */}
            <div style={{top:'19rem',left:'12rem'}}>
              <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {'Lorem ipsum dolor sit amet consectetur adipisicing'}
              />
            </div>
            <div className="blur s_blur2" style={{background: "rgb(238 210 255)"}}></div> 

        </div>
    </div>
  )
}

