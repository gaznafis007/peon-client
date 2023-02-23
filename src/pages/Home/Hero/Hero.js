import React from "react";
import library from "../../../asset/library.json";
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-2 px-10 py-6">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-bold text-primary ">
          Let the worlds
          <br /> be Books'
        </h2>
        <p className="my-4 text-secondary font-semibold w-1/2">
          We try to make world be full of books and all people have access any
          book wherever they are staying.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full">
          <Lottie animationData={library}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Hero;
