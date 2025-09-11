import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
  {/* Spinner Start
  <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Topbar Start */}
  <div className="container-fluid topbar px-0 d-none d-lg-block">
    <div className="container px-0">
      <div className="row gx-0 align-items-center" style={{ height: 45 }}>
        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
          <div className="d-flex flex-wrap">
            <a href="#" className="text-muted me-4">
              <i className="fas fa-map-marker-alt text-primary me-2" />
              Find A Location
            </a>
            <a href="#" className="text-muted me-4">
              <i className="fas fa-phone-alt text-primary me-2" />
              +91 7015548507
            </a>
            <a href="#" className="text-muted me-0">
              <i className="fas fa-envelope text-primary me-2" />
              info@websdfc.co.in
            </a>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-flex align-items-center justify-content-end">
            <a
              href="#"
              className="btn btn-primary btn-square rounded-circle nav-fill me-3"
            >
              <i className="fab fa-facebook-f text-white" />
            </a>
            <a
              href="#"
              className="btn btn-primary btn-square rounded-circle nav-fill me-3"
            >
              <i className="fab fa-twitter text-white" />
            </a>
            <a
              href="#"
              className="btn btn-primary btn-square rounded-circle nav-fill me-3"
            >
              <i className="fab fa-instagram text-white" />
            </a>
            <a
              href="#"
              className="btn btn-primary btn-square rounded-circle nav-fill me-0"
            >
              <i className="fab fa-linkedin-in text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar & Hero Start */}
  <div className="container-fluid sticky-top px-0">
    <div
      className="position-absolute bg-dark"
      style={{ left: 0, top: 0, width: "100%", height: "100%" }}
    ></div>
    <div className="container px-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
        <a href="index.html" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fas fa-cloud-sun" />
            Websdfc
          </h1>
          {/* <img src="assets/img/logo.png" alt="Logo"> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {/* <a href="index.html" className="nav-item nav-link active">
              Home
            </a> */}
            <Link  to="/" className="nav-item nav-link active">Home</Link>
            {/* <a href="about.html" className="nav-item nav-link">
              About
            </a> */}
              <Link  to="/about" className="nav-item nav-link active">About</Link>
            {/* <a href="service.html" className="nav-item nav-link">
              Services
            </a> */}
              <Link  to="/service" className="nav-item nav-link active ">Service</Link>
           


                <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <Link to="/blog" className="dropdown-item">
                Our Blog
              </Link>
              <Link to="/team" className="dropdown-item">
                Our Team
              </Link>
              <Link to="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
              <Link to="/faqs" className="dropdown-item">
                FAQs
              </Link>
              <Link to="/404" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>

            {/* <a href="contact.html" className="nav-item nav-link">
              Contact
            </a> */}
              <Link  to="/contact" className="nav-item nav-link active">Contact</Link>
          </div>
          <div className="d-flex align-items-center flex-nowrap pt-xl-0">
            <button
              className="btn btn-primary btn-md-square mx-2"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fas fa-search" />
            </button>
            <a
              href="#"
              className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0"
            >
              Start Investa
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Modal Search Start */}
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h4 className="modal-title mb-0" id="exampleModalLabel">
            Search by keyword
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
{/* Carousel Start */}
<div id="headerCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    {/* Item 1 */}
    <div className="carousel-item active">
      <img src="assets/img/carousel-1.jpg" className="d-block w-100" alt="Image" />
      <div className="carousel-caption text-start p-3">
        <h4 className="text-white text-uppercase fw-bold mb-4">Welcome To Websfdc</h4>
        <h1 className="display-1 text-capitalize text-white mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: "1.3s" }}>
        Empowering Businesses with Salesforce Solutions.
        </h1>
        <p className="mb-5 fs-5 animate__animated animate__fadeInUp" style={{ animationDelay: "1.5s" }}>
         
        At Websfdc we specialize in delivering cutting-edge Salesforce development services that
         help businesses streamline their processes, drive growth, and enhance customer relationships.
          Our expert team works closely with you to create tailored solutions that meet your specific business needs.
                                    
        </p>
        <a className="btn btn-primary rounded-pill py-3 px-5 me-3 animate__animated animate__fadeInUp" href="#">Apply Now</a>
        <a className="btn btn-dark rounded-pill py-3 px-5 animate__animated animate__fadeInUp" href="#">Read More</a>
      </div>
    </div>

    {/* Item 2 */}
    <div className="carousel-item">
      <img src="assets/img/carousel-2.jpg" className="d-block w-100" alt="Image" />
      <div className="carousel-caption text-center p-3">
        <h1 className="display-1 text-capitalize text-white mb-4">    Empowering Businesses with Salesforce Solutions.</h1>
        <p className="mb-5 fs-5"> At Websfdc we specialize in delivering cutting-edge Salesforce development services that
         help businesses streamline their processes, drive growth, and enhance customer relationships.
          Our expert team works closely with you to create tailored solutions that meet your specific business needs.</p>
        <a className="btn btn-primary rounded-pill py-3 px-5 me-3" href="#">Apply Now</a>
        <a className="btn btn-dark rounded-pill py-3 px-5" href="#">Read More</a>
      </div>
    </div>

    {/* Item 3 */}
    <div className="carousel-item">
      <img src="assets/img/carousel-3.jpg" className="d-block w-100" alt="Image" />
      <div className="carousel-caption text-end p-3">
        <h1 className="display-1 text-capitalize text-white mb-4">    Empowering Businesses with Salesforce Solutions.</h1>
        <p className="mb-5 fs-5">At Websfdc we specialize in delivering cutting-edge Salesforce development services that
         help businesses streamline their processes, drive growth, and enhance customer relationships.
          Our expert team works closely with you to create tailored solutions that meet your specific business needs.</p>
        <a className="btn btn-primary rounded-pill py-3 px-5 me-3" href="#">Apply Now</a>
        <a className="btn btn-dark rounded-pill py-3 px-5" href="#">Read More</a>
      </div>
    </div>
  </div>

  {/* Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#headerCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#headerCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
{/* Carousel End */}

  {/* About Start */}
  <div className="container-fluid about bg-light py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="about-img">
            <img
              src="assets/img/about-3.png"
              className="img-fluid w-100 rounded-top bg-white"
              alt="Image"
            />
            <img
              src="assets/img/about-2.jpg"
              className="img-fluid w-100 rounded-bottom"
              alt="Image"
            />
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
                  src="assets/img/customer-img-1.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 0, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-2.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 45, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-3.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 90, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-1.jpg"
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
          <div className="row g-4 text-center align-items-center justify-content-center">
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
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Services Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Services</h4>
        <h1 className="display-4">
          {" "}
       We Provide Expert Salesforce & Web Development Services
        </h1>
      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/service-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" />Salesforce Development
                </a>
                <p className="mb-4">
                 We offer Salesforce development services including custom applications, 
                 integrations, and automations to boost your business performance and drive growth.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/service-2.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Lightning Web Development (LWC)
                </a>
                <p className="mb-4">
                 Our experts specialize in building dynamic and responsive Lightning Web
                  Components (LWC) to deliver modern and efficient Salesforce solutions.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/service-4.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Salesforce Admin Services
                </a>
                <p className="mb-4">
                  Our Salesforce admin services help businesses manage their Salesforce
                   environments efficiently, from user setup and security to data management 
                   and reporting.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/service-3.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" />Web Design & Development
                  Investment
                </a>
                <p className="mb-4">
                  We provide custom web design and development services to create visually 
                  stunning and user-friendly websites that elevate your brand’s online presence.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <a
            className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
            data-wow-delay="0.1s"
            href="#"
          >
            Services More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
 {/* Blog Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">From Blog</h4>
        <h1 className="display-4">
          {" "}
    Salesforce News and Updates
        </h1>
      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
             <img
                src="assets/img/blog-1.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i />How Lightning Web Components are Revolutionizing Salesforce Development
                </a>
                <p className="mb-4">
Explore the power of Lightning Web Components (LWC) and how they are transforming the way Salesforce developers create fast, efficient, 
and dynamic applications for businesses.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/blog-2.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i />Apex Programming Best Practices for Salesforce Developers
                </a>
                <p className="mb-4">
         Learn the best practices when writing Apex code to ensure scalability, security, and maintainability 
         in your Salesforce development projects. Implementing these practices.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
               src="assets/img/blog-3.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i />The Importance of Salesforce Integration for Your Business Salesforce

                                
                </a>
                <p className="mb-4">
        Salesforce integration can take your business to the next level. Learn how connecting Salesforce with your existing systems 
        can enhance efficiency and data-driven decision-making. 
                   and reporting.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
  {/* Team Start */}
  <div className="container-fluid team pb-5">
    <div className="container pb-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Team</h4>
        <h1 className="display-4">Meet Our Expert Team Members at Websfdc Technology</h1>
      </div>
      <div className="row g-4 justify-content-center">
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="team-item rounded">
            <div className="team-img">
              <img
                src="assets/img/team-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div className="team-icon">
                <a
                  className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                  href=""
                >
                  <i className="fas fa-share-alt" />
                </a>
                <div className="team-icon-share">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-content bg-dark text-center rounded-bottom p-4">
              <div className="team-content-inner rounded-bottom">
                <h4 className="text-white">Padam Rana </h4>
                <p className="text-muted mb-0">Salesforce Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="team-item rounded">
            <div className="team-img">
              <img
                src="assets/img/team-2.jpg"
                className="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div className="team-icon">
                <a
                  className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                  href=""
                >
                  <i className="fas fa-share-alt" />
                </a>
                <div className="team-icon-share">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-content bg-dark text-center rounded-bottom p-4">
              <div className="team-content-inner rounded-bottom">
                <h4 className="text-white">Naveen</h4>
                <p className="text-muted mb-0">Salesforce Developer </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="team-item rounded">
            <div className="team-img">
              <img
                src="assets/img/team-3.jpg"
                className="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div className="team-icon">
                <a
                  className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                  href=""
                >
                  <i className="fas fa-share-alt" />
                </a>
                <div className="team-icon-share">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-content bg-dark text-center rounded-bottom p-4">
              <div className="team-content-inner rounded-bottom">
                <h4 className="text-white">Sudhir</h4>
                <p className="text-muted mb-0">Salesforce Admin Developer </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="team-item rounded">
            <div className="team-img">
              <img
                src="assets/img/team-4.jpg"
                className="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div className="team-icon">
                <a
                  className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                  href=""
                >
                  <i className="fas fa-share-alt" />
                </a>
                <div className="team-icon-share">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-content bg-dark text-center rounded-bottom p-4">
              <div className="team-content-inner rounded-bottom">
                <h4 className="text-white">Neha Sharma</h4>
                <p className="text-muted mb-0">Hr Human Resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}

{/* Testimonial Start */}
<div className="container-fluid bg-white py-5">
  <div className="container text-center">

    {/* Heading */}
    <p className="text-primary fw-bold">Testimonial</p>
    <h2 className="fw-bold display-5 mb-3">
      What Our Customers Are Saying About <br /> Websfdc Technology
    </h2>
    <p className="text-muted mb-5">
      At Websfdc Technology, we take pride in delivering top-notch Salesforce web development solutions. 
      Here’s what our satisfied clients have to say about working with us:
    </p>

    {/* Testimonials with Arrows */}
    <div className="d-flex justify-content-between align-items-center">


      {/* Testimonial Cards */}
      <div className="d-flex flex-wrap justify-content-center gap-4">

        {/* Card 1 */}
        <div className="card shadow-sm border-0 p-3" style={{ maxWidth: "420px" }}>
          <div className="d-flex align-items-start">
            <img 
              src="assets/img/testimonial-1.jpg" 
              className="rounded" 
              style={{ width: "100px", height: "100px", objectFit: "cover" }} 
              alt="Michael Brown" 
            />
            <div className="ms-3">
              <h5 className="mb-1">Michael Brown</h5>
              <p className="text-muted mb-1">Salesforce Administrator</p>
              <div className="text-warning mb-2">
                ★★★★☆
              </div>
            </div>
          </div>
          <p className="text-muted mt-3 mb-0">
            "The team at Websfdc Technology helped us streamline our processes and integrate Salesforce seamlessly. 
            Their expertise and support made a huge difference in our operations!"
          </p>
        </div>
{/* card 2 */}
 <div className="card shadow-sm border-0 p-3" style={{ maxWidth: "420px" }}>
          <div className="d-flex align-items-start">
            <img 
              src="assets/img/testimonial-1.jpg" 
              className="rounded" 
              style={{ width: "100px", height: "100px", objectFit: "cover" }} 
              alt="Michael Brown" 
            />
            <div className="ms-3">
              <h5 className="mb-1">Sarah Williams</h5>
              <p className="text-muted mb-1">Salesforce Project Manager</p>
              <div className="text-warning mb-2">
                ★★★★☆
              </div>
            </div>
          </div>
          <p className="text-muted mt-3 mb-0">
           "Websfdc Technology completely transformed our Salesforce platform!
            Their team provided exceptional web development services, delivering 
            a highly customized solution that exceeded our expectations."
          </p>
        </div>
        {/* Card 3 */}
        <div className="card shadow-sm border-0 p-3" style={{ maxWidth: "420px" }}>
          <div className="d-flex align-items-start">
            <img 
              src="assets/img/testimonial-2.jpg" 
              className="rounded" 
              style={{ width: "100px", height: "100px", objectFit: "cover" }} 
              alt="Jessica Davis" 
            />
            <div className="ms-3">
              <h5 className="mb-1">Jessica Davis</h5>
              <p className="text-muted mb-1">Salesforce Consultant</p>
              <div className="text-warning mb-2">
                ★★★★☆
              </div>
            </div>
          </div>
          <p className="text-muted mt-3 mb-0">
            "I couldn't be more satisfied with Websfdc Technology’s work. 
            They crafted an efficient and user-friendly Salesforce web platform 
            that made a significant impact on our productivity!"
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
{/* Testimonial End */}


  {/* FAQ Start */}
  <div className="container-fluid faq py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="pb-5">
            <h4 className="text-primary">FAQs</h4>
            <h1 className="display-4">Get the Answers to Common Questions</h1>
          </div>
          <div className="accordion bg-light rounded p-4" id="accordionExample">
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseTOne">
                Q: What is Salesforce development?
                                        
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <p>
                 A: Salesforce development involves customizing the Salesforce 
                 platform through coding (Apex) and building dynamic applications
                  using Lightning Web Components (LWC) to cater to the specific needs 
                  of your business. It helps optimize sales, service, and marketing operations
                   with tailored features.
                                        
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                 
                Q: What is the difference between Salesforce admin and Salesforce developer?
  
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <p>
                   A: Salesforce Admin focuses on managing and configuring the 
                   Salesforce environment, such as user permissions, data management,
                    and reporting. A Salesforce Developer, on the other hand, writes code,
                     customizes the platform, and builds custom applications using Apex and
                      LWC to extend Salesforce functionality.
                                        
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree">
               Q: How can Salesforce help my business?
                                        
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <p>
                A: Salesforce provides a unified platform for managing sales, 
                customer service, marketing, and analytics. It helps businesses
                 streamline processes, gain valuable insights into customer data, 
                 and automate tasks, leading to better efficiency, productivity, and customer satisfaction.

                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-0">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour">
              Q: What is Lightning Web Components (LWC)?
                                        
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample" >
                <div className="accordion-body my-2">
                  <p>
             A: Lightning Web Components (LWC) is a programming model 
             for building fast and modern web applications on the Salesforce platform.
              It allows developers to create reusable, lightweight components with improved
               performance and enhanced user experiences, fully leveraging the latest web standards.
                                        
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <div className="faq-img RotateMoveRight rounded">
            <img
              src="assets/img/faq-img.jpg"
              className="img-fluid rounded w-100"
              alt="Image"
            />
            <a
              className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5"
              href="#"
            >
              Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQ End */}
  {/* Footer Start */}
  <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <div className="footer-item">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p className="mb-3">
              Stay updated with the latest news and offers from Websfdc Technology. 
              Subscribe to our newsletter for insights on Salesforce web development, 
              product updates, and more.
              </p>
              <div className="position-relative mx-auto rounded-pill">
                <input
                  className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">Explore</h4>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Home
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Services
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> About Us
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Latest Projects
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> testimonial
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Our Team
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Contact Us
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">Contact Info</h4>
            <a href="">
              <i className="fa fa-map-marker-alt me-2" /> 9th floor, Unit 60, Sushma Infinium, Zirakpur,Chandigarh Punjab,140603
                                                    
            </a>
            <a href="">
              <i className="fas fa-envelope me-2" /> info@example.com
            </a>
            <a href="">
              <i className="fas fa-envelope me-2" /> info@websfdctech.co.in
            </a>
            <a href="">
              <i className="fas fa-phone me-2" /> +91 7015548507
            </a>
            <a href="" className="mb-3">
              <i className="fas fa-print me-2" /> +91 7015548507
            </a>
            <div className="d-flex align-items-center">
              <a className="btn btn-light btn-md-square me-2" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-light btn-md-square me-2" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-light btn-md-square me-2" href="">
                <i className="fab fa-instagram" />
              </a>
              <a className="btn btn-light btn-md-square me-0" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item-post d-flex flex-column">
            <h4 className="text-white mb-4">Popular Post</h4>
            <div className="d-flex flex-column mb-3">
              <p className="text-uppercase text-primary mb-2">Investment</p>
              <a href="#" className="text-body">
                Revisiting Your Investment &amp; Distribution Goals
              </a>
            </div>
            <div className="d-flex flex-column mb-3">
              <p className="text-uppercase text-primary mb-2">Business</p>
              <a href="#" className="text-body">
                Dimensional Fund Advisors Interview with Director
              </a>
            </div>
            <div className="footer-btn text-start">
              <a href="#" className="btn btn-light rounded-pill px-4">
                View All Post <i className="fa fa-arrow-right ms-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-md-6 text-center text-md-start mb-md-0">
          <span className="text-body">
            <a href="#" className="border-bottom text-primary">
              <i className="fas fa-copyright text-light me-2" />
              Your Site Name
            </a>
            , All right reserved.
          </span>
        </div>
        <div className="col-md-6 text-center text-md-end text-body">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By{" "}
          <a
            className="border-bottom text-primary"
            href="https://htmlcodex.com"
          >
            HTML Codex
          </a>{" "}
          Distributed By{" "}
          <a
            className="border-bottom text-primary"
            href="https://themewagon.com"
          >
            ThemeWagon
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-lg-square back-to-top">
    <i className="fa fa-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>

  )
}


export default Home