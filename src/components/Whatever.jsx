import { useState } from "react";

const Whatever = () => {
    const [state, setState] =useState("Initial State");
    return (
        <div>
            <h1>{state}</h1>
            <button onClick = {()=> setState("It's a New State!")}>Click to set state</button>
        </div>
    )


}

export default Whatever