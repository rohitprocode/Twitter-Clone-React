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
        <div className="TrendingBox">
          <h1>What's happening</h1>
          <div className="Trend-Container">
            <div>
            <span>Esports · December 11, 2023</span>
            <h4>TFT Vegas Open Finals</h4>
            </div>  
            <img src="../IPL.jpg" alt="" />
          </div>
          <div className="Trend-Container">a</div>
          <div className="Trend-Container">b</div>
          {/* <div className="Trend-Container">c</div> */}
          {/* <div className="Trend-Container">d</div> */}
          {/* <div className="Trend-Container">e</div> */}
        </div>
        {/* <div className="FollowBox">c</div> */}
      </div>
    </div>
  );
}

export default ThirdContainer;
