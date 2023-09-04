import React, { useEffect } from "react";
import InitialBanner from "./initialBanner";
import RecentlyAdded from "./recentlyAdded";
import GridBanners from "./gridBanners";
import Footer from "../footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <InitialBanner />
      <RecentlyAdded />
      <GridBanners />
      <Footer />
    </>
  );
};

export default Home;
