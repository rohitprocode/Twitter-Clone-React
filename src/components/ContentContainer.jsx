import React from "react";
import "./ContentContainer.css";

function ContentBox({ postData }) {
  return (
    <div className="ContentContainer">
      <div className="ContentBox">
        <img src="../User.png" alt="" />
        <div className="postUserInfoContainer">
          <div className="postUserInfoBox">
            <h4>Rohit Rathore</h4>
            <span>@rohitprocode</span> <span>•</span>
            <span>10m</span>
          </div>
          <div className="postContent">{postData}</div>
        </div>
        <section>•••</section>
      </div>
    </div>
  );
}

export default ContentBox;
