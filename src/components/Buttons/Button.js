import React from 'react';

export default ({ active, setActive, filter, text }) => {
    return (
        <button 
        disabled={active===filter} 
        onClick={ ()=> setActive(filter)}>
            {text}
        </button>
    )
}