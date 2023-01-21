import React from 'react'
import { list } from '../../Data/data'
import image1 from '../../Data/images/p-1.png'
import image2 from '../../Data/images/p-2.png'
import image3 from '../../Data/images/p-4.png'
import image4 from '../../Data/images/p-5.png'
import image5 from '../../Data/images/p-6.png'
import image6 from '../../Data/images/p-7.png'


const RecentCard = () => {

    let imgArr = [image1,image2,image3,image4,image5,image6]

  return (
    <>
     <div className="container grid3 mtop">
        {list.map((val,index) => {
            const{cover,category,location,name,price,type} = val;
            return (
                <div className='box shadow' key={index}>
                    <div className="img">
                        <img src={imgArr[index]} alt="" />
                    </div>
                    <div className='text'>
                        <div className="category flex">
                            <span style={{background: category === "For Sale" ?
                             "#25b5791" : "#ff98001a" ,color:category === "For Sale" ?
                            "#25b579" : "ff9800"}}>{category}</span>
                            <i className='fa fa-heart'></i>
                        </div>
                        <h4>{name}</h4>
                        <p>
                            <i className='fa fa-location-dot'></i>{location}
                        </p>
                    </div>
                    <div className="button flex">
                        <div>
                            <button className='btn2'>{price}</button>
                            <label htmlFor="">/sqft</label>
                        </div>
                        <span>{type}</span>
                    </div>
                </div>
            )
        })}
     </div>
    </>
  )
}

export default RecentCard
