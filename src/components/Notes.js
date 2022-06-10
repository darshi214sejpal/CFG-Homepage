import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, fetchNote , updateNote} = context
    useEffect(() => {
        fetchNote();
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null);
    const refClose = useRef(null);
    const updateNote2 = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description});
    }

    const [note, setNote] = useState({etitle : "", edescription : "", etag: "Default"})
    const handleClick = (e) => {
        e.preventDefault();
        updateNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
            {/* Modal */}
            <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="etitle" className="form-label"><b>Add Title</b></label>
                                            <input type="text" name='etitle' value={note.etitle} onChange={onChange} className="form-control" id="etitle" aria-describedby="emailHelp" placeholder="Enter title" />
                                        </div>
                                        <h5 className="card-title">Add a note</h5>
                                        <textarea onChange={onChange} value ={note.edescription} className="form-control" name='edescription' id="edescription" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notes */}
            <div className="row">
                <h2 className="my-4">Your Notes</h2><hr />
                {notes.map((note1) => {
                    return <NoteItem key={note1._id} note={note1} updateNote2={updateNote2} />
                })}
            </div>
        </>
    )
}

export default Notes
