import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'

export const Navbar = () =>{
    return(
      <div className='n-wrapper'>
        <div className='n-left'>
             <div className='n-name'>Indranil</div>
             <Toggle/>
        </div>
        <div className='n-right'>
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div> 
            <button className="n-button">
                Contact us
            </button>
        </div>
      </div>
    )
}