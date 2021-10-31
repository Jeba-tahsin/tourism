import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import './MyBooking.css';

const MyBooking = () => {
    const [loginUser, setLoginUser] = useContext(AuthContext);

  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch("https://quiet-beyond-69183.herokuapp.com/orderEmail?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);
  console.log(orderList);
    return (
        <div className='myBooking mt-4'>
            <h5>My Purches </h5> 
           {
               orderList.map(purches=> 
                <div class="card  m-5">
                <div class="row g-0 ">
                  <div class="col-md-4  imgStyle">
                    <img src={purches?.img} style={{height:300}} class="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{purches?.name}</h5>
                      <p class="card-text">{purches?.details}</p>
                      <p class="card-text">Duration: {purches?.duration}</p>
                      <p class="card-text">Cost: $ {purches?.cost}</p>
                      <p class="card-text">Max-people: {purches?.people}</p>
                    </div>
                  </div>
                </div>
                    </div>
                )
           }
        </div>
    );
};

export default MyBooking;