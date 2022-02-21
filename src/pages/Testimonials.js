import React from 'react'
import testVR from '../img/testimonialVR.jpg'
import testimonial2 from '../img/testimonial2.jpg'
import testimonial3 from '../img/philR.jpg'

function Testimonials() {
  return (
    <>
        <section id="testimonials">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="testimonial">
            <div className="testimonial-image-container">
            <img src={testVR} alt="" />
            </div>
            <p>Jesse was such a joy to have as our wedding photographer. He captured the mood of our day perfectly! It’s hard to find a photographer that is able to use natural light as masterfully as Jesse has. He captured so many amazing candid moments and even made us look so natural for posed shots. We are so happy we went with him! A definite yes!</p>
          </div>
          <div className="testimonial">
            <div className="testimonial-img-container">
            <img src={testimonial2} alt="" />
            </div>
            <p>My husband and I got married earlier this year and we were extremely fortunate to have booked with Jesse James Photos. Jesse knew all the best photo spots. He made us feel comfortable immediately and helped us with tons of different pose ideas. I would definitely recommend hiring Jesse for any type of photography. His work is amazing!</p>
          </div>
          <div className="testimonial">
            <div className="testimonial-image-container">
            <img src={testimonial3} alt="" />
            </div>
            <p>Just an absolutely amazing experience and pictures. Very satisfied and happy with the results of our wedding pictures. Definitely worth every penny plus some and would highly recommend Jesse to everyone that's looking for a photographer!!</p>
          </div>
        </div>
      </div>
    </section></>
  )
}

export default Testimonials