import React, { useState } from 'react'
import {
    AiFillAccountBook,
    AiFillContacts,
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube
} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

// ----------------------- logo 
// ------------------------------
import logo from '../assets/logo.png'

// ------------------------------ header
// -----------------------------------------

const Header = () => {
    const[showMenu, setshowMenu] = useState(false);
    return (
        <>
            {/* <header className="publiser-header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="navbar">
                    <div className="navlist">

                        <a href="/">Home</a>
                        <a href="/">UG Books</a>
                        <a href="/">PG Books</a>
                        <a href="/">MBA Books</a>
                        <a href="/">CA Books</a>

                    </div>
                </nav>
            </header> */}
            <nav className="pulication-nav">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className={showMenu ? "pulication-nav-list mobile-menu" :"pulication-nav-list"}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#ug">UG Books</a></li>
                        <li><a href="#pg">PG Books</a></li>
                        <li><a href="#mba">MBA Books</a></li>
                        <li><a href="#ca">CA Books</a></li>
                        <li><a href="#Arrivals">New Arrivals</a></li>



                    </ul>
                </div>

                <div className="publication-contactus">
                    {/* <ul className="publication-contactus-desktop">
                        <li><a href="/" target='_egradtutor'>   <AiFillLinkedin className='linkedin'/></a></li>
                        <li><a href="/" target='_egradtutor'>   <AiFillYoutube className='Youtube ' /></a></li>
                        <li><a href="/" target='_egradtutor'>   <AiFillFacebook className='facebook'/></a></li>
                        <li><a href="/" target='_egradtutor'>   <AiFillInstagram n className='instgram'/></a></li>

                    </ul> */}
                    <div className="menu-icon">
                        <a href="#menu" onClick={() => setshowMenu(!showMenu)}><GiHamburgerMenu /></a>
                        
                    </div>
                </div>

            </nav>






{/* 

            <div className="contactus">
                <div className='contact-icon'><AiFillContacts />
                    <div className="contact-text">
                        <h1>contactus</h1>
                    </div>
                </div>

            </div> */}
        </>
    )
}

export default Header
