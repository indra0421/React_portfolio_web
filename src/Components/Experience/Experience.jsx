import React from 'react'
import './Experience.css'

import {themeContext} from '../../Context'
import { useContext } from 'react'

function Experience() {
   
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience' id = 'Experience'>
      <div className="achivement">
         <div className="circle"  style={{color : 'black'}}>8+</div>
         <span>Years</span>
         <span>Experience</span>
     </div>
      <div className="achivement">
         <div className="circle" style={{color : 'black'}}>20+</div>
         <span>Completed</span>
         <span>Projects</span>
     </div>
      <div className="achivement">
         <div className="circle" style={{color : 'black'}}>4+</div>
         <span>Companies</span>
         <span>Work</span>
     </div>
    </div>
  )
}

export default Experience