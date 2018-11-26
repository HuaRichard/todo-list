import React from 'react';

export default ({ active, setActive }) => {
    return (
        <button disabled={active==='TODO'} 
        onClick={ ()=> setActive('TODO')}>
            Todo
        </button>
    )
}