import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
  
  
  {/* About Start */}
  <div className="container-fluid about bg-light py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="about-img">
            <img
              src="assets/img/about-3.jpeg"
              className="img-fluid w-100 rounded-top bg-white"
              alt="Image"
            />
            {/* <img
              src="assets/img/about-2.jpeg"
              className="img-fluid w-100 rounded-bottom"
              alt="Image"
            /> */}
            <div className="row g-4 text-center align-items-center justify-content-center">
            <div className="col-sm-4">
              <div className="bg-primary rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-dark"
                    data-toggle="counter-up"
                  >
                    129
                  </span>
                  <h4
                    className="text-dark fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="text-white mb-0">Salesforce Project Completed</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-dark rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-white"
                    data-toggle="counter-up"
                  >
                    99
                  </span>
                  <h4
                    className="text-white fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="mb-0">Awards & Recognitions</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-primary rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-dark"
                    data-toggle="counter-up"
                  >
                    556
                  </span>
                  <h4
                    className="text-dark fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="text-white mb-0">Certified Salesforce Experts</p>
                </div>
              </div>
            </div>
             <div className="col-sm-4">
              <div className="bg-primary rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-dark"
                    data-toggle="counter-up"
                  >
                    967
                  </span>
                  <h4
                    className="text-dark fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="text-white mb-0">Happy Clients Worldwide</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-xl-7 wow fadeInRight"
          data-wow-delay="0.3s"
        >
          <h4 className="text-primary">About WebSFDC Technology</h4>
          <h1 className="display-5 mb-4">
           Expert Salesforce Development & Consulting
          </h1>
          <p className="text ps-4 mb-4">
        At WebSFDC Technology, we specialize in providing customized Salesforce 
        solutions to help businesses automate, integrate, and optimize their operations.
         Our team of expert Salesforce developers ensures top-tier solutions tailored to your
          specific needs, whether you're just getting started with Salesforce or need advanced customization.<br/>
          As a leading Salesforce consultant, we guide you through every step of your Salesforce journey, from setup 
          and development to ongoing support and maintenance.
          </p>
          <div className="row g-4 justify-content-between mb-5">
            <div className="col-lg-6 col-xl-5">
              <p className="text-dark">
                <i className="fa fa-check text-primary me-3" />We deliver high-quality, scalable Salesforce solutions.
              </p>
              <p className="text-dark mb-0">
                <i className="fa fa-check text-primary me-3" /> Expert Salesforce customization and integration services.
              </p><br/>
            </div>
            <div className="col-lg-6 col-xl-7">
              <p className="text-dark">
                <i className="fa fa-check text-primary me-3" />{" "}
             Reliable Salesforce support and optimization.
              </p>
             
            </div>
          </div>
          <div className="row g-4 justify-content-between mb-5">
            <div className="col-xl-5">
              <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                Discover More
              </a>
            </div>
            <div className="col-xl-7 mb-5">
              <div className="about-customer d-flex position-relative">
                <img
                  src="assets/img/customer-img-1.jpeg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 0, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-2.jpeg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 45, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-3.jpeg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 90, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-1.jpeg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 135, top: 0 }}
                  alt="Image"
                />
                <div
                  className="position-absolute text-dark"
                  style={{ left: 220, top: 10 }}
                >
                  <p className="mb-0">5m+ Trusted</p>
                  <p className="mb-0">Global Customers</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row g-4 text-center align-items-center justify-content-center">
            <div className="col-sm-4">
              <div className="bg-primary rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-dark"
                    data-toggle="counter-up"
                  >
                    32
                  </span>
                  <h4
                    className="text-dark fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    k+
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="text-white mb-0">Project Complete</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-dark rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-white"
                    data-toggle="counter-up"
                  >
                    21
                  </span>
                  <h4
                    className="text-white fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="mb-0">Years Of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-primary rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-dark"
                    data-toggle="counter-up"
                  >
                    97
                  </span>
                  <h4
                    className="text-dark fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="text-white mb-0">Team Members</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
 {/* Team Start */}
  <div className="container-fluid team pb-5">
    <div className="container pb-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Team</h4>
        <h1 className="display-5">Meet Our Expert Team Members at Websfdc Technology</h1>
          <p className="text-muted mb-5">
   At Websfdc Technology, we specialize in Salesforce web development, offering innovative 
   solutions to streamline your business processes and enhance customer relationships.
    </p>
      </div>
     <div className="row g-4 justify-content-center">
  {/* Team Member 1 */}
  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
    <div className="team-item rounded">
      <div className="team-img">
        <img src="assets/img/team-1.jpeg" className="img-fluid w-100 rounded-top" alt="Padam Rana" />
        <div className="team-icon">
          <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
            <i className="fas fa-share-alt" />
          </a>
          <div className="team-icon-share">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="team-content bg-dark text-center rounded-bottom p-4">
        <div className="team-content-inner rounded-bottom">
          <h4 className="text-white">Padam Rana</h4>
          <p className="text-muted mb-0">Salesforce Developer</p>
        </div>
      </div>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
    <div className="team-item rounded">
      <div className="team-img">
        <img src="assets/img/team-2.jpeg" className="img-fluid w-100 rounded-top" alt="Naveen" />
        <div className="team-icon">
          <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
            <i className="fas fa-share-alt" />
          </a>
          <div className="team-icon-share">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="team-content bg-dark text-center rounded-bottom p-4">
        <div className="team-content-inner rounded-bottom">
          <h4 className="text-white">Naveen</h4>
          <p className="text-muted mb-0">Salesforce Developer</p>
        </div>
      </div>
    </div>
  </div>

  {/* Team Member 3 */}
  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
    <div className="team-item rounded">
      <div className="team-img">
        <img src="assets/img/team-3.jpeg" className="img-fluid w-100 rounded-top" alt="Sudhir" />
        <div className="team-icon">
          <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
            <i className="fas fa-share-alt" />
          </a>
          <div className="team-icon-share">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="team-content bg-dark text-center rounded-bottom p-4">
        <div className="team-content-inner rounded-bottom">
          <h4 className="text-white">Sudhir</h4>
          <p className="text-muted mb-0">Salesforce Admin Developer</p>
        </div>
      </div>
    </div>
  </div>

  {/* Team Member 4 */}
  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
    <div className="team-item rounded">
      <div className="team-img">
        <img src="assets/img/team-4.jpeg" className="img-fluid w-100 rounded-top" alt="Neha Sharma" />
        <div className="team-icon">
          <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
            <i className="fas fa-share-alt" />
          </a>
          <div className="team-icon-share">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="team-content bg-dark text-center rounded-bottom p-4">
        <div className="team-content-inner rounded-bottom">
          <h4 className="text-white">Neha Sharma</h4>
          <p className="text-muted mb-0">HR Human Resources</p>
        </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}

</>

  )
}

export default About