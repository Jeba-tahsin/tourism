import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import {MdAttachMoney} from 'react-icons/md'

const Service = (props) => {
    const { name, cost, img, _id } = props.service;

    return (
        <div className="col-md-4 service g-4">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text"><MdAttachMoney/>{cost}</p>
          <Link to={`/booking/${_id}`}><button className='btn-warning rounded'>Booking</button></Link>
        </div> 
      </div>
    </div> 
    );
};

export default Service;