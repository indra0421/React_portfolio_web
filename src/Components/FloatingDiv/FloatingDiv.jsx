import React from 'react'
import './Floating.css'
export const FloatingDiv = (props) => {
  return (
    <div className='floatingdiv'>
        <img src={props.image} alt="" />
        <span>
            {props.tex1} 
            <br/>
            {props.tex2}
        </span>
    </div>
  )
}
