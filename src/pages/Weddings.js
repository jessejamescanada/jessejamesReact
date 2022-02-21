import React from 'react'
import Contact from '../components/Contact'
import barnWedding from '../img/weddingPort/barn_wedding.jpg'
import charlestonBridesmaids from '../img/weddingPort/charleston_bridesmaids.jpg'
import charlestonWeddingPhotographer from '../img/weddingPort/charleston_wedding_photographer.jpg'
import fall_wedding_charleston from '../img/weddingPort/fall_wedding_charleston.jpg'
import flowergirls_with_bride from '../img/weddingPort/flowergirls_with_bride.jpg'
import night_milkyway_wedding from '../img/weddingPort/night_milkyway_wedding.jpg'
import night_wedding from '../img/weddingPort/night_wedding.jpg'
import snow_wedding from '../img/weddingPort/snow_wedding.jpg'
import charleston_proposal from '../img/weddingPort/charleston_proposal.jpg'
import charleston_engagement_photography2 from '../img/weddingPort/charleston_engagement_photography2.jpg'
import charleston_engagement_photographer from '../img/weddingPort/charleston_engagement_photographer.jpg'
import charleston_engagement from '../img/weddingPort/charleston_engagement.jpg'
import beaufort_wedding_photo from '../img/weddingPort/beaufort_wedding_photography_package.jpg'

import summerville_wedding from '../img/weddingPort/summerville_wedding.jpg'
import wedding_photographer from '../img/weddingPort/wedding_photographer.jpg'
import LeftImageRightText from '../components/LeftImageRightText'
import RightImageLeftText from '../components/RightImageLeftText'

function Weddings() {
  return (
      <div>
    <div className="wedding-container">
        {/* <div className="wedding-image-container">
            <img src={wedding_photographer} alt="" />
        </div> */}
        <LeftImageRightText img={barnWedding} title="Charleston Wedding Photography" info="I love the intimacy of a small wedding, elopement or engagement shoot. The couples get to kick back and relax with their closest family and friends and we can focus more on the love you two share.

The beauty of photographing elopements in Charleston & Mount Pleasant is that there are so many gorgeous spots for your wedding, and I get to meet so many fun and interesting people!" />
<RightImageLeftText img={wedding_photographer} title="Charleston Elopements" info="I've had the privilege of shooting over 400 weddings and elopements in my career. With elopements I offer a 1 - 3 hour package to cover those essential and intimate moments. I absolutely love elopements and that has become my main focus as my career has evolved. I do photograph a few larger weddings each year still and I offer a 6 or 8 hour package for those."/>
<LeftImageRightText img={charleston_proposal} title="Charleston Engagements" info="Along with weddings and elopements, I also offer engagement photography. In my longer wedding packages, your engagement photos are included! Engagements are probably my favorite thing to photograph. The two of you get dressed up, we go to a few different locations, you share a lot of laughs and kisses and we create some gorgeous images together!" />
        <div className="wedding-info-container">
<p>My elopement & engagement packages starts at $399. They include the fully retouched images in full resolution plus an online gallery.

My Wedding photography packages start at $2499 for 6 hours of coverage and include the fully retouched images, engagement shoot and an online gallery.</p>
        </div>
        </div>
        <div className="wedding-portfolio-container">
            <div className="wedding-image">
                <img src={barnWedding}alt="" />
            </div>
            <div className="wedding-image">
                <img src={charlestonWeddingPhotographer} alt="" />
            </div>
            <div className="wedding-image vert">
                <img src={charleston_engagement_photography2} alt="" />
            </div>
            <div className="wedding-image">
                <img src={flowergirls_with_bride} alt="" />
            </div>
            <div className="wedding-image">
                <img src={charleston_engagement} alt="" />
            </div>
            <div className="wedding-image">
                <img src={fall_wedding_charleston} alt="" />
            </div>
            <div className="wedding-image">
                <img src={beaufort_wedding_photo} alt="" />
            </div>
            <div className="wedding-image">
                <img src={charlestonBridesmaids} alt="" />
            </div>
            <div className="wedding-image">
                <img src={charleston_engagement_photographer} alt="" />
            </div>
            <div className="wedding-image vert">
                <img src={night_milkyway_wedding} alt="" />
            </div>
            <div className="wedding-image">
                <img src={summerville_wedding} alt="" />
            </div>
            <div className="wedding-image">
                <img src={snow_wedding} alt="" />
            </div>
            <div className="wedding-image">
                <img src={night_wedding} alt="" />
            </div>
        </div>
        <Contact />
        </div>
  )
}

export default Weddings