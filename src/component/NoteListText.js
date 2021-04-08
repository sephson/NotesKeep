import React from "react";

function NoteListText({ text }) {
  return (
    <div className="notelist">
      <div className="note-item">
        <h2 className="item">{text}</h2>
      </div>
    </div>
  );
}

export default NoteListText;
