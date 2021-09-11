import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [areaClick, setAreaClick] = useState(false);

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

function expandArea(){
  setAreaClick(true);
}

  return (
    <div>
      <form onSubmit={stopDefault} className="create-note">
        {areaClick ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title} autocomplete="off"/> : null}
        <textarea onClick={expandArea} onChange={handleChange} name="content" placeholder="Take a note..." rows={areaClick ? "3" : "1"} value={note.content} />
        <Zoom in={areaClick}>
        <Fab type="submit" onClick={()=>{
          props.add(note);
        }}> <AddIcon /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
