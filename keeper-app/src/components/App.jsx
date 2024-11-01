import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteItems, setNoteItems] = useState([]);

  function addNote(newNote) {
    setNoteItems((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteItem(id) {
    setNoteItems((prevValue) => {
      return prevValue.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {noteItems.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onChecked={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
