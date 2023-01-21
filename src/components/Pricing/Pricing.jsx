import React from 'react'
import Back from '../common/Back'
import PriceCard from '../Home/Price/PriceCard'
import img from './pricingPhoto.jpg'

const Pricing = () => {
  return (
    <>
    <section className='services mb'>
    <Back name='30 Days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
    <div className="price container">
        <PriceCard/>
    </div>
    </section>
    </>
  )
}

export default Pricing