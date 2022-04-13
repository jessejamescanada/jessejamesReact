import React from 'react'
import family1 from '../img/familyPort/charleston_family_photography.jpg'
import family2 from '../img/familyPort/charleston_maternity.jpg'
import family3 from '../img/familyPort/family_photographer.jpg'
import wedding1 from '../img/weddingPort/barn_wedding.jpg'
import wedding2 from '../img/weddingPort/charleston_wedding_photographer.jpg'
import wedding3 from '../img/weddingPort/flowergirls_with_bride.jpg'
import wedding4 from '../img/weddingPort/wedding_photographer.jpg'
import engagement1 from '../img/weddingPort/charleston_engagement.jpg'
import engagement2 from '../img/weddingPort/charleston_engagement_photography2.jpg'
import engagement3 from '../img/weddingPort/charleston_proposal.jpg'

function HomePortfolio() {
  return (
      
    <div className="wedding-portfolio-container" id="portfolio">
    <div className="wedding-image">
        <img src={wedding1}alt="wedding image with horse" />
    </div>
    <div className="wedding-image">
        <img src={wedding2} alt="night wedding with lights" />
    </div>
    <div className="wedding-image">
        <img src={family1} alt="mother daughter family photo" />
    </div>
    <div className="wedding-image">
        <img src={engagement1} alt="beach engagements" />
    </div>
    <div className="wedding-image vert">
        <img src={engagement2} alt="silhouette engagement photo" />
    </div>
    <div className="wedding-image">
        <img src={family2} alt="maternity photography with flowers" />
    </div>
    <div className="wedding-image vert">
        <img src={family3} alt="child portraits" />
    </div>
    <div className="wedding-image">
        <img src={wedding3} alt="beaufort wedding photographer" />
    </div>
    <div className="wedding-image">
        <img src={wedding4} alt="flowergirls with bride" />
    </div>
    <div className="wedding-image">
        <img src={engagement3} alt="beaufort engagement" />
    </div>

</div>
  )
}

export default HomePortfolio