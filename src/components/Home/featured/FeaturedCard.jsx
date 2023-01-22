import React from 'react'
import { featured } from '../../Data/data'
import image1 from '../../Data/images/h1.png'
import image2 from '../../Data/images/h2.png'
import image3 from '../../Data/images/h3.png'
import image4 from '../../Data/images/h4.png'
import image5 from '../../Data/images/h6.png'
import './featured.css'


const FeaturedCard = () => {
    let imageArr = [image1,image2,image3,image4,image5]

  return (
    <>
    <div className='content-grid5-mtop' >
      {featured.map((items,index) => (
            <div className='box' key={index}>
                <img src={imageArr[index]} alt=""/>
                <h4>{items.name}</h4>
                <label>{items.total}</label>

            </div>
        ))}
    </div>

    </>
  )
}

export default FeaturedCard