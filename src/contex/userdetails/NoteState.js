import React, { useState } from "react";
import NoteContext from "./noteContex";
const NoteState=(props)=> {
    // const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setnotes] = useState(notesInitial);
    const addetails = async (title, email, department,roll) => {
        const response = await fetch(`http://localhost:50001/api/user/adduserdetails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({ title, email, department, roll}),
        });
        const note = await response.json();
        setnotes(notes.concat(note));
      };

      const fetchNotes = async () => {
        const response = await fetch(`http://localhost:50001/api/user/allinfo`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
              
          },
        });
        const json = await response.json();
        setnotes(json);
      };
    

  return (
    <div>
      <NoteContext.Provider value={{ notes, addetails,fetchNotes }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
}
export default NoteState;
