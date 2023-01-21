import React from 'react'
import { footer } from '../../Data/data'
import Logo from '../Header/Logo.jpg'
import './footer.css'

const Footer = () => {
  return (
    <>
    <section className='footerContact'>
        <div className="container">
            <div className="send flex">
                <div className="text">
                    <h1>Do You Have Questions ?</h1>
                    <p>We'll help you to grow your career and growth.</p>
                </div>
                <button className='btn5'>Contant Us Today</button>
            </div>
        </div>
    </section>
    <footer>
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src={Logo} alt=""/>
                    <h2>Don You Need Help With Anything ?</h2>
                    <p>Receive updates, hot deals, tutorials, discounts sent srtaignt in your inbox every mounth</p>
                    <div className="input flex">
                        <input type="text" placeholder='Email Address' name='' id=''/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            {footer.map((val) => (
                <div className="box">
                    <h3>{val.title}</h3>
                    <ul>
                        {val.text.map((items) => (
                            <li>{items.list}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </footer>
    <div className="legal">
        <span>Real Estate Find App,Produced By Shemesh</span>
    </div>
    </>
  )
}

export default Footer