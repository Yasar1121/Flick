import React from "react";
import "./style.scss";
import Herobanner from "./heroBanner/Herobanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";

const Home = () => {
  return (
    <div className="HomePage">
      <Herobanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
