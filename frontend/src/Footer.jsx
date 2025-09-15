import React from "react";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            
            {/* Newsletter */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="mb-3">
                  Stay updated with the latest news and offers from Websfdc Technology. 
                  Subscribe to our newsletter for insights on Salesforce web development, 
                  product updates, and more.
                </p>
              </div>
            </div>

            {/* Explore */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <Link to="/"><i className="fas fa-angle-right me-2" /> Home</Link>
                <Link to="/service"><i className="fas fa-angle-right me-2" /> Services</Link>
                <Link to="/about"><i className="fas fa-angle-right me-2" /> About Us</Link>
                <Link to="/blog"><i className="fas fa-angle-right me-2" /> Our Blog</Link>
                <Link to="/contact"><i className="fas fa-angle-right me-2" /> Contact Us</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="https://maps.google.com?q=Sushma+Infinium+Zirakpur" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-map-marker-alt me-2" /> 9th floor, Unit 60, Sushma Infinium, Zirakpur, Chandigarh Punjab, 140603
                </a>
                <a href="mailto:info@example.com"><i className="fas fa-envelope me-2" /> info@example.com</a>
                <a href="tel:+917015548507"><i className="fas fa-phone me-2" /> +91 7015548507</a>

                <div className="d-flex align-items-center mt-3">
                  <a className="btn btn-light btn-md-square me-2" href="https://www.facebook.com/people/Websfdc-Technology-Pvt-Ltd/61580310165683/?rdid=x9m2lBpGoIlkwnIK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CfpDtCw93%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href="https://x.com/websfdc_tech?t=MjGQegl9BVB7bidFXkvptA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href="https://www.instagram.com/websfdc_technology/?igsh=aHVvMmJicHpkd2Jq#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn btn-light btn-md-square me-0" href="https://www.linkedin.com/company/websfdc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>

            {/* Popular Posts */}
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

          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
        className="btn btn-primary btn-lg-square back-to-top"
        aria-label="Back to top"
      >
        <i className="fa fa-arrow-up" />
      </button>
    </>
  );
};

export default Footer;
