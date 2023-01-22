import React from 'react'
import Heading from '../../common/Heading'
import '../location/location.css'
import { location } from '../../Data/data'
import image1 from '../../Data/images/city-1.jpg'
import image2 from '../../Data/images/city-2.jpg'
import image3 from '../../Data/images/city-3.png'
import image4 from '../../Data/images/city-4.png'
import image5 from '../../Data/images/city-5.png'
import image6 from '../../Data/images/city-6.png'


const Location = () => {

    let locationImgArr = [image1,image2,image3,image4,image5,image6]

  return (
    <>
     <section className='location padding'>
        <div className="container-location">
           <Heading 
           title='Explore By Location'
           subtitle='Lorem ipsum dolor sit amet consectetur 
           adipisicing elit. Ratione, aperiam ut aut magnam 
           impedit iusto dolores blanditiis facilis iure, omnis 
           dolor laborum quas quo illum odio beatae quos quaerat
            ducimus.'
           />
           <div className="content-grid3-mtop">
              {location.map((items,index) => {
                return (
                    <div className="box" key={index}>
                       <img src={locationImgArr[index]} alt="" />
                       <div className="overlay">
                        <h5>{items.name}</h5>
                        <p>
                            <label>{items.Villas}</label>
                            <label>{items.Offices}</label>
                            <label>{items.Apartments}</label>
                        </p>
                       </div>
                    </div>
                )
              })}
           </div>
        </div>    
    </section> 
    </>
  )
}

export default Location
