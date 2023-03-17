import React from "react";
import Lottie from "lottie-react";
import blog from "../../../asset/blog.json";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <section className="my-2 mx-10 px-10 py-6 flex-col items-center">
      <h2 className="text-4xl text-center font-serif text-primary">Blog</h2>
      <div className="mt-4 flex flex-col md:flex-row justify-between text-black">
        <div className="w-full md:w-1/2">
          <p className="font-serif">
            <span className="text-4xl">Peon</span> has a large community where
            people can express there opinion about books and write about it and
            others can read that as a review then can also comment their
            thoughts on the review. Not only this people's review on books also
            helps writer and publisher to acquire the need of the readers and
            also , this blog option can be the bridge between writers and the
            reader. Writers also post their blog according how they want it to
            use.
          </p>
          <p className="mt-2">
            This can also be used as a short literary center where anyone can
            write and post their thoughts which are not big enough to print but
            also not small enough to be ignored. Anybody can came up with any
            plots and write it down to practice someone's skill to write and
            express the word as someone wants to. And It also can be recognized
            by others who are reading those blg
          </p>
          <Link
            to="/blog"
            className="capitalize mt-4 inline-block bg-primary text-white px-4 py-3 rounded-md hover:bg-primaryLight"
          >
            explore blog
          </Link>
        </div>
        <div>
          <Lottie animationData={blog}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Blog;
