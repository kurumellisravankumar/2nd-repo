
import maths1 from "../assets/Books/maths1.png"
import maths2 from "../assets/Books/maths 2.png"
import bio1 from "../assets/Books/Bio A.png"
import bio2 from "../assets/Books/Bio B.png"




const Booksbar = () => {

  return (
    <>
      <div className="books-container">



        <div className="book-bar-container">


          <details className="dorp-down">

            <summary className="boook-list">
              <a href="#ug">UG Books</a></summary>

            <p> <a href="#">MATHEMATICS</a></p>

            <p><a href="#">Physics</a> </p>

            <p><a href="#">Chemistry</a></p>

            <p><a href="#">Biology</a></p>

          </details>

          <details className="dorp-down 
          
          
          ">

            <summary className="boook-list"><a href="#pg">PG Books</a></summary>
            <details><summary className="boook-list">GATE</summary>
              <p> <a href="#">Aerospace</a></p>

              <p><a href="#">Civil Engineering</a> </p>

              <p><a href="#">Chemical Engineering</a></p>
              <p><a href="#">Producation & Industrial</a></p>
              <p><a href="#">Engineering Science Engineering</a></p>
              <p><a href="#">Eetallurgical Engineering</a></p>

            </details>
            <details><summary className="boook-list">ESE</summary>
              <p> <a href="#">Aerospace</a></p>

              <p><a href="#">Civil Engineering</a> </p>

              <p><a href="#">Chemical Engineering</a></p>
              <p><a href="#">Producation & Industrial</a></p>
              <p><a href="#">Engineering Science Engineering</a></p>
              <p><a href="#">Eetallurgical Engineering</a></p>

            </details>
            <details><summary className="boook-list">IITJAM</summary>
              <p> <a href="#">Aerospace</a></p>

              <p><a href="#">Civil Engineering</a> </p>

              <p><a href="#">Chemical Engineering</a></p>
              <p><a href="#">Producation & Industrial</a></p>
              <p><a href="#">Engineering Science Engineering</a></p>
              <p><a href="#">Eetallurgical Engineering</a></p>

            </details>
            <details><summary className="boook-list">OTHER PSU Books</summary>
              <p> <a href="#">Aerospace</a></p>

              <p><a href="#">Civil Engineering</a> </p>

              <p><a href="#">Chemical Engineering</a></p>
              <p><a href="#">Producation & Industrial</a></p>
              <p><a href="#">Engineering Science Engineering</a></p>
              <p><a href="#">Eetallurgical Engineering</a></p>

            </details>





          </details>

          <details className="dorp-down">

            <summary className="boook-list">
              <a href="#mba">MBA Books</a></summary>

            <p> <a href="#">MATHEMATICS</a></p>

            <p><a href="#">Physics</a> </p>

            <p><a href="#">Chemistry</a></p>

            <p><a href="#">Biology</a></p>

          </details>

          <details className="dorp-down">

            <summary className="boook-list"> <a href="#ca">CA Books</a></summary>

            <p> <a href="#">MATHEMATICS</a></p>

            <p><a href="#">Physics</a> </p>

            <p><a href="#">Chemistry</a></p>

            <p><a href="#">Biology</a></p>

          </details>


        </div>


        <div className="books-section" id="ug">
          <h1>UG Books</h1>
          <div className="ugbooks">
            
            <div className='ugbook'>
              <div className="ug-each-book">
                <img src={maths1} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Mathematics</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={maths2} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Mathematics</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={bio1} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Biology</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={bio2} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Biology</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>


            </div>
          </div>


          <h1 id="pg">PG Books</h1>
          <div className="ugbooks">
            <div className='ugbook'>
              <div className="ug-each-book">
                <img src={maths1} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Mathematics</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={maths2} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Mathematics</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={bio1} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Biology</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={bio2} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Biology</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>


            </div>
          </div>
          <h1 id="mba">MBA Books</h1>
          <div className="ugbooks">
            <div className='ugbook'>
              <div className="ug-each-book">
                <img src={maths1} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Mathematics</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={maths2} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Mathematics</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={bio1} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Biology</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={bio2} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Biology</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>


            </div>
          </div>
          <h1 id="ca">CA Books</h1>
          <div className="ugbooks">
            <div className='ugbook'>
              <div className="ug-each-book">
                <img src={maths1} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Mathematics</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={maths2} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Mathematics</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={bio1} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Biology</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>
              <div className="ug-each-book">
                <img src={bio2} alt="" />
                <div className="ug-each-book-info">
                  <p><span>Book Name:</span> Biology</p>
                  <p><span>ISBN:</span>xxxx</p>
                  <p><span>PRICE:</span>xxxx</p>

                </div>
              </div>


            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Booksbar

