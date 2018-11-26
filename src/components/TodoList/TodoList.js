import React from 'react';
import Todo from './Todo';

const stateList = (state, active) => {
    switch (active) {
        case 'ALL': return state;
        case 'COMPLETED': return state.filter(item => item.completed);
        case 'TODO': return state.filter(item => !item.completed);
        default: return state;
    }
}

const TodoList = ({ state, active, setState }) => {
    return (
        <ul>
        {stateList(state, active).map(todo => (<Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            setState={setState}
            state={state} />))}
        </ul>
    )
}

export default TodoList;