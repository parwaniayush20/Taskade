import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isTrue, setIstrue] = useState(false);

  function handleClick() {
    setIstrue(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isTrue && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        }
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isTrue ? "3" : "1"}
        />
        <Zoom in={isTrue}>
          <button onClick={submitNote}><AddIcon /></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
