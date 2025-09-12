import React from "react";
import { Link } from "react-router-dom";

const FAQs = () => {
  return (
    <>
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
                <a href="tel:+01234567890" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +01234567890
                </a>
                <a href="mailto:Example@gmail.com" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a href="#" className="btn btn-primary btn-square rounded-circle me-3">
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle me-3">
                  <i className="fab fa-twitter text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle me-3">
                  <i className="fab fa-instagram text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle me-0">
                  <i className="fab fa-linkedin-in text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid sticky-top px-0">
        <div className="position-absolute bg-dark" style={{ left: 0, top: 0, width: "100%", height: "100%" }}></div>
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-donate me-3" />
                Investa
              </h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/About" className="nav-item nav-link">About</Link>
                <Link to="/Service" className="nav-item nav-link">Services</Link>
            <Link  to="/blog" className="nav-item nav-link active ">Blog</Link>

                {/* <div className="nav-item dropdown">
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
                          </div> */}

                <Link to="/Contact" className="nav-item nav-link">Contact</Link>
              </div>

              <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                <button className="btn btn-primary btn-md-square mx-2" data-bs-toggle="modal" data-bs-target="#searchModal">
                  <i className="fas fa-search" />
                </button>
                <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0">
                  Start Investa
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our FAQs</h4>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
            <li className="breadcrumb-item active text-primary">FAQs</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* FAQs Section Start */}
      <div className="container-fluid faq py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="pb-5">
                <h4 className="text-primary">FAQs</h4>
                <h1 className="display-4">Get the Answers to Common Questions</h1>
              </div>
              <div className="accordion bg-light rounded p-4" id="accordionExample">
                {/* FAQ Item 1 */}
                <div className="accordion-item border-0 mb-4">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button text-dark fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      What Does a Financial Advisor Do?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit sapiente quis illo quia nulla atque.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="accordion-item border-0 mb-4">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed text-dark fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      What industries do you specialize in?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit sapiente quis illo quia nulla atque.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="accordion-item border-0 mb-4">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed text-dark fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      Can you guarantee for growth?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit sapiente quis illo quia nulla atque.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="accordion-item border-0 mb-0">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed text-dark fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      What makes your business plans so special?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit sapiente quis illo quia nulla atque.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="col-lg-6">
              <div className="faq-img rounded">
                <img src="assets/img/faq-img.jpg" className="img-fluid rounded w-100" alt="FAQ" />
                <a className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5 mt-3 d-inline-block" href="#">
                  Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs Section End */}

      {/* Footer */}
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p className="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto rounded-pill">
                <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">
                  SignUp
                </button>
              </div>
            </div>

             <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Use Links</h4>
                <a href="#"><i className="fas fa-angle-right me-2" /> About Us</a>
                <a href="#"><i className="fas fa-angle-right me-2" /> Features</a>
                <a href="#"><i className="fas fa-angle-right me-2" /> Services</a>
                {/* <a href="#"><i className="fas fa-angle-right me-2" /> FAQ's</a> */}
                <a href="#"><i className="fas fa-angle-right me-2" /> Blogs</a>
                <a href="#"><i className="fas fa-angle-right me-2" /> Contact</a>
              </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <h4 className="text-white mb-4">Contact Info</h4>
              <p><i className="fa fa-map-marker-alt me-2" /> 123 Street, New York, USA</p>
              <p><i className="fas fa-envelope me-2" /> info@example.com</p>
              <p><i className="fas fa-phone me-2" /> +012 345 67890</p>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <h4 className="text-white mb-4">Popular Post</h4>
              <p className="text-uppercase text-primary mb-2">Investment</p>
              <a href="#" className="text-body">Revisiting Your Investment Goals</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
