import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context

    const [note, setNote] = useState({title : "", description : "", tag: "Default"})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Welcome to Magic Notes</h2>
            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="addTitle" className="form-label"><b>Add Title</b></label>
                            <input type="text" name='title' onChange={onChange} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" />
                        </div>
                        <h5 className="card-title">Add a note</h5>
                        <textarea onChange={onChange} className="form-control" name='description' id="description" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary" type='submit' onClick={handleClick} >Add Note</button>
                </div>
            </div>

        </div>
    )
}

export default AddNote
