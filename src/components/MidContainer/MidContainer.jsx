import React, { useEffect, useState } from "react";
import "./MidContainer.css";
import ContentContainer from "./ContentContainer";
import PublishContainer from "./PublishContainer";
import { logDOM } from "@testing-library/react";

function MidContainer() {
  // const [InitialOutput, setInitialOutput] = useState([]);

  // const [postAction, setPostAction] = useState(null);

  const [inputField, setInputField] = useState("");

  const [InitialOutput, setInitialOutput] = useState([]);

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
  };

  return (
    <div className="MidContainer">
      <PublishContainer 
      inputField={inputField}
      setInputField={setInputField}
      InitialOutput={InitialOutput}
      setInitialOutput={setInitialOutput}
      // postAction={postAction} 
      />
      <div className="contentPublish">
        {InitialOutput.map((data, index) => (
          <ContentContainer
            postData={data}
            id={index}
            key={index}
            onDeleteSelect={deleteSelectedFunction}
            onEditSelect={editSelectedFunction}
          />
        ))}
      </div>
    </div>
  );
}

export default MidContainer;
