import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="container">
      <h2 className="text-success mt-5 mb-4 fst-italic fw-bold">About us</h2>
      <div class="card text-dark bg-light mb-3 about shadow">
        <div className='now'>
        <div class="card-header fw-bold">Get Best & Exclusive Tour from us</div>
        <div class="card-body p-4">
          <h6 class="card-title p-4">
            Feel free to explore the world. Our team agents facilitate customers to find out best possible travel arrangements. They recommend destinations and make arrangements for the hotel accommodations, car rentals, transportation, and tours for customers. Travelers may book tickets at their booking offices.
          </h6>
          <h6 class="card-title pe-4 pb-3">
          We also awere you many reasons to know the importance of adventure in our life as adventure provide positive attitude in the same way it releases our stress and mental problem because of the excitement and happiness we experience during the adventure take us away from normal hectic life to a new happy life at least.
          </h6>
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
    </div>
  );
};

export default About;
