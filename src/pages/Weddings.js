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
        <LeftImageRightText img={barnWedding} title="Beaufort Wedding Photography" info="I love wedding photography. I have been shooting weddings since 2009 and have photographed over 400 weddings in my career. I love to be with you every step of the way, from when you are planning out your timeline, your engagements, to the 'must have' shots you want on your wedding day. I offer a couple of different packages which can be customized to suit your needs" />
<RightImageLeftText img={wedding_photographer} title="Beaufort Elopements" info=" I adore elopements! If I could, I'd photograph an elopement every single day. There is something about the intimacy of a small wedding or elopement that I just love. I offer two different elopement packages which can be customized if needed."/>
<LeftImageRightText img={charleston_proposal} title="Beaufort Engagements" info="Along with weddings and elopements, I also offer engagement photography. In my longer wedding packages, your engagement photos are included! Engagements are so much fun to photograph. The two of you get dressed up, we go to a few different locations, you share a lot of laughs and kisses and we create some gorgeous images together!" />
        <div className="wedding-info-container">
<p>My elopement & engagement packages starts at $399. They include the fully retouched images in full resolution plus an online gallery.

My Wedding photography packages start at $2099 for 6 hours of coverage and include the fully retouched images, engagement shoot and an online gallery.</p>
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