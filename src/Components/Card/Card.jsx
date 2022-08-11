import React from 'react'
import './Card.css'
export const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.emoji} alt="" />
        <span>{props.heading}</span>
        <span>{props.detail}</span>
        <button className="c_button">LEARN MORE</button>
    </div>
  )
}
