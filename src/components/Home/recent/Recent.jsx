import React from 'react'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'
import './recent.css'

const Recent = () => {
  return (
    <>
     <section className='recent'>
    <div className="container">
        <Heading title='Recent Property Listed' subtitle='Lorem, 
        ipsum dolor sit amet consectetur adipisicing elit. Eaque, 
        perspiciatis. Exercitationem necessitatibus iusto, sapiente
        hic inventore nostrum quasi amet provident nihil sint velit 
        vero libero nulla rem aspernatur? Inventore, obcaecati?'
        />
        <RecentCard/>
    </div>    
    </section> 
    </>
  )
}

export default Recent
