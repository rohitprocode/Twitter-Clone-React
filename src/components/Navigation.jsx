import React from "react";
import "./Navigation.css";
import NavItem from "./NavItem";
import NavListName from "./NavList";

function Navigation() {
  console.log(NavListName);
  return (
    <div className="nav">
      <div className="logo">
        <img src="../twitterX.png" alt="X_logo" />
      </div>
      <div className="Nav-contents">
        <ul>
          {/* {NavListName.map((it) => (
            <NavItem key={it.id} name={it.name} />
          ))} */}

           {NavListName.map((navlist)=>
          <NavItem key={navlist.id} name={navlist.name} img={navlist.img} link={navlist.alink} divId={navlist.divId} liId={navlist.liId}/>
         )}

          {/* { 
          <li id="explore-li">
            <div id="navExplore">
              <img src="../Explore.png" alt="logo" />
              <span>Explore</span>
            </div>
          </li>
          <li id="notification-li">
            <div id="navNotification">
              <img src="../Notification.png" alt="logo" />
              <span>Notifications</span>
            </div>
          </li>
          <li id="messages-li">
            <div id="navMessages">
              <img src="../Messages.png" alt="logo" />
              <span>Messages</span>
            </div>
          </li>
          <li id="lists-li">
            <div id="navLists">
              <img src="../Lists.png" alt="logo" />
              <span>Lists</span>
            </div>
          </li>
          <li id="communities-li">
            <div id="navCommunities">
              <img src="../Communities.png" alt="logo" />
              <span>Communities</span>
            </div>
          </li>
          <li id="premium-li">
            <div id="navPremium">
              <img src="../twitterX.png" alt="logo" />
              <span>Premium</span>
            </div>
          </li>
          <li id="profile-li">
            <div id="navProfile">
              <img src="../Profile.png" alt="logo" />
              <span>Profile</span>
            </div>
          </li>
          <li id="more-li">
            <div id="navMore">
              <img src="../More.png" alt="logo" />
              <span>More</span>
            </div>
          </li>  */}
        </ul>
        <button id="Post-btn">Post</button>
      </div>

      <div className="userInfo">
        <img src="../User.png" alt="" />
        <div>
          <div className="name">Rohit Rathore</div>
          <span className="username">@rohitprocode</span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
