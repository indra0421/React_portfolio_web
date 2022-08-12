import React from 'react'
import './Works.css'
import upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'

export const Works = () => {
    return (
        <div className='works'>
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit
                <br/>
                Sed illo quos modi error neque porro!
                <br/>
                Sed illo quos modi error neque porro!
                <br/>
                Sed illo quos modi error neque porro!
                
                </span>

                <button className="button s_button">Hire Me</button>


                <div className="blur s_blur1" style={{ background: "rgb(115, 215, 235)" }}></div>
            </div>
            {/* right side of works portion */}
            <div className="m_right">
                <div className="m_mainCircle">
                    <div className="m_secCircle">
                        <img src={upwork} alt="" />
                    </div>
                    <div className="m_secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="m_secCircle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="m_secCircle">
                        <img src={shopify} alt="" />
                    </div>
                    <div className="m_secCircle">
                        <img src={facebook} alt="" />
                    </div>
                   
                </div>
                {/* background circles */}
                <div className="m_backCircle blueCircle" ></div>
                <div className="m_backCircle yellowCircle" ></div>
            </div>
        </div>
    )
}
