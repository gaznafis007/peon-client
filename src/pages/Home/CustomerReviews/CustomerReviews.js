import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shortReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-2 mx-10 px-10 py-6 ">
      <h2 className="text-4xl text-primary text-center font-serif">
        Customer review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 place-items-center">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
