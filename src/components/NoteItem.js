import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const NoteItem = (props) => {
    const { note , updateNote2} = props
    const context = useContext(noteContext);
    const {deleteNote} = context
    return (
        <div className='col-md-3'>
            <div className="card my-2 mx-2" style={{width: '18 rem'}}>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                    <i onClick={()=>{deleteNote(note._id)}} className="far fa-trash-alt mx-2"></i>
                    <i className="far fa-edit mx-2" onClick={()=>{updateNote2(note)}}></i>

                    </div>

                    </div>
                    <p className="card-text">{note.description}</p>
                    <div style={{textAlign:'right', padding:'8px' }}><b>{new Date(note.date).toGMTString()}</b></div>
                    {/* <button className="btn btn-primary">Delete</button> */}
                </div>
            </div>
        </div>
    )
}

export default NoteItem
