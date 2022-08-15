import React from 'react'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { Card } from '../Card/Card'
import './Services.css'
import Resume from './Resume.pdf'

import { themeContext } from '../../Context'
import { useContext } from 'react'

import { motion } from 'framer-motion'

export const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const transition = { duration: 1, type: 'spring' }

  return (
    <div className="services" id='Services'>
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : 'black' }}>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo quos modi error neque porro!</span>
        <a href={Resume} download>
          <button className="button s_button">Donwload CV</button>
        </a>

        <div className="blur s_blur1" style={{ background: "skyblue" }}></div>
      </div>
      {/* right side */}


      <div className="cards">

        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}

          style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"FIGMA,SKETCH,ADOBE XD SDGSGDSGSDGDSG"}
          />
        </motion.div>
        {/* second card  */}
        <motion.div

          initial={{ left: '-10rem' }}
          whileInView={{ left: '-4rem', top: '12rem' }}
          transition={transition}

          style={{ top: '12rem', left: '-4rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developement'}
            detail={"HTML,CSS,JAVASCRIPT,REACT JS,NODE JS"}
          />
        </motion.div>
        {/* third card  */}
        <motion.div

          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}

          style={{ top: '19rem', left: '12rem' }}>
          <Card
            emoji={Humble}
            heading={'Programing'}
            detail={"C,C++,JAVA,PYTHON,JAVASCRIPT"}
          />
        </motion.div>
        <div className="blur s_blur2" style={{ background: "rgb(238 210 255)" }}></div>

      </div>
    </div>
  )
}

