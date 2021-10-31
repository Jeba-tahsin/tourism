import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import "./Booking.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const Booking = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loginUser, setLoginUser] = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://quiet-beyond-69183.herokuapp.com/details/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const bookingDetails = { ...data, ...details };
    console.log(data);
    axios.post("https://quiet-beyond-69183.herokuapp.com/purches", bookingDetails).then((res) => {
      if (res.data.insertedId) {
        alert("Thank you!");
      }
    });
  };

  return (
    <div className='container booking'>
      <div class="card mb-3 mt-5">
  <div class="row g-0">
    <div class="col-md-4 imgStyle">
      <img src={details?.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{details?.name}</h5>
        <p class="card-text">{details?.details}</p>
        <p class="card-text">Duration: {details?.duration}</p>
        <p class="card-text">Cost: {details?.cost}</p>
        <p class="card-text">Max-people: {details?.people}</p>
      </div>
    </div>
  </div>
      </div>
      <div>
    <h3>Fill up Form</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="mb-2 ">
               <input
          defaultValue={loginUser.email}
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-2">
        <input
          defaultValue={loginUser.displayName}
          {...register("userName", { required: true })}
        />
      </div>
      <div className="mb-2">
        <input {...register("address", { required: true })} placeholder='address'/>
      </div>
      <div className="mb-2">
        <input
          type="number"
          {...register("phoneNumber", { required: true })}
          placeholder='number'/>
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" value="Check Out" />
    </form>
</div> 
    </div>
  );
};

export default Booking;
