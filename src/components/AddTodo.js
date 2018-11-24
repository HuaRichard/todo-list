import React from 'react';

const AddTodo = ({ state, setState }) => {
    let todo = '';
    return (
        <div>
            <input id='inputBox' onChange={(e) => { todo = e.target.value }} />
            <button onClick={() => {
                (todo.toString().trim() !== '') ? (setState([...state, {
                    text: todo,
                    completed: false,
                }])) : (todo = '');
                document.getElementById('inputBox').value = '';
            }}>
                Add
            </button>
        </div>
    )
}

export default AddTodo;