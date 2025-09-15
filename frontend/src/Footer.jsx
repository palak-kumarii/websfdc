import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* Column 1 - Websfdc Info + Social */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <a href="/" className="p-0">
                  <h3 className="text-white">
                    <i className="fas fa-cloud-sun me-3"></i> Websfdc
                  </h3>
                </a>
                <p className="text-white mb-4">
                  At Websfdc Technology, we specialize in Salesforce web
                  development, offering innovative solutions to streamline
                  business processes and enhance customer relationships. Your
                  success is our priority.
                </p>

                {/* Social Icons */}
                <div className="d-flex align-items-center mb-4">
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="https://www.facebook.com/people/Websfdc-Technology-Pvt-Ltd/61580310165683"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="https://x.com/websfdc_tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="https://www.instagram.com/websfdc_technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-light btn-md-square me-0"
                    href="https://www.linkedin.com/company/websfdc/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - Explore */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <Link to="/about">
                  <i className="fas fa-angle-right me-2" /> About Us
                </Link>
                <Link to="/service">
                  <i className="fas fa-angle-right me-2" /> Services
                </Link>
                <Link to="/features">
                  <i className="fas fa-angle-right me-2" /> Features
                </Link>
                <Link to="/faq">
                  <i className="fas fa-angle-right me-2" /> FAQ's
                </Link>
                <Link to="/blog">
                  <i className="fas fa-angle-right me-2" /> Blogs
                </Link>
                <Link to="/contact">
                  <i className="fas fa-angle-right me-2" /> Contact
                </Link>
              </div>
            </div>

            {/* Column 3 - Popular Posts */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Post</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Investment</p>
                  <Link to="/blog/investment" className="text-body">
                    Revisiting Your Investment & Distribution Goals
                  </Link>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Business</p>
                  <Link to="/blog/business" className="text-body">
                    Dimensional Fund Advisors Interview with Director
                  </Link>
                </div>
                <div className="footer-btn text-start">
                  <Link to="/blog" className="btn btn-light rounded-pill px-4">
                    View All Posts <i className="fa fa-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 4 - Newsletter (moved after Popular Post) */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="text-white mb-3">
                  Stay updated with the latest news and offers from Websfdc
                  Technology. Subscribe to our newsletter for insights on
                  Salesforce web development, product updates, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Row */}
          <div
            className="row g-4 pt-4 mt-4 border-top"
            style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
          >
            <div className="col-md-4 d-flex align-items-start">
              <div className="icon-box bg-primary text-white rounded p-2 me-3">
                <i className="fa fa-map-marker-alt fa-lg"></i>
              </div>
              <div>
                <h6 className="text-white fw-bold mb-1">Address</h6>
                <p className="small text-light mb-0">
                  9th floor, Unit 60, Sushma Infinium, Zirakpur, Chandigarh
                  Punjab, 140603
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-start">
              <div className="icon-box bg-primary text-white rounded p-2 me-3">
                <i className="fas fa-envelope fa-lg"></i>
              </div>
              <div>
                <h6 className="text-white fw-bold mb-1">Mail Us</h6>
                <p className="small text-light mb-0">info@websfdctech.co.in</p>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-start">
              <div className="icon-box bg-primary text-white rounded p-2 me-3">
                <i className="fas fa-phone fa-lg"></i>
              </div>
              <div>
                <h6 className="text-white fw-bold mb-1">Telephone</h6>
                <p className="small text-light mb-0">+91 7015548507</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="btn btn-primary btn-lg-square back-to-top"
        aria-label="Back to top"
      >
        <i className="fa fa-arrow-up" />
      </button>
    </>
  );
};

export default Footer;
