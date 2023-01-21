import React from 'react'
import Heading from '../../common/Heading'
import { team } from '../../Data/data'
import './team.css'
import image1 from '../../Data/images/team-1.jpg'
import image2 from '../../Data/images/team-2.jpg'
import image3 from '../../Data/images/team-3.jpg'
import image4 from '../../Data/images/team-4.jpg'
import image5 from '../../Data/images/team-5.jpg'
import image6 from '../../Data/images/team-6.jpg'


const Team = () => {

    let teamArr = [image1,image2,image3,image4,image5,image6]

  return (
    <>
    <section className='team background'>
        <div className="container">
            <Heading
             title='Our featured Agents'
             subtitle='Lorem ipsum, dolor sit amet consectetur 
             adipisicing elit. Vitae commodi veniam mollitia voluptate
             debitis fugiat, ab, labore nihil repellendus odio, quam atque 
             tenetur quidem. Aspernatur velit odio accusamus sequi hic!'
             />
             <div className="content mtop grid3">
                {team.map((val,index) => {
                    return (
                        <div className="box" key={index}>
                            <button className='btn3'>{val.list} Listings</button>
                            <div className="deatils">
                                <div className="img">
                                    <img src={teamArr[index]} alt="" />
                                    <i className='fa fa-circle-check'></i>
                                </div>
                                <i className='fa fa-location-dot'></i>
                                <label htmlFor="">{val.address}</label>
                                <h4>{val.name}</h4>
                                <ul>
                                    {val.icon.map((icon,index) => (
                                        <li key={index}>{icon}</li>
                                    ))}
                                </ul>
                                <div className="button flex">
                                    <button>
                                        <i className='fa fa-envelope'></i>
                                        Messege 
                                    </button>
                                    <button className="btn4">
                                        <i className='fa fa-phone-alt'></i>
                                    </button>

                                </div>
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

export default Team