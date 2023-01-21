import React from 'react'
import Back from '../common/Back'
import FeaturedCard from '../Home/featured/FeaturedCard'
import img from './useServiecs.jpg'

const Services = () => {
  return (
    <>
    <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className="featured container">
            <FeaturedCard/>
        </div>
    </section>
    </>
  )
}

export default Services