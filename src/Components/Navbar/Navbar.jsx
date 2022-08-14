import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'

//react scroll -- npm i react-scroll
import { Link } from 'react-scroll'

export const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Indranil</div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} >
                            <li className='nav_li'>Home</li>
                        </Link>

                        <Link spy={true} to='Services' smooth={true} >
                            <li className='nav_li'>Services</li>
                        </Link>

                        <Link spy={true} to='Experience' smooth={true} >
                            <li className='nav_li'>Experience</li>
                        </Link>

                        <Link spy={true} to='Portfolio' smooth={true} >
                            <li className='nav_li'>Portfolio</li>
                        </Link>

                        <Link spy={true} to='Testimonials' smooth={true} >
                            <li className='nav_li'>Testimonials</li>
                        </Link>





                    </ul>
                </div>
                <Link spy={true} to='Contact_details' smooth={true} >
                    <button className="n-button">
                        Contact me
                    </button>
                </Link>
            </div>
        </div>
    )
}