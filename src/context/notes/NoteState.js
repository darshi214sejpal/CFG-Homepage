import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "62a178d9bedc69f71e5bf887",
          "user": "629f871ec3837ff3de65b2a6",
          "title": "My first note",
          "description": "JPMC note",
          "tag": "Personal",
          "date": "2022-06-09T04:36:42.002Z",
          "__v": 0
        },
        {
            "_id": "62a178d9bedc69f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": "My first note",
            "description": "JPMC note",
            "tag": "Personal",
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          },
          {
            "_id": "62a178d9bedc69f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": "My first note",
            "description": "JPMC note",
            "tag": "Personal",
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          },
          {
            "_id": "62a178d9bedc69f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": "My first note",
            "description": "JPMC note",
            "tag": "Personal",
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          },
          {
            "_id": "62a178d9bedc69f71e5bf887",
            "user": "629f871ec3837ff3de65b2a6",
            "title": "My first note",
            "description": "JPMC note",
            "tag": "Personal",
            "date": "2022-06-09T04:36:42.002Z",
            "__v": 0
          }
      ]
    const [notes, setNotes] = useState(notesInitial)
    return(
    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;