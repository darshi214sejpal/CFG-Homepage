import React from 'react'

const NoteItem = (props) => {
    const { note } = props
    return (
        <div className='col-md-3'>
            <div className="card my-2 mx-2" style={{width: '18 rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div style={{textAlign:'right', padding:'8px' }}><b>{new Date(note.date).toGMTString()}</b></div>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
