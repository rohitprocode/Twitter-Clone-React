import React from "react";
import "./ThirdContainer.css";

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
          <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
          <button id="SubscribeBtn" >Subscribe</button>
        </div>
        {/* <div className="TrendingBox">b</div>
        <div className="FollowBox">c</div> */}
      </div>
    </div>
  );
}

export default ThirdContainer;
