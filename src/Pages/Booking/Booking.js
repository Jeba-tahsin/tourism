import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


const Booking = () => {
    const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/details/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
  }, []);
    return (
        <div className='container'>
      <div class="card mb-4 mt-5" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={data?.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{data?.name}</h5>
        <p class="card-text">{data?.details}</p>
        <p class="card-text">Duration: {data?.duration}</p>
        <p class="card-text">Min cost: ${data?.cost}</p>
        <p class="card-text">Max people: {data?.people}</p>
      </div>
    </div>
  </div>
</div>
    </div>
    );
};

export default Booking;