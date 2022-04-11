import React from 'react'

function Contact() {
  return (
    <div className='contact-container' id='contact'>
    <div className="contact-content">
    <div className="ccForm">
    <h3>Contact Me</h3>
        <form
         name="contact"
         method="POST"
         data-netlify="true"
          
        >
          <div className="ccField-prepend">
            <label>Name<span className="star">*</span> </label>
            <input type="text" name="firstName" required placeholder='Name...'/>
          </div>
          <div className="ccField-prepend">
            <label>Email<span className="star">*</span> </label>
            <input type="text" name="_replyto" required placeholder='Email...' />
          </div>
          <div className="ccField-prepend">
            <label>Message<span className="star">*</span> </label>
            <textarea name="message" required placeholder="Leave a message..."></textarea>
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </div> 
  </div>
  )
}

export default Contact