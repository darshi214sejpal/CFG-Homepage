import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'


const Home = () => {
    // const a = useContext(noteContext)
    // useEffect(()=> {
    //     a.update()
    //     // eslint-disable-next-line
    // }, []);

    return (
            <>
                <AddNote/>
                <Notes />
            </>
    )
}

export default Home
