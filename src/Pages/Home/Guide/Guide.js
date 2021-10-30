import React from 'react';
import './Guide.css';
import person1 from "../../../images/p1.jpg";
import person2 from "../../../images/p2.jpg";
import person3 from "../../../images/p3.jpg";


const Guide = () => {
    return (
        <div className='container'>
        <h2 className="text-success mt-5">MEET OUR EXPERTS</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={person1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Alina topal</h5>
        <p class="card-text">Tour Guide</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card image">
      <img src={person2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Zara smith</h5>
        <p class="card-text">Tour Guide</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card image">
      <img src={person3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Jhon arduc</h5>
        <p class="card-text">Tour Guide</p>
      </div>
    </div>
  </div>
</div>
       </div>
    );
};

export default Guide;