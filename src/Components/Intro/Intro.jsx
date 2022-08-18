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
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'

import { motion } from 'framer-motion'

export const Intro = () => {
    // for animation
    const transition = { duration: 2, type: 'spring' }
    //theme change
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='intro'>
            <div className="i_left">
                <div className="i_name">
                    <span style={{ color: darkMode ? 'white' : 'black' }}>Hi! I Am</span>
                    <span>Indranil Naskar</span>
                    <span>Currently i am persuing Btech at Netaji Subhash Engineering College in Information Technology.</span>
                </div>
                <button className="i_button">Hire Me</button>

                <div className="i_icons">
                    <a href='https://github.com/indra0421'>
                        <img src={Github} alt="" />
                    </a>
                    <a href=''>
                        <img src={Instagram} alt="" />
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
                <motion.img

                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    src={glassesimoji} alt="" />

                <motion.div

                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    className='floating_div'
                    style={{ top: '6%', left: '62%' }}>
                    <FloatingDiv image={Crown} tex1="Web" tex2="Developer" />
                </motion.div>
                <motion.div

                    initial={{ top: '20rem', left: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    className='floating_div'
                    style={{ top: '20rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} tex1="Competitive" tex2="Programer" />
                </motion.div>
                {/* blur divs */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{
                    background: "#C1F5FF",
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}

