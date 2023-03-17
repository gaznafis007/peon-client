import React from "react";
import Blog from "./Blog/Blog";
import Books from "./Books/Books";
import Hero from "./Hero/Hero";
import TopSale from "./TopSale/TopSale";
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent";

const Home = () => {
  return (
    <main>
      <Hero />
      <TopSale />
      <UpcomingEvent />
      <Books />
      <Blog />
    </main>
  );
};

export default Home;
