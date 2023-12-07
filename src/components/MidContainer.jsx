import React from "react";
import "./MidContainer.css";

function MidContainer() {
  return (
    <div className="MidContainer">
      <div className="header">
        <h3 id="foryou">For you</h3>
        <h3 id="following">Following</h3>
        <img src="../Setting.png" alt="" />
      </div>
      <div className="PostContainer">
        <div className="topbar">
          <img src="../User.png" alt="" id="UserImg" />
          <input
            type="text"
            name=""
            id="inputbox"
            placeholder="What is happening?!"
          />
        </div>
        <div className="Input-Popup">
          <img src="../Earth.png" alt="" />
          <span>Everyone can reply</span>
        </div>
      </div>
    </div>
  );
}

export default MidContainer;
