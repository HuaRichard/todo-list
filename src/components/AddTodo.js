import React, {useState} from 'react';

const AddTodo = ({ state, setState }) => {
    const [key, setKey] = useState(0);
    let todo = '';
    return (
        <div>
            <input id='inputBox' onChange={(e) => { todo = e.target.value }} />
            <button  
            onClick={() => {
                (todo.toString().trim() !== '') ? (setState([...state, {
                    key: key,
                    id: key,
                    text: todo,
                    completed: false,
                }])) : (todo = '');
                document.getElementById('inputBox').value = '';
                setKey(key+1);
            }}>
                Add
            </button>
        </div>
    )
}

export default AddTodo;