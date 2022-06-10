import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:8000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    // FETCH all notes
    const fetchNote = async () => {
        // API call from backend
        let url = `${host}/api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Zjg3MWVjMzgzN2ZmM2RlNjViMmE2In0sImlhdCI6MTY1NDY4MDQ2MH0.dmeSN_C6P6A7h8M8AvHy2PbmdIfhLl5JUgsyvAAn7vw'
            },

        });
        const json1 = await response.json();
        // console.log(json1);
        setNotes(json1);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO: API call from backend
        let url = `${host}/api/notes/addnote`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Zjg3MWVjMzgzN2ZmM2RlNjViMmE2In0sImlhdCI6MTY1NDY4MDQ2MH0.dmeSN_C6P6A7h8M8AvHy2PbmdIfhLl5JUgsyvAAn7vw'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json1 = await response.json();
        // console.log(json1);


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
    const deleteNote = async (id) => {
        // API call
        let url = `${host}/api/notes/deletenote/${id}`
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Zjg3MWVjMzgzN2ZmM2RlNjViMmE2In0sImlhdCI6MTY1NDY4MDQ2MH0.dmeSN_C6P6A7h8M8AvHy2PbmdIfhLl5JUgsyvAAn7vw'
            }
        });
        const json1 = await response.json();

        console.log(`Delete : ${id}`);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Update a Note
    const updateNote = async (id, title, description, tag) => {
        // API call
        let url = `${host}/api/notes/updatenote/${id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Zjg3MWVjMzgzN2ZmM2RlNjViMmE2In0sImlhdCI6MTY1NDY4MDQ2MH0.dmeSN_C6P6A7h8M8AvHy2PbmdIfhLl5JUgsyvAAn7vw'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json1 = await response.json();
        console.log(json1);

        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, fetchNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;