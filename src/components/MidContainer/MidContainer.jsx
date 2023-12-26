import React, { useEffect, useState } from "react";
import "./MidContainer.css";
import ContentContainer from "./ContentContainer";
import PublishContainer from "./PublishContainer";

function MidContainer() {
  // const [InitialOutput, setInitialOutput] = useState([]);

  
  const [inputField, setInputField] = useState("");
  
  const [InitialOutput, setInitialOutput] = useState([]);
  
  const [postAction, setPostAction] = useState("Post");

  const [updatedData,setupdatedData] = useState("");

  const deleteSelectedFunction = (id) => {
    setInitialOutput((oldData) => {
      return oldData.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  const editSelectedFunction = (id) => {
    // setInputField(InitialOutput.find(editzz => editzz.id === id))
    setInputField(InitialOutput[id])
    setPostAction("Edit")
  };

  const updateVideo = (data) =>{
    setupdatedData(data)
  }

  return (
    <div className="MidContainer">
      <PublishContainer 
      inputField={inputField}
      setInputField={setInputField}
      InitialOutput={InitialOutput}
      setInitialOutput={setInitialOutput}
      postAction={postAction}
      updateVideo={updateVideo} 
      />
      <div className="contentPublish">
        {InitialOutput.map((data, index) => (
          <ContentContainer
            postData={data}
            id={index}
            key={index}
            onDeleteSelect={deleteSelectedFunction}
            onEditSelect={editSelectedFunction}
            updatedData={updatedData}
          />
        ))}
      </div>
    </div>
  );
}

export default MidContainer;
