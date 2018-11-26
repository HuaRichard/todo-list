import React from 'react';

export default ({ active, setActive }) => {
    return (
        <button 
        disabled={active==='ALL'} 
        onClick={ ()=> setActive('ALL')}>
            All
        </button>
    )
}