import React from 'react'
import './Footer2.css'

const Footer2 = () => {
  return (
    <footer>
      <div className="content">
        <div className="left_box">
          <div class="upper">
            <div class="topic">About us</div>
            <p>CodingLab is a channel where you can learn HTML,
              CSS, and also JavaScript along with creative CSS Animations and Effects.</p>
          </div>
          <div class="lower">
            <div class="topic">Contact us</div>
            <div class="phone">
              <a href="#"><i class="fas fa-phone-volume"></i>+007 9089 6767</a>
            </div>
            <div class="email">
              <a href="#"><i class="fas fa-envelope"></i>abc@gmail.com</a>
            </div>
          </div>
        </div>

        {/* //middle box */}
        <div class="middle box">
          <div class="topic">Our Services</div>
          <div><a href="#">Web Design, Development</a></div>
          <div><a href="#">Web UX Design, Reasearch</a></div>
          <div><a href="#">Web User Interface Design</a></div>
          <div><a href="#">Theme Development, Design</a></div>
          <div><a href="#">Mobile Application Design</a></div>
          <div><a href="#">Wire raming & Prototyping</a></div>
        </div>

        {/* right box */}
        <div class="right box">
          <div class="topic">Subscribe us</div>
          <form action="#">
            <input type="text" placeholder="Enter email address" />
            <input type="submit" name="" value="Send" />
            <div class="media-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </form>
        </div>


      </div>
    </footer>

  )
}

export default Footer2