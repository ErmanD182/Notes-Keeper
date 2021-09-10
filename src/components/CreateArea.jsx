import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

function handleChange(event){
  const {name, value} = event.target;

  setNote(prevNote => {
    return {
      ...prevNote,
      [name]: value
    };
  });
}

function stopDefault(event){
  setNote({
    title: "",
    content: ""
  });
  event.preventDefault();
}

  return (
    <div>
      <form onSubmit={stopDefault}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={()=>{
          props.add(note);
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
