import React, { useEffect, useState } from "react";

function PublishContainer({
  inputField,
  setInputField,
  InitialOutput,
  setInitialOutput,
  postAction,
  setPostAction,
  UpdatedData,
  updatedDataId,
}) {
  const inputChange = (event) => {
    setInputField(event.target.value);
  };

  const PostEditBtnFunc = () => {
    // Post Action
    if (postAction == "Post") {
      if (inputField) {
        setInputField("");
        setInitialOutput([...InitialOutput, inputField]);
      }
    } else {
      //  updateVideo(inputField)
      // console.log(InitialOutput);
      // console.log([updatedDataId]);
      // console.log(inputField);
      // console.log([InitialOutput[updatedDataId]=inputField])
      UpdatedData(
        [...InitialOutput],
        (InitialOutput[updatedDataId] = inputField)
      );
      setPostAction("Post");
      setInputField("");
    }
  };

  return (
    <div>
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
            onChange={inputChange}
            value={inputField}
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
            <div className="imageUpload">
              <input type="file" id="MediaImg" />
            </div>
            <img id="GifImg" src="../GIF.png" alt="" />
            <img id="PollImg" src="../Poll.png" alt="" />
            <img id="EmojiImg" src="../Emoji.png" alt="" />
            <img id="ScheduleImg" src="../Schedule.png" alt="" />
            <img id="LocationImg" src="../Location.png" alt="" />
          </div>
          <div className="postBtnContent">
            <button onClick={PostEditBtnFunc}>{postAction}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishContainer;
