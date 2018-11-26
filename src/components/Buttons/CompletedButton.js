import React from 'react';

export default ({ active, setActive }) => {
    return (
        <button 
        disabled={active==='COMPLETED'} 
        onClick={ ()=> setActive('COMPLETED')}>
            Completed
        </button>
    )
}