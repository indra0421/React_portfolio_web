import React from 'react'
import './Card.css'

import {themeContext} from '../../Context'
import { useContext } from 'react'
export const Card = (props) => {

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='card'>
        <img src={props.emoji} alt="" />
        <span>{props.heading}</span>
        <span  style={{color : darkMode? 'white' : ''}}>{props.detail}</span>
        <button className="c_button">LEARN MORE</button>
    </div>
  )
}
