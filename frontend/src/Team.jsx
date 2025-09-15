import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
     

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

    
    </>
  );
};

export default Team;
