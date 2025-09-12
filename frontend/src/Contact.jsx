import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/createcontact", formData);
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("AxiosError:", error);
      alert("❌ Failed to send message. Please try again.");
    }
  };

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
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-twitter text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-instagram text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-0">
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
                <i className="fas fa-cloud-sun me-3" />
                Websfdc
              </h1>
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
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link active">About</Link>
                <Link to="/service" className="nav-item nav-link active">Service</Link>
                <Link to="/blog" className="nav-item nav-link active">Blog</Link>
                <Link to="/contact" className="nav-item nav-link active">Contact</Link>
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
                  Start Websdfc
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}

      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4">Contact Us</h4>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="breadcrumb-item">Pages</li> */}
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Intro Section */}
            <div className="col-lg-6">
              <div className="contact-item pb-5">
                <h4 className="text-primary">Contact Us</h4>
                <h1 className="display-4 mb-4">Get In Touch With Us</h1>
                <p className="mb-0">
                  Fill out the form and we’ll get back to you as soon as possible.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="project"
                        placeholder="Project"
                        value={formData.project}
                        onChange={handleChange}
                      />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 160 }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div className="col-12">
              <iframe
                className="rounded-top w-100"
                style={{ height: 400 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            {/* Newsletter */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="mb-3">
                  At Websfdc Technology, we specialize in Salesforce web development,
                  offering innovative solutions to streamline business processes and
                  enhance customer relationships. Your success is our priority.
                </p>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Use Links</h4>
                <a href="#"><i className="fas fa-angle-right me-2" /> About Us</a>
                <a href="#"><i className="fas fa-angle-right me-2" /> Features</a>
                <a href="#"><i className="fas fa-angle-right me-2" /> Services</a>
                {/* <a href="#"><i className="fas fa-angle-right me-2" /> FAQ's</a> */}
                <a href="#"><i className="fas fa-angle-right me-2" /> Blogs</a>
                <a href="#"><i className="fas fa-angle-right me-2" /> Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href=""><i className="fa fa-map-marker-alt me-2" /> 9th floor, Unit 60, Sushma Infinium, Zirakpur, Chandigarh Punjab,140603</a>
                <a href=""><i className="fas fa-envelope me-2" /> info@websfdctech.co.in</a>
                <a href="" className="mb-3"><i className="fas fa-print me-2" /> +91 7015548507</a>
                <div className="d-flex align-items-center">
                  <a className="btn btn-light btn-md-square me-2" href=""><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-light btn-md-square me-2" href=""><i className="fab fa-twitter" /></a>
                  <a className="btn btn-light btn-md-square me-2" href=""><i className="fab fa-instagram" /></a>
                  <a className="btn btn-light btn-md-square me-0" href=""><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>

            {/* Popular Post */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Post</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Investment</p>
                  <a href="#" className="text-body">Revisiting Your Investment & Distribution Goals</a>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Business</p>
                  <a href="#" className="text-body">Dimensional Fund Advisors Interview with Director</a>
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
    </>
  );
};

export default Contact;