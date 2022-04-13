import React from 'react'

function Footer() {
  return (
    <footer>
    <p>© 2022 Jesse James Photos</p>
    <div className="nextp">Beaufort, SC</div>
    <div className="social-container">
      <a
        href="https://www.instagram.com/jessejamesphotography_"
        target="_blank" rel="noreferrer"
      >
        <i className="fab fa-instagram fa-3x"></i>
      </a>
      <a
        href="https://www.facebook.com/JesseJamesPhoto/"
        target="_blank" rel="noreferrer"
      >
        <i className="fab fa-facebook-square fa-3x"></i>
      </a>
    </div>
    <p>Website design by <a href="https://www.developer-jesseg.com/" target='_blank' rel="noreferrer">me!</a></p>
  </footer>
  )
}

export default Footer