import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <div className='nav'>
      <div className="logo"><img src="../twitterX.png" alt="X_logo" /></div>
      <div className="Nav-contents">
        <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Lists</li>
            <li>Communities</li>
            <li>Premium Profile</li>
            <li>More</li>
            </ul>
            <button>Post</button>
      </div>
      <div className="userInfo">
        <img src="" alt="" />
        <h4>Rohit Rathore</h4>
        <span className='span1'>username</span>
        <span className='span2'>...</span>
      </div>
    </div>
  )
}

export default Navigation
