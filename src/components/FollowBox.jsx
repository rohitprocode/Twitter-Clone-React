import React from "react";
import "./FollowBox.css";

function FollowBox({ img, name, username }) {
  return (
    <div className="followBox">
      <div>
        <img src={img} alt="" />
        <div className="userId-data">
          <h4>{name}</h4>
          <span>@{username}</span>
        </div>
        <button className="followBtn">Follow</button>
      </div>
    </div>
  );
}

export default FollowBox;
