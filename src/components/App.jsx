import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes =>{
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => index!==id);
    });
  }

  return <div>
  <Header />
  <CreateArea
  add={addNote}
  />
  {notes.map((note, index) => (
    <Note
    key = {index}
    id = {index}
    title = {note.title}
    content = {note.content}
    delete = {deleteNote}
     />)
  )}
  <Footer />
  </div>;
}

export default App;
