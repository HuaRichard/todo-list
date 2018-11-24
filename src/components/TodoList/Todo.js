import React, { useState } from 'react';

const Todo = ({ text, completed }) => {
    const [completeState, setCompleteState] = useState(completed);
    return (
        <p style={{ textDecoration: (completeState) ? 'line-through' : 'none' }}
            onClick={() => setCompleteState(!completeState)}>
            {text}
        </p>
    )
}

export default Todo;