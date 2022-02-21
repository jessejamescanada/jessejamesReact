import React from 'react'

import Contact from '../components/Contact'

function Investment() {
  return (
    <div>
    <section id="packages">
    <div className="packages-info-container">
        <p>Here you can find some info on the various wedding, elopement, photography and real estate packages I offer. Please message me if you have any questions!</p>
    </div>
      <div className="packages-container">
        <div className="packages-side">
          <h2 className="packages-title packages-heading side">Elopement Packages</h2>
          <div className="packages-price packages-heading side">$449+</div>
          <div className="packages-content">
            <p>&#8226; 1 - 3 Hour Packages</p>
            <div className="line"></div>
            <p>&#8226; Fully Edited Images</p>
            <div className="line"></div>
            <p>&#8226; Online Gallery</p>
            <div className="line"></div>
            {/* <button class="btn"><a href="#contact">Contact</a></button> */}
          </div>
        </div>
        <div className="packages-middle">
        <h2 className="packages-title packages-heading">Wedding Package 1</h2>
        <div className="packages-price packages-heading">$2249</div>
        <div className="packages-content">
          <p>&#8226; 6 Hours Coverage</p>
            <div className="line"></div>
            <p>&#8226; Fully Edited Images</p>
            <div className="line"></div>
            <p>&#8226; Online Gallery</p>
            <div className="line"></div>
            <p>&#8226; 2nd Shooter / Engagement Options</p>
            <div className="line"></div>
            {/* <button class="btn"><a href="#contact">Contact</a></button> */}
        </div>
        </div>
        <div className="packages-middle">
        <h2 className="packages-title packages-heading">Wedding Package 2</h2>
        <div className="packages-price packages-heading">$2949</div>
        <div className="packages-content">
          <p>&#8226; 8 Hours Coverage</p>
            <div className="line"></div>
            <p>&#8226; Fully Edited Images</p>
            <div className="line"></div>
            <p>&#8226; Online Gallery</p>
            <div className="line"></div>
            <p>&#8226; 2nd Shooter / Engagement Options</p>
            <div className="line"></div>
            {/* <button class="btn"><a href="#contact">Contact</a></button> */}
        </div>
        </div>
        <div className="packages-side">
          <h2 className="packages-title packages-heading side">Family Package</h2>
          <div className="packages-price packages-heading side">$299</div>
          <div className="packages-content">
            <p>&#8226; 50+ Photos</p>
            <div className="line"></div>
            <p>&#8226; Fully Edited Images</p>
            <div className="line"></div>
            <p>&#8226; Online Gallery</p>
            <div className="line"></div>
            {/* <button class="btn"><a href="#contact">Contact</a></button> */}
          </div>
        </div>
      </div>
    </section>
    <div className="investment-other-container">
        <h2>Other Photography Packages</h2>
        <div>
            <h3>Engagement Packages</h3>
            <p>My engagement package includes up to 2 locations, an outfit change, the fully edited high resolution files in BOTH color and black & white of each, plus an online gallery to download everything from</p>
        </div>
        <div>
            <h3>Real Estate Photos</h3>
            <p>Stand alone real estate photos (1 house) are $150. Or a package of 3 houses for $300. Drone photography can be added for an additional $50 per</p>
        </div>
    </div>
    <Contact />
    </div>
  )
}

export default Investment