import React from 'react';
import AddService from '../AddService/AddService';
import ManageBook from '../ManageBook/ManageBook';
import MyBooking from '../MyBooking/MyBooking';

const DashBoard = () => {
    return (
        <div>
      <h1>DashBoard</h1>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="manageBook-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageBook"
            type="button"
            role="tab"
            aria-controls="manageBook"
            aria-selected="true"
          >
             ManageBooking
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="myBooking-tab"
            data-bs-toggle="tab"
            data-bs-target="#myBooking"
            type="button"
            role="tab"
            aria-controls="myBooking"
            aria-selected="false"
          >
            MyBooking
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="addService-tab"
            data-bs-toggle="tab"
            data-bs-target="#addService"
            type="button"
            role="tab"
            aria-controls="addService"
            aria-selected="false"
          >
            AddService
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="review-tab"
            data-bs-toggle="tab"
            data-bs-target="#review"
            type="button"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Review
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="manageBook"
          role="tabpanel"
          aria-labelledby="manageBook-tab"
        >
          <ManageBook></ManageBook>
        </div>

        <div
          class="tab-pane fade"
          id="myBooking"
          role="tabpanel"
          aria-labelledby="myBooking-tab"
        >
          <MyBooking></MyBooking>
        </div>

        <div
          class="tab-pane fade"
          id="addService"
          role="tabpanel"
          aria-labelledby="addService-tab"
        >
          <AddService></AddService>
        </div>
        {/* <div
          class="tab-pane fade"
          id="review"
          role="tabpanel"
          aria-labelledby="review-tab"
        >
          <ReviewPage></ReviewPage>
        </div> */}
      </div>
    </div>
    );
};

export default DashBoard;