import React from "react";
import Hero from "./Hero/Hero";
import TopSale from "./TopSale/TopSale";
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent";

const Home = () => {
  return (
    <main>
      <Hero />
      <TopSale />
      <UpcomingEvent />
    </main>
  );
};

export default Home;
