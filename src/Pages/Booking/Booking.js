import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router";
import "./Booking.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import {MdAttachMoney} from 'react-icons/md'

const Booking = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loginUser, setLoginUser] = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://quiet-beyond-69183.herokuapp.com/details/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {name, cost, duration, img, people} = details;
    const bookingDetails = { ...data, name, cost, duration, img, people, bookingStatus: 'pending' };
    console.log(data);
    axios.post("https://quiet-beyond-69183.herokuapp.com/purchesData", bookingDetails).then((res) => {
      if (res.data.insertedId) {
        alert(`Thank you! Share your feedback! ${history.push('/review')}`);
      }
    });
  };

  return (
    <div className='container booking'>
      <div class="card mb-3 mt-5">
  <div class="row g-0">
    <div class="col-md-4 ">
      <img src={details?.img} class="img-fluid rounded-start imgStyle" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body fst-italic">
        <h5 class="card-title">{details?.name}</h5>
        <p class="card-text">{details?.details}</p>
        <p class="card-text">Duration: {details?.duration}days</p>
        <p class="card-text">Cost: <MdAttachMoney/>{details?.cost}</p>
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
      <input type="submit" value="Book now" />
    </form>
      </div> 
    </div>
  );
};

export default Booking;
