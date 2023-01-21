import React from 'react'
import Featured from './featured/Featured'
import Hero from './Hero/Hero'
import Recent from './recent/Recent'
import Awards from './awards/Awards'
import Location from './location/Location'
import Team from './team/Team'
import Price from './Price/Price'

const Home = () => {
  return (
    <>
    <Hero/>
    <Featured/>
    <Recent/>
    <Awards/>
    <Location/>
    <Team/>
    <Price/>
    </>
  )
}

export default Home