import React from "react";
import "./MidContainer.css";
import ContentBox from "./ContentBox";

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
        <div className="PostContainer-hr">
        <hr />
        </div>
        <div className="bottom-bar">
          <div className="imgContainer">
          <img id="MediaImg" src="../MediaImage.png" alt="" />
          <img id="GifImg" src="../GIF.png" alt="" />
          <img id="PollImg" src="../Poll.png" alt="" />
          <img id="EmojiImg" src="../Emoji.png" alt="" />
          <img id="ScheduleImg" src="../Schedule.png" alt="" />
          <img id="LocationImg" src="../Location.png" alt="" />
          </div>
          <div className="postBtnContent">
            <button>Post</button>
          </div>
        </div>
      </div>
      <div>
        <ContentBox/>
      </div>
    </div>
  );
}

export default MidContainer;
