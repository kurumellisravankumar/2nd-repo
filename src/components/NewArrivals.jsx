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


const NewArrivals = () => {
    return (
        <>
            <div className="new-arrivals" id='Arrivals'>
                <h1>NEW </h1>
                <Carousel autoPlay  infiniteLoop
                    className='arrivals'>
                    <div className='arrivalsswiper'>
                        <div className="arrivals-books">
                            <img src={maths1} alt="" />
                            <div className="book-info">
                                <p><span>Book Name:</span> Mathematics</p>
                                <p><span>ISBN:</span>xxxx</p>
                                <p><span>PRICE:</span>xxxx</p>

                            </div>
                        </div>
                        <div className="arrivals-books">
                            <img src={maths2} alt="" />
                            <div className="book-info">
                                <p><span>Book Name:</span> Mathematics</p>
                                <p><span>ISBN:</span>xxxx</p>
                                <p><span>PRICE:</span>xxxx</p>

                            </div>
                        </div>
                        <div className="arrivals-books">
                            <img src={bio1} alt="" />
                            <div className="book-info">
                                <p><span>Book Name:</span> Biology</p>
                                <p><span>ISBN:</span>xxxx</p>
                                <p><span>PRICE:</span>xxxx</p>

                            </div>
                        </div>
                        <div className="arrivals-books">
                            <img src={bio2} alt="" />
                            <div className="book-info">
                                <p><span>Book Name:</span> Biology</p>
                                <p><span>ISBN:</span>xxxx</p>
                                <p><span>PRICE:</span>xxxx</p>

                            </div>
                        </div>
                        

                    </div>
                    <div className='arrivalsswiper'>
                        <div className="arrivals-books">
                            <img src={zoo1} alt="" />
                        </div>
                        <div className="arrivals-books">
                            <img src={zoo2} alt="" />
                        </div>
                        <div className="arrivals-books">
                            <img src={chem1} alt="" />
                        </div>
                        <div className="arrivals-books">
                            <img src={chem2} alt="" />
                        </div>
                    </div>
                </Carousel>


            </div>

        </>
    )
}

export default NewArrivals
