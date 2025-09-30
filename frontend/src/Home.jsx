import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

 
{/* Carousel Start */}
<div id="headerCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    {/* Item 1 - Welcome */}
    <div className="carousel-item active">
      <img src="assets/img/carousel-1.jpeg" className="d-block w-100" alt="Image" />
      <div className="carousel-caption text-start p-3">
        <h4 className="text-white text-uppercase fw-bold mb-3 animate__animated animate__fadeInDown" style={{ animationDelay: "0.8s" }}>
          Welcome To Websfdc
        </h4>
        <h1 className="display-1 text-capitalize text-white mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: "1.2s" }}>
          Empowering Businesses with Salesforce Solutions
        </h1>
        <p className="mb-4 fs-5 animate__animated animate__fadeInUp" style={{ animationDelay: "1.6s" }}>
          We help organizations streamline workflows, boost productivity, and strengthen
          customer engagement through innovative Salesforce development.
        </p>
        <a className="btn btn-primary rounded-pill py-3 px-5 me-3 animate__animated animate__fadeInUp" style={{ animationDelay: "2s" }} href="#">
          Apply Now
        </a>
        <a className="btn btn-dark rounded-pill py-3 px-5 animate__animated animate__fadeInUp" style={{ animationDelay: "2.2s" }} href="#">
          Read More
        </a>
      </div>
    </div>

  {/* Item 2 - Services (Updated) */}
    <div className="carousel-item">
      <img src="assets/img/carousel-2.jpeg" className="d-block w-100" alt="Image" />
      <div className="carousel-caption text-start p-3">
        <h4 className="text-white text-uppercase fw-bold mb-3 animate__animated animate__fadeInDown" style={{ animationDelay: "0.8s" }}>
          Our Services
        </h4>
        <h1 className="display-1 text-capitalize text-white mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: "1.2s" }}>
          Customized Salesforce Development
        </h1>
        <p className="mb-4 fs-5 animate__animated animate__fadeInUp" style={{ animationDelay: "1.6s" }}>
          From CRM setup to workflow automation, our certified experts craft solutions 
          tailored to your business goals, ensuring efficiency and growth.
        </p>
        <a className="btn btn-primary rounded-pill py-3 px-5 me-3 animate__animated animate__fadeInUp" style={{ animationDelay: "2s" }} href="#">
          Explore Services
        </a>
        <a className="btn btn-dark rounded-pill py-3 px-5 animate__animated animate__fadeInUp" style={{ animationDelay: "2.2s" }} href="#">
          Contact Us
        </a>
      </div>
    </div>
    {/* Item 3 - Trust */}
    <div className="carousel-item">
      <img src="assets/img/carousel-3.jpeg" className="d-block w-100" alt="Image" />
      <div className="carousel-caption text-end p-3">
        <h4 className="text-white text-uppercase fw-bold mb-3 animate__animated animate__fadeInDown" style={{ animationDelay: "0.8s" }}>
          Trusted Worldwide
        </h4>
        <h1 className="display-1 text-capitalize text-white mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: "1.2s" }}>
          Building Long-Term Partnerships
        </h1>
        <p className="mb-4 fs-5 animate__animated animate__fadeInUp" style={{ animationDelay: "1.6s" }}>
          Companies across industries trust Websfdc for reliable Salesforce solutions.
          We believe in delivering value, innovation, and long-term success for every client.
        </p>
        <a className="btn btn-primary rounded-pill py-3 px-5 me-3 animate__animated animate__fadeInUp" style={{ animationDelay: "2s" }} href="#">
          Join Us
        </a>
        <a className="btn btn-dark rounded-pill py-3 px-5 animate__animated animate__fadeInUp" style={{ animationDelay: "2.2s" }} href="#">
          Discover More
        </a>
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

{/* Features  Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Features</h4>
        <h1 className="display-4">
          {" "}
          Mastering Salesforce & Mobile Web Development for Your Business
        </h1>
        <p> At Websfdc we specialize in delivering cutting-edge Salesforce solutions using Lightning Web Components (LWC) and Apex to help businesses transform their processes. Our team of expert developers crafts customized applications, automations, and integrations to drive efficiency and growth for your organization.

</p>
      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              {/* <img
                src="assets/img/service-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              /> */}
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-handshake fa-3x me-2" /> Trusted Salesforce Experts
                </a>
                <p className="mb-4">
                We are a trusted Salesforce development company with years of experience in delivering high-quality, custom solutions for businesses of all sizes. Our expert team ensures top-notch results.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Learn More
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
              {/* <img
                src="assets/img/service-2.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              /> */}
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-dollar-sign fa-3x me-2" /> Cost-Effective Solutions
                </a>
                <p className="mb-4">
                Our Salesforce solutions deliver exceptional value by combining high-quality implementations with affordability. We ensure you get top-notch services that maximize your investment without stretching your budget.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Learn More
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
              {/* <img
                src="assets/img/service-4.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              /> */}
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-bullseye fa-3x me-2" /> Tailored Salesforce Plans
                </a>
                <p className="mb-4">
                 Whether you're a small business or a large enterprise, we offer flexible Salesforce plans that cater to your specific requirements. Our team ensures the perfect fit for your business with customized development.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Learn More
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
              {/* <img
                src="assets/img/service-3.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              /> */}
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  
                  <i className="fa fa-headphones fa-3x me-2" /> 24/7 Expert Support
                    
                </a>
                <p className="mb-4">
                 Our dedicated support team is available 24/7 to ensure that your Salesforce platform runs smoothly. From troubleshooting to optimization, we are always ready to assist with any queries or issues you may have.We proactively monitor.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-12">
          <a
            className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
            data-wow-delay="0.1s"
            href="#"
          > */}
            
          {/* </a>
        </div> */}
      </div>
    </div>
  </div>
  {/* Features End */}
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
        <p className="text-muted mb-5">
    At WebSFDC Technology, we specialize in Salesforce development,
     Lightning Web Components (LWC), and custom web development solutions 
     to help businesses enhance their operations and online presence.
    </p>

      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/service-1.jpeg"
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
                src="assets/img/service-2.jpeg"
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
                src="assets/img/service-4.jpeg"
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
                   environments efficiently, from user setup and secure data.
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
                src="assets/img/service-3.jpeg"
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
        <p className="text-muted mb-5">
   Stay up to date with the latest trends, 
   updates, and innovations in Salesforce development, 
   LWC, Apex, and much more. Read our blog to gain valuable 
   insights into the Salesforce ecosystem.
    </p>
      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
             <img
                src="assets/img/blog-1.jpeg"
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
Explore the power of Lightning Web Components (LWC) and how they are transforming the way Salesforce developers create fast, efficient.
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
                src="assets/img/blog-2.jpeg"
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
               src="assets/img/blog-3.jpeg"
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
        can enhance efficiency.
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

{/* Testimonial Start */}
<div className="container-fluid bg-white py-5">
  <div className="container text-center">

    {/* Heading */}
    <h4 className="text-primary fw-bold">Testimonial</h4>
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
              src="assets/img/testimonial-1.jpeg" 
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
              src="assets/img/testimonial-2.jpeg" 
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
              src="assets/img/testimonial-3.jpeg" 
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
              src="assets/img/faq-img.jpeg"
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

</>

  )
}


export default Home