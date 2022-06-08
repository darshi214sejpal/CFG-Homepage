import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Rashid",
        "class": "3rd class"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Muskan",
                "class": "1st class"
            })
        }, 1500);
    }
    return(
    <NoteContext.Provider value={{state, update}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;