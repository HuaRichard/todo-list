import React, { useState } from 'react';

const ToggleCompleteState = (state, id) => {
    let newState = [];
    for(let i=0; i<state.length; i++) {
        if(state[i].key===id) {newState.push({
            ...state[i],
            completed: !state[i].completed,
        })}
        else {newState.push(state[i]);}
    }
    return newState;
}

const Todo = ({ text, completed, id, setState, state }) => {
    const [completeState, setCompleteState] = useState(completed);
    return (
        <li style={{ textDecoration: (completeState) ? 'line-through' : 'none' }}
            onClick={() => {
                setCompleteState(!completeState);
                setState(ToggleCompleteState(state, id));
            }}>
            {text}
        </li>
    )
}

export default Todo;