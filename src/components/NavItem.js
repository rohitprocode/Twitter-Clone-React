import React from 'react'
import './Navigation.css'

export default function NavItem({name,img,alink,divId,liId}) {
  return (
    <div>
      <a href={alink}>
            <li id={liId}>
              <div id={divId}>
                <img src={img} alt="logo" />
                {/* <img src="../Blue_Dot.png" alt="" /> */}
                <span>{name}</span>
              </div>
            </li>
        </a>
    </div>
  )
}
