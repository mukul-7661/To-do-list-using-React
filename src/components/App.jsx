import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [itemsTitle, setTitle] = useState([]);
  const [itemsContent, setContent] = useState([]);

  function addNote(inputText, inputContent) {
    setTitle((prevTitle) => {
      return [...prevTitle, inputText];
    });
    setContent((prevContent) => {
      return [...prevContent, inputContent];
    });
  }

  function deleteNote(id) {
    setTitle((prevTitle) => {
      return prevTitle.filter((Title, index) => {
        return index !== id;
      });
    });

    setContent((preContent) => {
      return preContent.filter((Content, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {itemsTitle.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={itemsTitle[index]}
          content={itemsContent[index]}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
