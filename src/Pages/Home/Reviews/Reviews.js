import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
    fetch("https://quiet-beyond-69183.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    return (
        <div className="container">
      <h2 className="my-4">User Reviews</h2>
      <div className="row">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
    );
};

export default Reviews;