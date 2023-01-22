import React from 'react'
import Header from '../common/Header/Header'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Footer from '../common/Footer/Footer'
import About from '../About/About'
import Services from '../services/Services'
import Blog from '../Blog/Blog'
import Pricing from '../Pricing/Pricing'
import Contact from '../Contact/Contact'

const Pages = () => {
  return (
    <>
    <Router>
     <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Real-Estate' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default Pages