import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="../twitterX.png" alt="X_logo" />
      </div>
      <div className="Nav-contents">
        <ul>
          <li>
            <img src="../Home.png" alt="logo" />
            {/* <img src="../Blue_Dot.png" alt="" /> */}
            <span>Home</span>
          </li>
          <li>
            <img src="../Explore.png" alt="logo" />
            <span>Explore</span>
          </li>
          <li>
            <img src="../Notification.png" alt="logo" />
            <span>Notifications</span>
          </li>
          <li>
            <img src="../Messages.png" alt="logo" />
            <span>Messages</span>
          </li>
          <li>
            <img src="../Lists.png" alt="logo" />
            <span>Lists</span>
          </li>
          <li>
            <img src="../Communities.png" alt="logo" />
            <span>Communities</span>
          </li>
          <li>
            <img src="../twitterX.png" alt="logo" />
            <span>Premium</span>
          </li>
          <li>
            <img src="../Profile.png" alt="logo" />
            <span>Profile</span>
          </li>
          <li>
            <img src="../More.png" alt="logo" />
            <span>More</span>
          </li>
        </ul>

        <button>Post</button>

      </div>

      <div className="userInfo">
        <img src="" alt="" />
        <h4>Rohit Rathore</h4>
        <span className="span1">username</span>
        <span className="span2">...</span>
      </div>
    </div>
  );
}

export default Navigation;
