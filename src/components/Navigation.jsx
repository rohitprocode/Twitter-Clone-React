import React from "react";
import "./Navigation.css";
import NavItem from "./NavItem";
import NavListName from "./NavList.json";

function Navigation() {
  console.log(NavListName);
  return (
    <div className="nav">
      <div className="logo">
        <img src="../twitterX.png" alt="X_logo" />
      </div>
      <div className="Nav-contents">
        <ul>
          {NavListName.items.map((navlist) => (
            <NavItem
              key={navlist.id}
              name={navlist.name}
              img={navlist.img}
              link={navlist.alink}
              divId={navlist.divId}
              liId={navlist.liId}
            />
          ))}
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
