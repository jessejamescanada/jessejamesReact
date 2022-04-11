import React from 'react'
import {Link} from 'react-router-dom'
import About from './About'
import Card from '../components/Card'
import HomePortfolio from '../components/HomePortfolio'
import charlestonShowcase from '../img/charleston_wedding_photography.jpg'
import servicesShowcase from '../img/serviceshowcase.jpg'
import testimonialShowcase from '../img/wedding.jpg'
import investmentShowcase from '../img/investment_showcase.jpg'
import portfolioShowcase from '../img/loveshowcase.jpg'
import servicesWedding from '../img/charleston_wedding.jpg'
import servicesFamily from '../img/families.jpg'
import servicesRealEstate from '../img/realestatePort/highend_kitchen.jpg'
import Testimonials from './Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'



function Home() {
    
  return (
<>
    {/* showcase1 */}
    <div className="showcase-container" id='showcase1'>
        <img src={charlestonShowcase} alt="" />
        <div className="showcase-content">
        <h1>Beaufort Wedding & Family Photography</h1>
            <h3 className="primary-title2">Jesse James Photos</h3>
            <div className="social-container">
                <a href="https://www.instagram.com/jessejamesphotography_" target="_blank">
                    <i className="fab fa-instagram fa-3x"></i>
                </a>
                <a
          href="https://www.facebook.com/JesseJamesPhoto/"
          target="_blank"
        >
          <i className="fab fa-facebook-square fa-3x"></i>
        </a>
        <a href="#contact"><i className="fas fa-envelope fa-3x"></i></a>
      </div>
      <h4><a href="#services">Learn More</a></h4>
    </div>
    </div>
    {/* about */}
    <About />

    {/* showcase2 */}
    <div className="showcase-container" id='showcase1'>
        <img src={investmentShowcase} alt="" />
        <div className="showcase-content">
            <h2 className="primary-title">Services</h2>
    </div>
    </div>
    <div className="services-container" id="services">
        <Link to='/weddings'><Card title='Weddings' info='I love weddings! Click here to see my wedding portfolio with some of my favorite images from 400 weddings and find out more about the packages I offer for your wedding in Beaufort!' img={servicesWedding} /></Link>
        <Link to='/families'><Card title='Families' info='Family photography is such an important memory to have. Check out my portfolio & learn more about my family photography packages offered in Beaufort & surrounding areas.' img={servicesFamily}/></Link>
        <Link to='/real-estate'><Card title='Real Estate' info='I also have been doing real estate photography for the past 5 years. If you are in need of real estate photography in Beaufort, please contact me for real estate packages.' img={servicesRealEstate}/></Link>
    </div>

    {/* testimonial showcase */}
    <div className="showcase-container" id='showcase1'>
        <img src={testimonialShowcase} alt="" />
        <div className="showcase-content">
            <h2 className="primary-title">Testimonials</h2>
    </div>
    </div>
    {/* testimonials */}
    <Testimonials />

    {/* portfolio showcase */}
    <div className="showcase-container" id='showcase1'>
        <img src={portfolioShowcase} alt="" />
        <div className="showcase-content">
            <h2 className="primary-title">Portfolio</h2>
    </div>
    </div>
    <HomePortfolio />
    <Contact />
    <Footer />
</>
  )
}

export default Home