import React from "react";
import { Link } from "react-router-dom";

const Testimonial = () => {
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
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +01234567890
                </a>
                <a href="#" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
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
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-donate me-3" />
                Investa
              </h1>
            </Link>
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
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/About" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/Service" className="nav-item nav-link">
                  Services
                </Link>
                <Link to="/Project" className="nav-item nav-link">
                  Projects
                </Link>
                <div className="nav-item dropdown active">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle active"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <Link to="/Blog" className="dropdown-item">
                      Our Blog
                    </Link>
                    <Link to="/Team" className="dropdown-item">
                      Our Team
                    </Link>
                    <Link to="/Testimonial" className="dropdown-item active">
                      Testimonial
                    </Link>
                    <Link to="/Faqs" className="dropdown-item">
                      FAQs
                    </Link>
                    <Link to="/NotFound" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/Contact" className="nav-item nav-link">
                  Contact
                </Link>
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

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Testimonial
          </h4>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Testimonial</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Testimonial Start */}
      <div className="container-fluid testimonial bg-light py-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="h-100 rounded">
                <h4 className="text-primary">Our Feedbacks</h4>
                <h1 className="display-4 mb-4">Clients are Talking</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum atque soluta unde itaque. Consequatur quam odit
                  blanditiis harum veritatis porro.
                </p>
                <a
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                  href="#"
                >
                  Read All Reviews <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>

            <div className="col-xl-8">
              <div
                className="testimonial-carousel owl-carousel wow fadeInUp"
                data-wow-delay="0.1s"
              >
                {/* Testimonial Item 1 */}
                <div className="testimonial-item bg-white rounded p-4">
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-quote-left fa-3x text-dark me-3" />
                    </div>
                    <p className="mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magnam eos impedit eveniet dolorem culpa ullam incidunt
                      vero quo recusandae nemo?
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>Person Name</h5>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src="/assets/img/testimonial-1.jpg"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          border: "1px solid",
                          borderColor: "var(--bs-primary)",
                        }}
                        alt="Testimonial 1"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial Item 2 */}
                <div className="testimonial-item bg-white rounded p-4">
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-quote-left fa-3x text-dark me-3" />
                    </div>
                    <p className="mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magnam eos impedit eveniet dolorem culpa ullam incidunt
                      vero quo recusandae nemo?
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>Person Name</h5>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src="/assets/img/testimonial-2.jpg"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          border: "1px solid",
                          borderColor: "var(--bs-primary)",
                        }}
                        alt="Testimonial 2"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial Item 3 */}
                <div className="testimonial-item bg-white rounded p-4">
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-quote-left fa-3x text-dark me-3" />
                    </div>
                    <p className="mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magnam eos impedit eveniet dolorem culpa ullam incidunt
                      vero quo recusandae nemo?
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>Person Name</h5>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src="/assets/img/testimonial-3.jpg"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          border: "1px solid",
                          borderColor: "var(--bs-primary)",
                        }}
                        alt="Testimonial 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Footer Start */}
      {/* Keep footer same as Team.jsx, just fix className & Links */}
      {/* Footer End */}
    </>
  );
};

export default Testimonial;
