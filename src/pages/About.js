import React from 'react'
import jesseJamesPhotography from '../img/jesse_james_photography.jpg'

function About() {
  return (
    <div className="about-Container" id="about">
        <div className="about-content">
            <img src={jesseJamesPhotography} alt="" />
            <div className="who-content-container">
                
                <p>Hey there! Photography has been my career for 14 years! I love to capture amazing images for my clients and strive to make every photo session as fun and comfortable as possible (Because lets face it, not everyone loves to be in front of the camera. Me included!).

My main focus on photography is weddings, elopements, family, and engagement sessions. I've photographed over 400 weddings in my career and more family shoots then I can count. I love meeting new people and capturing beautiful images for them that will last a lifetime!</p>
<div className="about-btn-container">
  <button className='btn'><a href="#portfolio">Portfolio</a></button>
  <button className='btn'><a href="#contact">Contact</a></button>
  </div>
            </div>
            
        </div>
    </div>
  )
}

export default About