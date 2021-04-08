import React, { useState } from "react";

import { GrFormAdd } from "react-icons/gr";
import NoteListText from "./NoteListText";
import NoteListBody from "./NoteListBody";
function Form() {
  const [title, setTitle] = useState("");
  const [notetitle, setNoteTitle] = useState([]);
  const [note, setNote] = useState("");
  const [bodynotes, setBodyNotes] = useState([]);

  const handleUserTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleUserNote = (e) => {
    setNote(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    console.log("no tyext");

    console.log();
    setTitle("");
    setNote("");

    setNoteTitle([
      ...notetitle,
      {
        text: title,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);

    setBodyNotes([
      ...bodynotes,
      { text: note, completed: false, id: Math.floor(Math.random() * 1000) },
    ]);
  };

  return (
    <div className="notes">
      <form>
        <input
          value={title}
          notetitle={notetitle}
          onChange={handleUserTitle}
          type="text"
          placeholder="Title"
          name="Title"
          className="notes-input"
        />
        <p className="actual-note">
          <textarea
            value={note}
            bodynotes={bodynotes}
            onChange={handleUserNote}
            name="content"
            placeholder="Take a note..."
          ></textarea>
          <button>
            <GrFormAdd onClick={handleAdd} className="add" />
          </button>
        </p>
      </form>

      <div>
        {notetitle.map((tit) => {
          return <div>{<NoteListText text={tit.text} id={tit.id} />}</div>;
        })}
        {bodynotes.map((bodynote) => {
          return (
            <div>
              {<NoteListBody bodytext={bodynote.text} id={bodynote.id} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
