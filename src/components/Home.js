import React from 'react'
import Notes from './Notes'


const Home = () => {
    // const a = useContext(noteContext)
    // useEffect(()=> {
    //     a.update()
    //     // eslint-disable-next-line
    // }, []);

    return (
        <div>
            <div className="container my-3">
                <h2>Welcome to Magic Notes</h2>
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <div className="mb-3">
                                <label htmlFor="addTitle" className="form-label"><b>Add Title</b></label>
                                <input type="text" className="form-control" id="addTitle" aria-describedby="emailHelp" placeholder="Enter title" />
                            </div>
                            <h5 className="card-title">Add a note</h5>
                            <textarea className="form-control" id="addText" rows="3"></textarea>
                        </div>
                        <button className="btn btn-primary" id="addBtn">Add Note</button>
                    </div>
                </div>
                <Notes />
            </div>
        </div>
    )
}

export default Home
