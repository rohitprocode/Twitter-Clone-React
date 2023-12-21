import React from "react";
import "./ThirdContainer.css";
import FollowBox from "./FollowBox";
import FollowBoxList from "./FollowBoxList";
import TrendingList from "../ThirdContainer/TrendingList.json";
import TrendContainer from "./TrendContainer";

function ThirdContainer() {
  return (
    <div className="ThirdContainer">
      <div className="topSearchBar">
        <div className="imgContent">
          <img src="Explore2.png" alt="" />
        </div>
        <input type="search" placeholder="Search" />
      </div>
      <div className="bottomContainer">
        <div className="PremiumBox">
          <h1>Subscribe to Premium</h1>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button id="SubscribeBtn">Subscribe</button>
        </div>
        <div className="TrendingBox">
          <h1>What's happening</h1>
          {TrendingList.items.map((data) => (
            <TrendContainer
              category={data.category}
              heading={data.heading}
              postCounts={data.postCounts}
            />
          ))}

          <a href="https://twitter.com/explore/tabs/for-you">
            <div className="Trend-Container">
              <section className="showMore">Show more</section>
            </div>
          </a>
        </div>
        <div className="FollowContainer">
          <h1>Who to follow</h1>
          {FollowBoxList.map((data) => (
            <FollowBox
              img={data.img}
              name={data.name}
              username={data.userName}
              key={data.key}
            />
          ))}
          <section className="showMore">Show more</section>
        </div>
      </div>
      <div className="thirdC-bottomBar">
        <span>Terms of Service </span>
        <span>Privacy Policy </span>
        <span>Cookie Policy </span>
        <span>Accessibility </span>
        <span>Ads info </span>
        <span>More... </span>
        <span>© 2023 X Corp.</span>
      </div>
    </div>
  );
}

export default ThirdContainer;
