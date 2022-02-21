import React from 'react'

function RightImageLeftText({title, info, img}) {
  return (
    <div>
        <div className="container-image-text">
        <div className="text-container">
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default RightImageLeftText