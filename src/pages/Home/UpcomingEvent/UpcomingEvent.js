import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import discount from "../../../asset/discount.json";

const UpcomingEvent = () => {
  return (
    <section className="my-6 mx-10 px-10 py-6 text-primary flex flex-col md:flex-row justify-between items-center">
      <div>
        <h2 className=" text-6xl font-serif">Save 21%</h2>
        <p className=" mt-2 w-full md:w-1/2 capitalize my-4">
          this is the month of international mother language day to read books
          in your own native language we are giving{" "}
          <span className="text-primary">21% discount</span> for all the books
          are available
        </p>
        <Link
          to="/books"
          className="px-4 py-3 inline-block mt-2 bg-primaryLight hover:bg-primary rounded-full capitalize text-white"
        >
          grab the offer
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <Lottie animationData={discount}></Lottie>
      </div>
    </section>
  );
};

export default UpcomingEvent;
