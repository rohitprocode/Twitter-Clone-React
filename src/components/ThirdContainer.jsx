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
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button id="SubscribeBtn">Subscribe</button>
        </div>
        <div className="TrendingBox">
          <h1>What's happening</h1>
          <div className="Trend-Container">
            <div>
              <span className="top-span">JioCinema · December 11, 2023</span>
              <h4>TATA IPL 2024</h4>
            </div>
            <img src="../IPL.jpg" alt="" />
          </div>
          <div className="Trend-Container">
            <div>
              <span className="top-span">Politics · Trending</span>
              <span className="threeDots">···</span>
              <h4>Terrorists</h4>
              <span className="bottom-span">213K posts</span>
            </div>
          </div>
          <div className="Trend-Container">
            <div>
              <span className="top-span">News · Trending</span>
              <span className="threeDots">···</span>
              <h4>#BreakingNews</h4>
              <span className="bottom-span">14.9K posts</span>
            </div>
          </div>
          <div className="Trend-Container">
            <div>
              <span className="top-span">Business & finance · Trending</span>
              <span className="threeDots">···</span>
              <h4>#StockMarketindia</h4>
              <span className="bottom-span">10.9K posts</span>
            </div>
          </div>
          <div className="Trend-Container">
            <div>
              <span className="top-span">Sports · Trending</span>
              <span className="threeDots">···</span>
              <h4>Rohit Sharma</h4>
              <span className="bottom-span">7.4K posts </span>
            </div>
          </div>
          {/* <div className="Trend-Container"></div> */}
        </div>
        {/* <div className="FollowBox">c</div> */}
      </div>
    </div>
  );
}

export default ThirdContainer;
