import React from "react";
import Blog from "./Blog/Blog";
import Books from "./Books/Books";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
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
      <CustomerReviews />
    </main>
  );
};

export default Home;
