import React from 'react'

const Contactus = () => {
  return (
      <>
          <div className="contactus-container">
              <div className="contactus-left">
                  
              </div>
              <div className="contactus-right">
                  
                  <div className='contactus-content'>
                  <h5>Frist name:</h5> <input type="text" placeholder='frist name' />
                  </div>
                  <div className='contactus-content'>
                      <h5>Last name:</h5> <input type="text" placeholder='last name' />
                  </div>
                  <div className='contactus-content'>
                      <h5>Email</h5> <input type="text" placeholder='abc@xyz.com' />
                  </div>

                  <div className='contactus-content'>
                      <h5>Phone No:</h5> <input type="text" placeholder='+91 9xxxxxx' />
                  </div>
                  <div className='sectional'>
                  <select name="" id="">
                      <option value="">BOOKS</option>
                      <option value="">UGBOOKS</option>
                      <option value="">PGBOOKS</option>
                      <option value="">MBABOOKS</option>
                  </select>
                  <select name="" id="">
                      <option value="">MATHEMATICS</option>
                      <option value="">Physics</option>
                      <option value="">Chemistry</option>
                      <option value="" >Biology</option>
                      <option value="">GATE</option>
                      <option value="">ESE</option>
                      <option value="">IITJAM</option>
                      <option value="" >OTHER PSU Books</option>
                      </select>
                      </div>
                  
              </div>

          </div>
    </>
  )
}

export default Contactus
