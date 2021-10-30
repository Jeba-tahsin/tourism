import React from 'react';
import './Guide.css';
import person1 from "../../../images/p1.jpg";
import person2 from "../../../images/p2.jpg";
import person3 from "../../../images/p3.jpg";


const Guide = () => {
    return (
        <div className='container'>
        <h2 className="text-success">MEET OUR EXPERTS</h2>
      <div class="card mb-4 mt-5">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Micle arduch</h5>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
            </div>
          </div>
          <div class="col-md-4 image">
            <img
              src={person1}
              class="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
      <div class="card mb-4 mt-5">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Rehan polat</h5>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
            </div>
          </div>
          <div class="col-md-4 image">
            <img
              src={person2}
              class="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
      <div class="card mb-4 mt-5">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Aliyana smitch</h5>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo!</p>
            </div>
          </div>
          <div class="col-md-4 image">
            <img
              src={person3}
              class="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Guide;