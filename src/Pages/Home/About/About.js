import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="container">
      <h2 className="text-success mt-5">About us</h2>
      <div class="card text-dark bg-light mb-3 about">
        <div class="card-header fw-bold">Get Best & Exclusive Tour from us</div>
        <div class="card-body p-4">
          <h5 class="card-title p-4">
            Feel free to explore the world. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos, In massa
            urna pellentesque habitant morbi tristique senectus.
          </h5>
          <p class="card-text ">
            <div className="d-flex justify-content-evenly ">
              <div>
                <ul>
                  <li>We offer daily tours</li>
                  <li>Never lose your deposit</li>
                  <li>Handpicked hotels</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Best price guarantee</li>
                  <li>5 star accommodations</li>
                  <li>Special gifts and offers for you</li>
                </ul>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
