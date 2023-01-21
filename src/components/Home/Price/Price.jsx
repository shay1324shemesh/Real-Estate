import React from 'react'
import Heading from '../../common/Heading'
import PriceCard from './PriceCard'
import './price.css' 

const Price = () => {
  return (
    <>
    <section className='price paddding'>
        <div className="container">
            <Heading 
            title='Select Your Package' 
            subtitle='hello ipsa sequi unde soluta placeat voluptatibus iste 
            amet a enim ex illo tempora. Neque, quisquam.'
            />
            <PriceCard />
        </div>
    </section>
    </>
  )
}

export default Price