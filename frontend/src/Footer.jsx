import React from "react";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            
            {/* Newsletter */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="mb-3">
                  Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
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

            {/* Explore */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <Link to="/"><i className="fas fa-angle-right me-2" /> Home</Link>
                <Link to="/service"><i className="fas fa-angle-right me-2" /> Services</Link>
                <Link to="/about"><i className="fas fa-angle-right me-2" /> About Us</Link>
                <Link to="/project"><i className="fas fa-angle-right me-2" /> Latest Projects</Link>
                <Link to="/testimonial"><i className="fas fa-angle-right me-2" /> Testimonial</Link>
                <Link to="/team"><i className="fas fa-angle-right me-2" /> Our Team</Link>
                <Link to="/contact"><i className="fas fa-angle-right me-2" /> Contact Us</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <p><i className="fa fa-map-marker-alt me-2" /> 123 Street, New York, USA</p>
                <p><i className="fas fa-envelope me-2" /> info@example.com</p>
                <p><i className="fas fa-phone me-2" /> +012 345 67890</p>
                <p className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</p>
                <div className="d-flex align-items-center">
                  <a className="btn btn-light btn-md-square me-2" href="#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-light btn-md-square me-2" href="#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-light btn-md-square me-2" href="#"><i className="fab fa-instagram" /></a>
                  <a className="btn btn-light btn-md-square me-0" href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Post</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Investment</p>
                  <Link to="/blog" className="text-body">
                    Revisiting Your Investment &amp; Distribution Goals
                  </Link>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Business</p>
                  <Link to="/blog" className="text-body">
                    Dimensional Fund Advisors Interview with Director
                  </Link>
                </div>
                <div className="footer-btn text-start">
                  <Link to="/blog" className="btn btn-light rounded-pill px-4">
                    View All Post <i className="fa fa-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default Footer;