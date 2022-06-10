import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "62a178d9bedc569f71e5bf887",
          "user": "629f871ec3837ff3de65b2a6",
          "title": "My first note",
          "description": "JPMC note",
          "tag": "Personal",
          "date": "2022-06-09T04:36:42.002Z",
          "__v": 0
        },
        {
            "_id": "62a178d9bedc469f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": "My first note",
            "description": "JPMC note",
            "tag": "Personal",
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          },
          {
            "_id": "62a178d9bedc369f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": "My first note",
            "description": "JPMC note",
            "tag": "Personal",
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          },
          {
            "_id": "62a178d9bedc269f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": "My first note",
            "description": "JPMC note",
            "tag": "Personal",
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          },
          {
            "_id": "62a178d9bedc169f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": "My first note",
            "description": "JPMC note",
            "tag": "Personal",
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          }
      ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API call from backend
        let note = {
            "_id": "62a178d9bedc569f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          }
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API call from backend
        console.log(`Delete : ${id}`);
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
    }
    
    // Update a Note
    const updateNote = () => {

    }
    return(
    <NoteContext.Provider value={{notes, addNote, deleteNote, updateNote}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;