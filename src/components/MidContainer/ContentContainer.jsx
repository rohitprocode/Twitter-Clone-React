import React, { useState } from "react";
import "./ContentContainer.css";

function ContentBox({ postData, id, onDeleteSelect, onEditSelect }) {
  const [mouseHoverLike, setmouseHoverLike] = useState("../like.png");
  const [like, setlike] = useState(true);
  const [likeicon, setlikeicon] = useState("like");
  const [likeCount, setlikeCount] = useState(0);
  const [likeDisplay, setlikeDisplay] = useState("none");
  const [displayPostOption, setdisplayPostOption] = useState("none");

  const changeLikeIcon = () => {
    if (like) {
      setmouseHoverLike("../like2.png");
      setlikeicon("like2");
      setlikeDisplay("");
      setlikeCount(1);
    } else {
      setmouseHoverLike("../like.png");
      setlikeicon("like");
      setlikeDisplay("none");
    }
    setlike(!like);
  };

  const displayPostOptionFunction = () => {
    setdisplayPostOption("block");
  };

  const displayPostOptionFunctionClose = () => {
    setdisplayPostOption("none");
  };

  const deleteFunction = () => {
    onDeleteSelect(id);
    setdisplayPostOption("none");
  };

  const editFunction = () =>{
    onEditSelect(id);
    setdisplayPostOption("none");
  }

  return (
    <div className="ContentContainer">
      <div className="ContentBox">
        <img src="../User.png" alt="" />
        <div className="postUserInfoContainer">
          <div className="postUserInfoBox">
            <h4>Rohit Rathore</h4>
            <span>@rohitprocode</span> <span>•</span>
            <span>1s</span>
          </div>
          <div className="postContent">{postData}</div>
        </div>
        {/* <section >X</section> */}
        <section onClick={displayPostOptionFunction}>•••</section>
        <div className="popup-msg" style={{ display: displayPostOption }}>
          <div className="overlay"></div>
          <div className="popupMsgContentBox">
            <button onClick={displayPostOptionFunctionClose}>X</button>
            <div className="Action">
              <h4 id="EditAction" onClick={editFunction} >Edit</h4>
              <h4 id="DeleteAction" onClick={deleteFunction}>
                Delete
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="PostAction">
        <img src="../Comment.png" alt="" id="comment" />
        <img src="../repost.png" alt="" id="repost" />
        <div className="likebtn">
          <img
            src={mouseHoverLike}
            alt=""
            id={likeicon}
            onClick={changeLikeIcon}
          />
          <span style={{ display: likeDisplay }}>{likeCount}</span>
        </div>
        <img src="../view.png" alt="" id="view" />
        <img src="../bookmark.png" alt="" id="bookmark" />
        <img src="../share.png" alt="" id="share" />
      </div>
    </div>
  );
}

export default ContentBox;
