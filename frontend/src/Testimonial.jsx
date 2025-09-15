import React from "react";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
     

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

   
    </>
  );
};

export default Testimonial;
