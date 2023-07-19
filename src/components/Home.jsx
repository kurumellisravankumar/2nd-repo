import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import maths1 from "../assets/Books/maths1.png"
import maths2 from "../assets/Books/maths 2.png"
import bio1 from "../assets/Books/Bio A.png"
import bio2 from "../assets/Books/Bio B.png"
import zoo1 from "../assets/Books/ZOO1.png"
import zoo2 from "../assets/Books/Z00-2.png"
import chem1 from "../assets/Books/chemistry A.png"
import chem2 from "../assets/Books/chem B.png"
import headerbg from "../assets/headerbg.png"






import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <>
      <div className="pulication-home-container" >
        <div id='home'></div>


        <Carousel >
          <div className="publication_b_1">
            <div className="publication_b_1_left">
              <div className="typewriter-head">
                <h1>welcome to</h1><h1>
                  <Typewriter options={{
                    strings: [ "eGRADTutor Publication"], autoStart: true, loop: true, cursor: "",
                    wrapperClassName: "typewriter"
                  }}
                  />
                </h1>
                <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IITs/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready. </p>
              </div>
              <div className="books-btn">

                <button><a href="#ug">UG BOOKS</a></button>
                <button><a href="#pg">PG BOOKS</a></button>
                <button><a href="#mba">MBA BOOKS</a></button>
                <button><a href="#ca">CA BOOKS</a></button>



              </div>
            </div>
            <div className="publication_b_1_right">
              <img src={headerbg} alt="" />
              {/* <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                <div className='autoswiper'>
                  <div className="auto-swiper-books">
                    <img src={maths1} alt="" />
                  </div>
                  <div className="auto-swiper-books">
                    <img src={maths2} alt="" />
                  </div>
                  <div className="auto-swiper-books">
                    <img src={bio1} alt="" />
                  </div>
                  <div className="auto-swiper-books">
                    <img src={bio2} alt="" />
                  </div>
                  <div className="auto-swiper-books">
                    <img src={zoo1} alt="" />
                  </div>
                  <div className="auto-swiper-books">
                    <img src={zoo2} alt="" />
                  </div>
                  <div className="auto-swiper-books">
                    <img src={chem1} alt="" />
                  </div>
                  <div className="auto-swiper-books">
                    <img src={chem2} alt="" />
                  </div>

                </div>
              </marquee> */}
            </div>

          </div>
          <div>2</div>
        </Carousel>
       

     
      </div>

    </>
  )
}

export default Home
