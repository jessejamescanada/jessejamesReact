import React from 'react'
import Contact from '../components/Contact'
import realEstate1 from '../img/realestatePort/Charleston_real_estate_photography.jpg'
import realEstate2 from '../img/realestatePort/charleston_realestate_photography.jpg'
import realEstate3 from '../img/realestatePort/interior.jpg'
import realEstate4 from '../img/realestatePort/interior_photo.jpg'
import realEstate5 from '../img/realestatePort/kitchen.jpg'
import realEstate6 from '../img/realestatePort/mount_pleasant_real_estate_photographer.jpg'
import realEstate7 from '../img/realestatePort/real_estate_photo.jpg'
import realEstate8 from '../img/realestatePort/real_estate_photographer2.jpg'
import realEstate9 from '../img/realestatePort/outdoor_pool.jpg'
import realEstate10 from '../img/realestatePort/real_estate_photographer3.jpg'
import realEstate11 from '../img/realestatePort/real_estate_photographer5.jpg'
import realEstate12 from '../img/realestatePort/staircase.jpg'
import realEstate13 from '../img/realestatePort/highend_kitchen.jpg'
import realEstate14 from '../img/realestatePort/real_estate_photographer8.jpg'
import realEstate15 from '../img/realestatePort/realestate_photographer.jpg'
import realEstate16 from '../img/realestatePort/real_estate_photography.jpg'


function RealEstate() {
  return (
      <div>
    <div className="realEstate-container">
        <div className="realEstate-image-container">
            <img src='' alt="" />
        </div>
        <div className="realEstate-info-container">
            <h1>Beaufort Real Estate Photography</h1>
            <p>I offer stand alone and package deals for my real estate photography services in Beaufort and the surrounding areas. All images for realtors have a turnaround time of 24-36 hours max and come in high resolution and fully edited. Please message me for details!</p>

        </div>
        </div>
        <div className="realEstate-portfolio-container">
            <div className="realEstate-image">
                <img src={realEstate1} alt="beaufort real estate photography" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate2} alt="interior house" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate3} alt="house" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate15} alt="house" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate13} alt="real estate photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate6} alt="house photos" />
            </div>
            <div className="realEstate-image vert">
                <img src={realEstate7} alt="beaufort real estate photography" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate8} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate9} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate10} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate11} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate12} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate15} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate14} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate4} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate16} alt="house photos" />
            </div>
            <div className="realEstate-image">
                <img src={realEstate5} alt="house photos" />
            </div>
        </div>
        <Contact />
        </div>
  )
}

export default RealEstate