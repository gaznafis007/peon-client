import React from "react";
import { AiFillStar } from "react-icons/ai";

const SingleReview = ({ review }) => {
  const {
    customerName: name,
    review: customerReview,
    customerImg,
    star,
  } = review;
  return (
    <div className="p-4 border-2 rounded-lg flex flex-col items-center">
      <h1 className="text-xl font-semibold capitalize">{name}</h1>
      <img
        src={customerImg}
        alt="customerImage"
        className="w-24 my-4 rounded-full p-2 border-primary border-4"
      />
      <p className="text-black">{customerReview}</p>
      <p className="flex flex-row items-center mt-4">
        Rating: {star}
        <AiFillStar className="text-yellow-400"></AiFillStar>
      </p>
    </div>
  );
};

export default SingleReview;
