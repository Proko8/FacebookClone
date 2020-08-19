import React from "react";
import HomeHeader from "./HomeHeader";
import Timeline from "./HomeTimeline";
import HomeMenu from "./HomeMenu";
import HomeAds from "./HomeAds"
import "../../css/HomePage/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__homeHeader">
        <HomeHeader />
      </div>
      <div className="home__wrapper">
        <div className="home__homeMenu">
          <HomeMenu />
        </div>
        <div className="home__homeTimeline">
          <Timeline />
        </div>
        <HomeAds />
      </div>
    </div>
  );
}

export default Home;
