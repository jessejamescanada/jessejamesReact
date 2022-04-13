import React from 'react'
// import barnWedding from '../img/weddingPort/barn_wedding.jpg'

function LeftImageRightText({title, info, img}) {
  return (
    <div>
        <div className="container-image-text">
            <img src={img} alt="" />
            <div className="text-container">
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    </div>
  )
}

export default LeftImageRightText