import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


const Booking = () => {
    const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch('/data.json')
        .then(res => res.json())
        .then(data => setData(data))
  }, []);
  console.log(data);
  const singleData = data?.find(
    (service) => parseInt(service.id) === parseInt(id)
  );
  console.log(singleData);
    return (
        <div className='container'>
      <div class="card mb-4 mt-5" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={singleData?.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{singleData?.name}</h5>
        <p class="card-text">{singleData?.details}</p>
        <p class="card-text">Duration: {singleData?.duration}</p>
        <p class="card-text">Min cost: ${singleData?.cost}</p>
        <p class="card-text">Max people: {singleData?.people}</p>
      </div>
    </div>
  </div>
</div>
    </div>
    );
};

export default Booking;