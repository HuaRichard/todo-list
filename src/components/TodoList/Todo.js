import React from 'react';

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
    return (
        <li style={{ textDecoration: (completed) ? 'line-through' : 'none' }}
            onClick={() => {
                setState(ToggleCompleteState(state, id));
            }}>
            {text}
        </li>
    )
}

export default Todo;