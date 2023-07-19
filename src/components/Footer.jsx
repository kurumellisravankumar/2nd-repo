import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillLinkedin ,AiOutlineArrowUp} from "react-icons/ai"
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <>
          <footer>
              <div className="footer-container">
                  <div className="row1">
                      <div className='foot-logo'>
                          <img src={logo} alt="" />
                      </div>

                      <p>eGRADTutor (a brand of eGATETutor Academy) started with a team of graduates from IIT/IISc.We are experts in training students for UG, PG And MBA entrance examinations.</p>
                  </div>
                  <div className="row2">
                      <h6>Permalinks</h6>
                      <div className="footer-links">
                          <li><a href="#home">Home</a></li>
                          <li><a href="#ug">UG Books</a></li>
                          <li><a href="#pg">PG Books</a></li>
                          <li><a href="#mba">MBA Books</a></li>
                          <li><a href="#ca">CA Books</a></li>
                          
                      </div>
                  </div>
                  <div className="row3">
                      <h6>Privacy</h6>

                      <div className="footer-links">
                          <a href='#'>Privacy Policy</a>
                          <a href='#'>Terms and conditions</a>
                          <a href='#'>Refund Policy</a>
                      </div>

                  </div>
                  <div className="row4">
                      <h6>Contact Us</h6>
                      <p>H.NO-2-2-1132/10/C,R.K Nivas,
                          2nd Floor,Opposite Bakers Q,
                          Shivam Road,New Nallakunta,
                          Hyderabad-44.</p>
                      <p>+91-7993270532</p>
                      <p>info@egradtutor.in</p>
                      <div className=' icons'><AiFillFacebook /><AiFillInstagram /><AiFillYoutube /><AiFillLinkedin /></div>
                  </div>

              </div>
              <div className="copy">
                  <p>Copyright © 2023 eGradTutor All rights reserved</p>
              </div>
              <a href="#home" className='footer-home'><AiOutlineArrowUp /></a>
          </footer>
    </>
  )
}

export default Footer
