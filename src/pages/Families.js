import React from 'react'
import Contact from '../components/Contact'
import charleston_family_photography from '../img/familyPort/charleston_family_photography.jpg'
import fall_family_portrait from '../img/familyPort/Fall_family_portrait.jpg'
import family_photography from '../img/familyPort/family_photography.jpg'
import family_photographer from '../img/familyPort/family_photographer.jpg'
import mount_pleasant_family_photographer from '../img/familyPort/mount_pleasant_family_photographer.jpg'
import charleston_maternity from '../img/familyPort/charleston_maternity.jpg'
import beach_family from '../img/familyPort/beach_family_charleston.jpg'
import beach_family2 from '../img/familyPort/charleston_beach_family_portrait.jpg'
import char_family from '../img/familyPort/family_photos_charleston.jpg'
import winter_maternity from '../img/familyPort/winter_maternity.jpg'
import family_portraits_charleston from '../img/familyPort/family_portraits_charleston.jpg'
import LeftImageRightText from '../components/LeftImageRightText'
import RightImageLeftText from '../components/RightImageLeftText'

function Families() {
  return (
    <div>
    <div className="family-container">
        {/* <div className="family-image-container">
            <img src={charleston_family_photography} alt="" />
        </div> */}
        <LeftImageRightText img={charleston_family_photography} title="Beaufort Family Photography" info="I love taking family photos in Beaufort. There are so many great location to choose from! You can never go wrong with a nice park or taking photos on the beach during sunset. Family photos are so important. It's the perfect way to have a keepsake to hang in your home. I like to do a mix of traditional and candid photos where we get some great laughs (usually by me making a fool of myself!) and the classic poses that are timeless.

I offer advice on what to wear, the time of day that's best and can give you different locations we can use for your family photos.

My family photography packages start at $229 for the mini package and go up from there. They all include fully retouched images in full resolution plus an online gallery. Contact me for more info!" />
        <div className="family-info-container">
            {/* <h1>Charleston Family Photography</h1>
            <p></p> */}
        <RightImageLeftText img={charleston_maternity} title="Maternity Photography" info="I adore maternity photography. There is something so beautiful about it. We can grab a few outfits, some props and capture some amazing images that you will always cherish." />
        </div>
        </div>
        <div className="family-portfolio-container">
            <div className="family-image">
                <img src={fall_family_portrait}alt="" />
            </div>
            <div className="family-image vert">
                <img src={family_photographer} alt="" />
            </div>
            <div className="family-image">
                <img src={family_photography} alt="" />
            </div>
            <div className="family-image vert">
                <img src={beach_family} alt="" />
            </div>
            <div className="family-image vert">
                <img src={beach_family2} alt="" />
            </div>
            <div className="family-image">
                <img src={mount_pleasant_family_photographer} alt="" />
            </div>
            <div className="family-image">
                <img src={family_portraits_charleston} alt="" />
            </div>
            <div className="family-image">
                <img src={char_family} alt="" />
            </div>
            <div className="family-image">
                <img src={winter_maternity} alt="" />
            </div>
        </div>
        <Contact />
        </div>
  )
}

export default Families