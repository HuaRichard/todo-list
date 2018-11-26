import React from 'react';
import Button from './Button';

const filters = [
    {filter: 'ALL', text: 'All'}, 
    {filter: 'COMPLETED', text: 'Completed'}, 
    {filter:'TODO', text: 'Todo'}
];

export default ({ active, setActive }) => {
    return (
        <div>
            {filters.map((i) => 
                <Button 
                key={i.filter}
                active={active} 
                setActive={setActive} 
                filter={i.filter} 
                text={i.text} />)
            }
        </div>    
    )            
}