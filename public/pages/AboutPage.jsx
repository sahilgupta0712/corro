import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to our website! We are a small, family-owned business that has been selling high-quality products online for over 10 years. Our goal is to provide our customers with the best shopping experience possible, from the moment they visit our website to the moment they receive their order.

We pride ourselves on offering a wide selection of products at competitive prices, as well as top-notch customer service. We have a team of dedicated and knowledgeable staff who are always available to answer any questions you may have about our products or your order.

We value our customers and strive to build long-lasting relationships with them. We believe that by treating our customers with respect and offering them the best products and service possible, we can create a loyal customer base that will keep coming back to us for all of their shopping needs.

Thank you for visiting our website, and we hope that you will give us the opportunity to serve you.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Grocery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Furniture</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/13628543/pexels-photo-13628543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mobiles</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default AboutPage