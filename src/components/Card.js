import React from 'react'
import charlestonWedding from '../img/charleston_wedding.jpg'

function Card({title, info, img}) {
  return (
    <div className="card">
        <img src={img} alt="" />
        <div className="card-container">
            <h2>{title}</h2>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default Card