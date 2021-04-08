import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
function NoteListBody({ bodytext }) {
  return (
    <div className="notelist">
      <div className="note-item">
        {
          <p>
            {bodytext}
            <AiOutlineDelete className="del" />
          </p>
        }
      </div>
    </div>
  );
}

export default NoteListBody;
