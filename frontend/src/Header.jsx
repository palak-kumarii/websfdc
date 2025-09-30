import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            
            {/* Left side */}
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a
                  href="https://www.google.com/maps/place/Sushma+Infinium/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted me-4"
                >
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </a>
                <a href="tel:+917015548507" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" /> +91 7015548507
                </a>
                <a href="mailto:info@websdfc.co.in" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" /> info@websdfc.co.in
                </a>
              </div>
            </div>
            

            {/* Right side - Socials */}
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="https://www.facebook.com/people/Websfdc-Technology-Pvt-Ltd/61580310165683/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a
                  href="https://x.com/websfdc_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-twitter text-white" />
                </a>
                <a
                  href="https://www.instagram.com/websfdc_technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/websfdc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
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

      {/* Navbar Start */}
      <div className="container-fluid sticky-top px-0">
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            
            {/* Brand */}
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-cloud-sun me-3" /> Websfdc
              </h1>
            </Link>

            {/* Mobile toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>

            {/* Nav Items */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink>
                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Header;
