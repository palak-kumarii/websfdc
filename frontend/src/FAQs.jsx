import React from "react";
import { Link } from "react-router-dom";

const FAQs = () => {
  return (
    <>
      
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

      
    </>
  );
};

export default FAQs;
