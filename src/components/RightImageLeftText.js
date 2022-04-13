import React from 'react'

function RightImageLeftText({title, info, img}) {
  return (
    <div>
        <div className="container-image-text">
        <div className="text-container">
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default RightImageLeftText