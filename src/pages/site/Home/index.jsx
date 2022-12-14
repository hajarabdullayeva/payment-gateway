import React from 'react'
import './Home.css'
function index() {
  return (
    <div className="app__hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="app__hero__content">
              <h2>It's time to</h2>
              <h2>feel good</h2>
              <h2>about your payments.</h2>
              <p>
                Experience a world-class payments solution delivered with a
                human touch.
              </p>
            </div>
            <div className="app__hero__btns">
              <button className="app__hero__btns--get-started">
                Get Started Now
              </button>
              <button className="app__hero__btns--get--touch">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app__hero__image">
              <img
                src="https://www.helcim.com/images/helcim-card-reader-smile.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
