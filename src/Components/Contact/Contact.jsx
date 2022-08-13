import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Contact = ()=> {

    const form = useRef();

    const sendEmail = (event) =>{
        event.preventDefault();

    emailjs.sendForm('service_4rjudy4','template_ftycsv4',form.current, 'DNkX--0Q10Er-PpPO')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});

    alert('Thanks for your response...your response has been recorded');
    }

    

  return (
    <div className='contact_form'>
       <div className="m_left">
         <div className="awesome">
            <span>Get in touch</span>
            <span>Contact Me</span>
            <div className="blur s_blur1"
            style={{background:"#ABF1FF94" }}></div>
         </div>
         <div className="blur c_blur2" style={{background: "skyblue"}}></div>
       </div>
     

     {/* RIGHT  */}
     <div className="c_right">
        <form action="" className='c_form' ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Name'/>

            <input type="email" name="user_email" className='user' placeholder='Email id'/>

            <textarea name="message" className='user' placeholder='Message'/>

            <input type="submit" value="Send" className='button f_button'/>

            <div className='blur c_blur1'
            style={{ background: "var(--purple)"}}></div>
        </form>
     </div>
    </div>
  )
}

