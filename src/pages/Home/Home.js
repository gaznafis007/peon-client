import React from "react";
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
    </main>
  );
};

export default Home;
