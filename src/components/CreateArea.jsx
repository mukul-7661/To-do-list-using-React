import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setTitle] = useState("");
  const [inputContent, setContent] = useState("");

  function handleChangeTitle(event) {
    const newValue = event.target.value;
    setTitle(newValue);
  }

  function handleChangeContent(event) {
    const newValue = event.target.value;
    setContent(newValue);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChangeTitle}
          name="title"
          placeholder="Title"
          value={inputText}
        />
        <textarea
          onChange={handleChangeContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputContent}
        />
        <button
          onClick={(event) => {
            props.onAdd(inputText, inputContent);
            setTitle("");
            setContent("");
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
