import React, { useState } from "react"
import "./header.css"
import { nav } from "../../Data/data"
import Logo from './Logo.jpg'
import { Link } from "react-router-dom"
import useMediaQuery from "./mediaQuery"

let task;
const Header = () => {
  const [navList, setNavList] = useState(false)
  const isDesktop = useMediaQuery('(max-width: 768px)');
  var changeSit=()=>{
    if(isDesktop == true){
      setNavList(!navList)
      window.scrollTo(0,0)
    }
    else{
      window.scrollTo(0,0)
    }
  }
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={Logo} alt="" height={'100px'} width={'150px'} />
          </div>
          <div className='nav'>
            <ul  className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}><button onClick={()=>{changeSit()}}  className="hhll" style={{color:'black',fontFamily:'poppins',fontSize:'20px',backgroundColor:'white'}}>{list.text}</button></Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
