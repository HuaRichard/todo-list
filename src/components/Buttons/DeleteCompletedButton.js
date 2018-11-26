import React from 'react';

export default ({ state, setState }) => {
    return (
        <button onClick={() => 
            setState(state.filter(
                (item)=>(item.completed===false))
            )
        }>
            Remove Completed
        </button>
    )
}