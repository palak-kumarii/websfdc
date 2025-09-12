import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
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
                  <Link  to="/blog" className="nav-item nav-link active ">Blog</Link>
                {/* <div className="nav-item dropdown active">
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
                    <Link to="/Team" className="dropdown-item active">
                      Our Team
                    </Link>
                    <Link to="/Testimonial" className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="/Faqs" className="dropdown-item">
                      FAQs
                    </Link>
                    <Link to="/NotFound" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div> */}
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
            Our Team
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
            <li className="breadcrumb-item active text-primary">Team</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Team Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Team</h4>
            <h1 className="display-4">
              Our Investa Company Dedicated Team Member
            </h1>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Example team member */}
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="/assets/img/team-1.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Team 1"
                  />
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#"
                    >
                      <i className="fas fa-share-alt" />
                    </a>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <h4 className="text-white">Mark D. Brock</h4>
                  <p className="text-muted mb-0">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Footer Start */}
      {/* ... your footer code remains the same, but fix className and Links */}
      {/* Footer End */}
    </>
  );
};

export default Team;
