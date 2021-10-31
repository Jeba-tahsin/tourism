import React from 'react';
import './Guide.css';
import person1 from "../../../images/p1.jpg";
import person2 from "../../../images/p2.jpg";
import person3 from "../../../images/p3.jpg";
import person4 from "../../../images/p4.jpg";
import person5 from "../../../images/p5.jpg";
import person6 from "../../../images/p6.jpg";
import {GrUserExpert} from 'react-icons/gr';


const Guide = () => {
    return (
        <div className='container'>
        <h2 className="text-success mt-5 fst-italic fw-bold">Meet Our Experts</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card shadow">
      <img src={person1} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Alina topal</h5>
        <p class="card-text">
        <GrUserExpert/> Tour Guide
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card image shadow">
      <img src={person5} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Zara smith</h5>
        <p class="card-text"><GrUserExpert/> Tour Guide</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card image shadow">
      <img src={person3} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Jhon arduc</h5>
        <p class="card-text"><GrUserExpert/> Tour Guide</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card image shadow">
      <img src={person4} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Zeba rahman</h5>
        <p class="card-text"><GrUserExpert/> Tour Guide</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card image shadow">
      <img src={person2} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Travis scot</h5>
        <p class="card-text"><GrUserExpert/>
        Tour Guide</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card image shadow">
      <img src={person6} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Diya arduc</h5>
        <p class="card-text"><GrUserExpert/> Tour Guide</p>
      </div>
    </div>
  </div>
</div>
       </div>
    );
};

export default Guide;